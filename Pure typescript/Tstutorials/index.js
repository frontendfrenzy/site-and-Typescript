var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var thought = "hello,Good morning how are you!";
var greet = thought.toUpperCase();
console.log(greet);
var user = {
    name: "faleel",
    age: 19,
};
user.name;
console.log("hello,world");
//functions
function greeting(person, date) {
    console.log("hello ".concat(person, ",today is ").concat(date));
}
//this is an industrial grade general purpose greeter function:
greeting("faleel", new Date);
//parameter types of annontations
function data(name) {
    console.log("hello, " + name.toUpperCase() + "!!");
}
/*the type of number not assign in the parameter its assign string
data(45);*/
data("alexender anric");
//run time annontation
function getvalue() {
    //type string is not assignable to the number <--if u apply string its show
    return 56;
}
console.log(getvalue());
function output() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 26];
        });
    });
}
console.log(output());
var selectvalue = 1 /* Problem.valueone */;
if (selectvalue === 1 /* Problem.valueone */) {
    console.log("probably succesfully executed");
}
//Anonymous function
var names = ["Ali", "Faleel", "Nisar"];
//TWO TYPE OF FUNCTIONS
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
//objects in ts
function printcode(pt) {
    console.log("The coordinates x value is" + pt.x);
    console.log("The coordinates y value is" + pt.y);
}
/*output:
The coordinates x value is 3
The coordinates y value is 7
*/
printcode({ x: 3, y: 7 });
function printname(obj) {
    //....
    console.log("my brother names ".concat(obj.first, " and ").concat(obj.last));
}
printname({ first: "alex" });
printname({ first: "Alice", last: "Alisson" });
