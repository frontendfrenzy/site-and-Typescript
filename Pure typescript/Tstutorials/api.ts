console.log("hello,Typescript");

class Animl {
    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

// Creating an instance of the class
const dog = new Animl("Dog", 5);

// Accessing properties and methods
console.log(dog.name); // Output: Dog
dog.makeSound(); // Output: Dog makes a sound.




//API RESPONCES
interface ApiResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data: ApiResponse) => {
        console.log('API response:', data);
        // Handle the API response here
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle errors here
    });