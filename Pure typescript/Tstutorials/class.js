var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Classes
var point = /** @class */ (function () {
    function point() {
        this.x = 0;
        this.y = 0;
    }
    return point;
}());
var pt = new point();
console.log("".concat(pt.x, ",").concat(pt.y));
// output -->    0       0
//assign the value in typescrit classes
var goodgreeter = /** @class */ (function () {
    function goodgreeter() {
        this.name = "faleel";
        this.age = 19;
        this.company = "Meta";
        this.job = true;
    }
    return goodgreeter;
}());
//step --> 1
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving along!");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.woof = function (times) {
        for (var i = 0; i < times; i++) {
            console.log("woof!");
        }
    };
    return Dog;
}(Animal));
var d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
//step --> 2
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.greet = function () {
        console.log("Hello, world!");
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.greet = function (name) {
        if (name === undefined) {
            _super.prototype.greet.call(this);
        }
        else {
            console.log("Hello, ".concat(name.toUpperCase()));
        }
    };
    return Derived;
}(Base));
var der = new Derived();
der.greet();
//output --> hello world
der.greet("reader");
//output --> hello READER
//step3
var Bases = /** @class */ (function () {
    function Bases() {
        this.name = "base";
        console.log("My name is " + this.name);
    }
    return Bases;
}());
var Deriveds = /** @class */ (function (_super) {
    __extends(Deriveds, _super);
    function Deriveds() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "derived";
        return _this;
    }
    return Deriveds;
}(Bases));
// Prints "base", not "derived"
var derid = new Derived();
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
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        console.log("hi!");
    };
    return Greeter;
}());
var g = new Greeter();
g.greet();
//protected in classes
var Bas = /** @class */ (function () {
    function Bas() {
        this.m = 10;
    }
    return Bas;
}());
var Derive = /** @class */ (function (_super) {
    __extends(Derive, _super);
    function Derive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // No modifier, so default is 'public'
        _this.m = 15;
        return _this;
    }
    return Derive;
}(Bas));
var dir = new Derived();
console.log(dir); // OK
//private in classes
var MySafe = /** @class */ (function () {
    function MySafe() {
        //private secretKey = 12345;
        this.secretKey = 12345;
    }
    return MySafe;
}());
// In a JavaScript file...
var s = new MySafe();
// Will print 12345   
console.log(s.secretKey);
var Bse = /** @class */ (function () {
    function Bse() {
    }
    Bse.getGreeting = function () {
        return "Hello world";
    };
    return Bse;
}());
var Drived = /** @class */ (function (_super) {
    __extends(Drived, _super);
    function Drived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Drived;
}(Bse));
var value = new Bse();
console.log(value);
//this at Runtime in Classes
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.name = "MyClass";
    }
    MyClass.prototype.getName = function () {
        return this.name;
    };
    return MyClass;
}());
var c = new MyClass();
var oj = {
    name: "obj",
    getName: c.getName,
};
// Prints "obj", not "MyClass"
console.log(oj.getName());
//Arrow function in Typescript
