//Generic
function getFirstelement<ElementType>(array:ElementType[]){
    return array[0]
}

const numbers = [1,2,3]
const firstNum = getFirstelement<number>(numbers);

const strings = ["hello","welcome","how are you!"];
const firststrings = getFirstelement<string>(strings)

const boolean = [true,false,true];
const firstboolean = getFirstelement<boolean>(boolean);

//example
const A:number[] = [1,2,3];
A.map(()=>{
    return "hello"
})

//ex2
const map = new Map<string, number>()
map.set("hello",3)




/*
//generic advanced concept
type ApiResponces<Data = {status:number}> = {
    data:Data
    isError:boolean
}
//const Responces:ApiResponces<{name:string,age:number}>
type Userresponces = ApiResponces<{name:string,age:number}>
type blogresponces = ApiResponces<{title:string}>
type statusresponces = ApiResponces<{status:number}>
const Responces: Userresponces = {
    data:{
         name:"faleel",
         age:19,
    },
    isError:false,
}

const Responcesblog: blogresponces = {
    data:{
        title:"hola"
    },
    isError:false,
}*/

//type ApiResponces<Data  = {status:number}>
type ApiResponces<Data extends object = {status:number}> ={
    data:Data,
    isError:boolean
}

//const responces: ApiResponces<{name:string,}>
//const responces: ApiResponces<{name:string}>
const responces: ApiResponces = {
    data:{
           status:200,
    },
    isError:false,
}