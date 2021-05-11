const performAsyncTimeout = async (number) => {
  return new Promise((resolve) => setTimeout(() => console.log(`end ${number}`) || resolve(), number * 1000))
}

const test = async () => {
  console.log(`test start -----`);

  const testThings = [1,2,3,4].map(async (n) => {
    return performAsyncTimeout(n);
  });

  await Promise.all(testThings);

  console.log(`testEnd`);
}

const main = async () => {
  await test();
};


main();
test start -----
end 1
end 2
end 3
end 4
testEnd
const performAsyncTimeout = async (number) => {
  return new Promise((resolve) => setTimeout(() => console.log(`end ${number}`) || resolve(), number * 1000))
}

const test = async () => {
  console.log(`test start -----`);

  const testThings = [1,2,3,4].map(async (n) => {
    performAsyncTimeout(n);                               // REMOVED RETURN HERE
  });

  await Promise.all(testThings);

  console.log(`testEnd`);
}

const main = async () => {
  await test();
};


main();
test start -----
testEnd                <--- note this log before timeouts complete
end 1
end 2
end 3
end 4
