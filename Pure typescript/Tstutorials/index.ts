let thought:string = "hello,Good morning how are you!";
let greet = thought.toUpperCase();
console.log(greet);

const user = {
    name:"faleel",
    age:19,
};
user.name;

console.log("hello,world");


//functions
function greeting(person:string,date:any){
   console.log(`hello ${person},today is ${date}`);
}
//this is an industrial grade general purpose greeter function:
greeting("faleel",new Date);

//parameter types of annontations
function data(name:string){
    console.log("hello, "+name.toUpperCase()+"!!");
}
/*the type of number not assign in the parameter its assign string
data(45);*/
data("alexender anric");

//run time annontation
function getvalue():number{
    //type string is not assignable to the number <--if u apply string its show
    return 56;
}
console.log(getvalue());

async function output(): Promise<number>{
     return 26;
}
console.log(output());



//Preserve enum cooncept
/*const enums is provide a way to reduce the overall memory footprint
of your application at runtime by emitting the enum value instead
of a reference.
*/
const enum Problem{
    valueone = 1,
    valuetwo = 2,
    valuethree = 3,
}
const selectvalue = Problem.valueone;
if (selectvalue === Problem.valueone){
    console.log("probably succesfully executed");
}

//Anonymous function
const names = ["Ali","Faleel","Nisar"];
//TWO TYPE OF FUNCTIONS
names.forEach(function(s){
    console.log(s.toUpperCase());
})

names.forEach((s)=>{
    console.log(s.toUpperCase());
})



//objects in ts
function printcode(pt:{x:number; y:number}){
    console.log("The coordinates x value is"+pt.x);
    console.log("The coordinates y value is"+pt.y);
}
/*output:
The coordinates x value is 3
The coordinates y value is 7
*/
printcode({x:3,y:7});

function printname(obj:{first:string; last?:string}){
    //....
    console.log(`my brother names ${obj.first} and ${obj.last}`);
}
printname({first:"alex"});
printname({first:"Alice",last:"Alisson"});

