//Classes
class point{
   x = 0;
   y = 0; 
}
const pt = new point();
console.log(`${pt.x},${pt.y}`);
// output -->    0       0

//assign the value in typescrit classes
class goodgreeter{
   readonly name:string;
    age:number;
    company:string;
    job:boolean;
    
    constructor(){
        this.name = "faleel";
        this.age = 19;
        this.company = "Meta";
        this.job = true;
    }
}

//step --> 1
class Animal {
    move() {
      console.log("Moving along!");
    }
  }
  class Dog extends Animal {
    woof(times: number) {
      for (let i = 0; i < times; i++) {
        console.log("woof!");
      }
    }
  }
   
  const d = new Dog();
  // Base class method
  d.move();
  // Derived class method
  d.woof(3);

  //step --> 2
  class Base {
    greet() {
      console.log("Hello, world!");
    }
  }
   
  class Derived extends Base {
    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }
   
  const der = new Derived();
  der.greet();
  //output --> hello world
  der.greet("reader");
  //output --> hello READER

  //step3
  class Bases {
    name = "base";
    constructor() {
      console.log("My name is " + this.name);
    }
  }
   
  class Deriveds extends Bases {
    name = "derived";
  }
   
  // Prints "base", not "derived"
  const derid = new Derived();

console.log(derid);
/*
What happened here?

The order of class initialization, as defined by JavaScript, is:

*The base class fields are initialized
*The base class constructor runs
*The derived class fields are initialized
*The derived class constructor runs

*/

//public in classes
class Greeter {
    public greet():void {
      console.log("hi!");
    }
  }
  const g = new Greeter();
  g.greet();



  //protected in classes
  class Bas {
    protected m = 10;
  }
  class Derive extends Bas {
    // No modifier, so default is 'public'
    m = 15;
  }
  const dir = new Derived();
  console.log(dir); // OK



  //private in classes
  class MySafe {
    //private secretKey = 12345;
    public secretKey = 12345;
  }
  // In a JavaScript file...
  const s = new MySafe();
  // Will print 12345   
  console.log(s.secretKey);


  class Bse {
    static getGreeting() {
      return "Hello world";
    }
  }
  class Drived extends Bse {
    //myGreeting = Derived.getGreeting();
  }

  let value = new Bse()
  console.log(value);

  //this at Runtime in Classes
  class MyClass {
    name = "MyClass";
    getName() {
      return this.name;
    }
  }
  const c = new MyClass();
  const oj = {
    name: "obj",
    getName: c.getName,
  };
   
  // Prints "obj", not "MyClass"
  console.log(oj.getName());



  //Arrow function in Typescript
  class Myclass {
    name = "MyClass";
    getName = () => {
      return this.name;
    };
  }
  const e = new MyClass();
  //const f = e.getName;
  // Prints "MyClass" instead of crashing
  //console.log(f());