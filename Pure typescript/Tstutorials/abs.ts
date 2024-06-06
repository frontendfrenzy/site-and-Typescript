//Union Types

function printId(id:number | string){
    console.log("your ID is:"+id);
}
printId(89);
printId("hello");

function printid(id:number|string){
    if(typeof id === "string"){
        //in the branch, id is of type 'string'
        console.log(id.toUpperCase());
    }else{
        //here id is of type 'number'
        console.log(id);
    }
}
printid("hi are you okay what happen!");


//function like array isarray
function welcome(x:string[]|string){
    if(Array.isArray(x)){
        //here: 'x' is 'string[]'
     console.log("hello, "+ x.join("and"));
    }else{
        //here:'x' is 'string'
        console.log("welcome lone traveler"+x);
    }
}

function getnum(x:number[]|string){
    return x.slice(8,3);
}
console.log(getnum);



//Type Aliases in typescript

//TYPE
type Point = {
    x:number;
    y:number;
}

function printdigit(pt:Point){
    console.log("The coordinates x value is"+pt.x);
    console.log("The coordinates y value is"+pt.y);
}
printdigit({x:100,y:100});

type DB = {
    name:string;
    age:number;
    company:string;
    passcode:number;
}

function Dtabase(pt:DB){
    console.log("hello sir my name "+pt.name);
    console.log("i am "+pt.age+" years old ");
    console.log("i am a "+pt.company);
    console.log("my id pass "+pt.passcode);
}
Dtabase({name:"faleel",age:19,company:"meta developer",passcode:78});



//INTERFACE
interface point {
    x:number;
    y:number;

}

function printDigit(pt:point){
    console.log("The coordinates x value is"+pt.x);
    console.log("The coordinates y value is"+pt.y);
}
printDigit({x:100,y:100});

interface persondata {
    name:string;
    age:number;
    company:string;
    passcode:number;
}

function Database(pt:persondata){
    console.log("hello sir my name "+pt.name);
    console.log("i am"+pt.age+"years old ");
    console.log("i am a "+pt.company);
    console.log("my id pass "+pt.passcode);
}
Database({name:"faleel",age:19,company:"meta developer",passcode:78});



//Literal Types
function printText(s:string,aligment:"left"|"right"|"center"){
    //.....
}
printText("hello,Ts","left");
//you give uncorrect values its show parameter not assign this word
//prinText("hello,Rt","rigt");
printText("hello,Js","center");



/*
// Define literal types for the traffic light states
type TrafficLightState = 'red' | 'yellow' | 'green';

// Function to get the next state of the traffic light
function getNextTrafficLightState(currentState: TrafficLightState): TrafficLightState {
    switch (currentState) {
        case 'red':
            return 'green';
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        default:
            // Using never here helps ensure we covered all possible cases
            const exhaustiveCheck: never = currentState;
            throw new Error(Unhandled case: ${exhaustiveCheck});
    }
}

// Simulate changing the traffic light state
let currentState: TrafficLightState = 'red';

console.log(Current state: ${currentState});
currentState = getNextTrafficLightState(currentState);
console.log(Next state: ${currentState});
currentState = getNextTrafficLightState(currentState);
console.log(Next state: ${currentState});
currentState = getNextTrafficLightState(currentState);
console.log(Next state: ${currentState});

*/




//numeric literals
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }
 console.log(compare("hi","hi"));


 
  function dosomething(x:string|null){
    if(x === null){
        //do nothing
    }else{
        console.log("hello,"+x.toUpperCase());
    }
  }
  dosomething("world");
  //hello,WORLD




  //bigInt in Ts
  function whatkindofnumber(x: number|bigint){
    if(typeof x === "bigint"){
        console.log("'x' is a bigint!");
    }else{
        console.log("'x' is a floating-point number");
    }
  }
  whatkindofnumber(100);


 /*
 // bigint-example.ts

// Create BigInt numbers
const bigInt1: bigint = BigInt("123456789012345678901234567890");
const bigInt2: bigint = BigInt("987654321098765432109876543210");

// Addition
const sum: bigint = bigInt1 + bigInt2;
console.log(Sum: ${sum});

// Subtraction
const difference: bigint = bigInt2 - bigInt1;
console.log(Difference: ${difference});

// Multiplication
const product: bigint = bigInt1 * bigInt2;
console.log(Product: ${product});

// Division
const quotient: bigint = bigInt2 / bigInt1;
console.log(Quotient: ${quotient});

// Remainder
const remainder: bigint = bigInt2 % bigInt1;
console.log(Remainder: ${remainder});

// Power
const power: bigint = bigInt1 ** BigInt(2);
console.log(Power: ${power});
 */