<<<<<<< HEAD
const people = [
    { name: "Alice", age: 25, city: "Wonderland" },
    { name: "John", age: 30, city: "New York" },
    { name: "Sarah", age: 22, city: "London" },
    { name: "Ahmed", age: 35, city: "Dubai" }
];

for (const person of people) {
    for (const key in person) {
        console.log(key + ": " + person[key]);
    }
    console.log("----------------");
=======
const people = [
    { name: "Alice", age: 25, city: "Wonderland" },
    { name: "John", age: 30, city: "New York" },
    { name: "Sarah", age: 22, city: "London" },
    { name: "Ahmed", age: 35, city: "Dubai" }
];

for (const person of people) {
    for (const key in person) {
        console.log(key + ": " + person[key]);
    }
    console.log("----------------");
>>>>>>> d7974f49d60c8e7bf0b4afdbf53063372dc0c1ad
}