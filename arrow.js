function sum(x = 2, y = 2){
    // let x = x || 2;
    // let y = y || 2;
    let result = x + y;
    return result;
}
console.log(sum());

const sum = (x = 2, y = 2) => {
    let result = x + y;
    return result;
}

const sum = (x, y) => x + y;

const printHello = () => console.log("Hello World");

foo();
var foo = () => console.log("foo");
function foo(){
    console.log("foo");
}