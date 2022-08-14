function *generator() {
    yield 'first generated'
    yield 'second generated'
}

let gen = generator()
/*
while (true) {
    let {value, done} = gen.next()
    console.log(value, done)

    if(done) {
        break
    }
}
*/

for (let value of generator()){
    console.log(value)
}