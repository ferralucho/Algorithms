class LazyLoader {
  private initializing: boolean;
  private value: any;
  constructor() {
    this.value = null;
    this.initializing = false;
  }
  public async getVal(x: any) {
    console.log(`${x} -- getval`);
    if (this.initializing && this.value === null) {
      console.log(`${x} -- init phase... waiting...`);
      let waitVal = null;
      const generator = waitUntilLoad(() => this.value);
      do {
        const genResult = await generator.next();
        waitVal = genResult.value;
        console.log(`${x} -- waitUntil load ${JSON.stringify(waitVal, null, 2)}`);
      } while (waitVal === null);
      console.log(`${x} -- init phase... waited on val`);
      return waitVal;
    } else if (this.value === null) {
      console.log(`${x} -- setting initializing`);
      this.initializing = true;
      this.value = await longLoadingThing();
      this.initializing = false;
    }
    console.log(`${x} -- val initialized`)
    return this.value;
  }
}
const delayReturn = async (x:any, time:number) => new Promise(resolve => setTimeout(() => resolve(x), time));
const singletonLoader = new LazyLoader();
const longLoadingThing = async () => {
  // await new Promise(resolve => setTimeout(resolve, 30 * 1000));
  await delayReturn(null, 10 * 1000);
  return {
    lazy: 'loaded',
  }
}
const waitUntilLoad = async function* waitOnInit(checkFn: () => any) {
  while (!checkFn()) {
    // await new Promise(resolve => setTimeout(resolve, 50));
    await delayReturn(null, 5000);
    yield null;
  }
  yield checkFn();
}

const main = async () => {
  console.log(`start`);
  const tryGetSingleton = async (x: any) => await singletonLoader.getVal(x);
  const work = [];
  for (let i = 0; i < 10; ++i) {
    work.push(tryGetSingleton(i));
  }
  const results = await Promise.all(work);
  console.log(results);
  await tryGetSingleton(11111);
  await tryGetSingleton(11112);
  await tryGetSingleton(11113);
  await tryGetSingleton(11114);
};
main();
