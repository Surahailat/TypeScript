// Identify if a Number is Even or Odd
// You are given a variable num Check whether the number is even or odd, without using a function.
var num = 5;
if (num % 2 == 0) {
    console.log("Number is Even");
}
else {
    console.log("Number is Odd");
}
// Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.
var threshold = 30;
var Products = [13, 40, 20, 55, 111, 1.50, 3.33];
for (var i = 0; i < Products.length; i++) {
    if (Products[i] > threshold) {
        console.log(Products[i]);
    }
}
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.
var sumNumber = 0;
var numbers = [2, 4, 6, 8, 10, 12, 14];
for (var x = 0; x < numbers.length; x++) {
    sumNumber = numbers[x] + sumNumber;
}
console.log(sumNumber);
