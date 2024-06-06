console.log("hello,Typescript");
var Animl = /** @class */ (function () {
    // Constructor
    function Animl(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    Animl.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes a sound."));
    };
    return Animl;
}());
// Creating an instance of the class
var dog = new Animl("Dog", 5);
// Accessing properties and methods
console.log(dog.name); // Output: Dog
dog.makeSound(); // Output: Dog makes a sound.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
    .then(function (data) {
    console.log('API response:', data);
    // Handle the API response here
})
    .catch(function (error) {
    console.error('There was a problem with the fetch operation:', error);
    // Handle errors here
});
