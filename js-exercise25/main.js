
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = [...array1, ...array2];

console.log(combined); 


function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}

console.log(multiply(2, 3, 4)); 