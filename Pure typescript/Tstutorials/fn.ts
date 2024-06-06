//Fuction closer ---> typescript
function greeter(fn:(a:string)=> void){
    fn("hello,world");
}
function printconsole(s:string){
    console.log(s);
}
greeter(printconsole);

function input(pt:(s:string,n:number)=>void){
  pt("hi ariana grande",89);
}
function inputvalue(d:string,m:number){
 console.log(d);
 console.log(m);
}
input(inputvalue);



//call signature
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    //       default description   returned     true
    console.log(fn.description + " returned " + fn(6));
  }
   
  function myFunc(someArg: number) {
    //6 > 3 --> true
    return someArg > 3;
  }
  myFunc.description = "default description";
   
  doSomething(myFunc);
  //output:default description returned true


//optional parameter

function f(n:number){
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}


function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

console.log(len("hello")); // OK
console.log(len([0])); // OK
console.log(len([4,5,6]));

//unknow
function f1(a: any) {
    a.b(); // OK
  }
  function f2(a: unknown) {
   // a.b();
  }

  function safeParse(s: string): unknown {
    return JSON.parse(s);
  }
  // Need to be careful with 'obj'!
  const obj = safeParse("hello welcome to Typescript");
  console.log(obj);


  function fn(x: string | number) {
    if (typeof x === "string") {
      console.log("strings successfully exicuted");
    } else if (typeof x === "number") {
      console.log("number successfully executed")
    } else {
      x; // has type 'never'!
    }
  }
  console.log(fn("hello"));


//Rest parameter and arguments

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1);

  function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }
  // 'a' gets value [10, 20, 30, 40]
  const a:number[] = multiply(10, 1, 2, 3, 4);
  console.log(a);

//parameter destructuring
function sum({ a, b, c }:{a:number;b:number;c:number}) {
    console.log(a + b + c);
  }
  sum({ a: 10, b: 3, c: 9 });