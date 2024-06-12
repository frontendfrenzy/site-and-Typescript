//Generic
//GENERIC FUNCTIONS
function identy<T>(arg:T):T{
    return arg;
}
let output1 = identy<string>("hello,world");
let output2 = identy<number>(100);

console.log(output1);
//hello world
console.log(output2);
//100

//GENERIC CLASSES
class genericnum<T>{
    zerovalue:T;
    add:(x:T,y:T) => T;

    constructor(zerovalue:T,addFruction:(x:T,y:T)=>T){
           this.zerovalue = zerovalue;
           this.add = addFruction;
    }
}
let mygeneric = new genericnum<number>(0,(x,y)=>x+y);
console.log(mygeneric.add(5,10));
//output: 15


//GENERIC INTERFACE AND TYPE ALSO SAME CONCEPT
interface lengthwise {
    length:number;
}
function loglength<T extends lengthwise>(arg:T):T{
    console.log(arg.length);
    return arg;
    // return --> 10 ---> output
}
loglength({length:10});


//GENERIC ARRAY CONCEPT
function getarray<T>(items:T[]):T[]{
    return new Array<T>().concat(items);
}
let numarray = getarray<number>([1,2,3,4]);
let stringarray = getarray<string>(["hello","hi","how are you"]);
 numarray.push(5);
 console.log(numarray);
 //output --> [1,2,3,4,5];
 stringarray.push("!");
 console.log(stringarray);
 //output --> ["heelo","hi","how are you","!"];

