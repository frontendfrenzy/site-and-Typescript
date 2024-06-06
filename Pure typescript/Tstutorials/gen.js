//Generic
function getFirstelement(array) {
    return array[0];
}
var numbers = [1, 2, 3];
var firstNum = getFirstelement(numbers);
var strings = ["hello", "welcome", "how are you!"];
var firststrings = getFirstelement(strings);
var boolean = [true, false, true];
var firstboolean = getFirstelement(boolean);
//example
var A = [1, 2, 3];
A.map(function () {
    return "hello";
});
//ex2
var map = new Map();
map.set("hello", 3);
//const responces: ApiResponces<{name:string,}>
//const responces: ApiResponces<{name:string}>
var responces = {
    data: {
        status: 200,
    },
    isError: false,
};
