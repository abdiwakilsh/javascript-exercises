function calculateArea(width, height = width) {
    return width * height;
}

console.log(calculateArea(5));    // Output: 25
console.log(calculateArea(5, 10)); // Output: 50