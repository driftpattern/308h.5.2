// https://ps-react-curriculum.herokuapp.com/308H/5/lab-2
// callback functions (i.e forEach, map, filter, reduce, find, every, etc).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

/*
// Every
// Determine if every number is greater than or equal to 0.
// Determine if every word shorter than 8 characters.
function myCheck1(element, index, array) {
    return element >= 0;
}
console.log(nums.every(myCheck1));


function myCheck2(element, index, array) {
    return element.length < 8;
}
console.log(panagram.every(myCheck2));


// Filter
// filter the array for numbers less than 4.
// Filter words that have an even length.
function myCheck1(element, index, array) {
    return element < 4;
}

console.log(nums.filter(myCheck1));

const result = panagram.filter(element => element.length % 2);
console.log(result);



// Find
// Find the first value divisible by 5.
// Find the first word that is longer than 5 characters.

const found = nums.find(element => element % 5 === 0);
console.log(found);


const found2 = panagram.find(element => element.length > 5);

console.log(found2);



// For Each
// Log each value of the array multiplied by 3.
// Log each word with an exclamation point at the end of it.
nums.forEach(element => console.log(element * 3));

panagram.forEach(element => console.log(element + "!"));



// Map
// Make a new array of each number multiplied by 100.
// Make a new array of all of the words in all uppercase.

const map1 = nums.map(index => index * 100);
console.log(map1);

const map2 = panagram.map(index => index.toUpperCase());
console.log(map2);


// Some
// Find out if some numbers are divisible by 7.
// Find out if some words have the letter a in them.
const isDivBySeven = nums.find(element => element % 7 === 0);
console.log(isDivBySeven);

const hasLetterA = panagram.find(element => element.includes("a"));
console.log(hasLetterA);


// Reduce
// Add all of the numbers in the array together using the reduce method.
// Concatenate all the words using reduce.
const reduceNums = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(reduceNums);

const reducePanagram = panagram.reduce((a, b) => a + b);
console.log(reducePanagram);
 


// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
// Try to sort without any arguments, do you get what you'd expect with the words array?
// Sort the numbers in ascending order.
// Sort the numbers in descending order.
// Sort the words in ascending order.
// Sort the words in descending order.
const numsSort = nums.sort();
console.log(numsSort);

const numsSort2 = nums.sort((accumulator, currentValue) => accumulator - currentValue);
console.log(numsSort2);

const numsSort3 = nums.sort((accumulator, currentValue) => currentValue - accumulator);
console.log(numsSort3);
*/
const wordsSort = panagram.sort();
//console.log(wordsSort);

const wordsSort2 = panagram.map(word => word.toLowerCase()).sort();
console.log("ascending: " + wordsSort2); //ascending order
console.log("descending: " + wordsSort2.reverse()); // descending order
