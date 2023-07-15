// console.log('caraka');
function foo () {
    console.log('ini foo');
    return 'nilai foo'
}
function bar(foo) {
    console.log(foo);
}
bar(foo())

setTimeout(()=>{
    console.log('okaii');
},2000)

function calculator(a,b) {
    return a + b
}

function displayer(something) {
    console.log(something(5,5));
}
let result = calculator
displayer(result)

function calculator2(a,b) {
    a + b
}
calculator2(4,5)

