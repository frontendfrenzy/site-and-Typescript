//Fuction ---> typescript
function greeter(fn) {
    fn("hello,world");
}
function printconsole(s) {
    console.log(s);
}
greeter(printconsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default description";
doSomething(myFunc);
//optional parameter
function f(n) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
function len(x) {
    return x.length;
}
console.log(len("hello")); // OK
console.log(len([0])); // OK
console.log(len([4, 5, 6]));
//unknow
function f1(a) {
    a.b(); // OK
}
function f2(a) {
    // a.b();
}
function safeParse(s) {
    return JSON.parse(s);
}
// Need to be careful with 'obj'!
var obj = safeParse("hello welcome to Typescript");
console.log(obj);
function fn(x) {
    if (typeof x === "string") {
        console.log("strings successfully exicuted");
    }
    else if (typeof x === "number") {
        console.log("number successfully executed");
    }
    else {
        x; // has type 'never'!
    }
}
console.log(fn("hello"));
