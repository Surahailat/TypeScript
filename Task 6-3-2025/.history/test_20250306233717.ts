// Identify if a Number is Even or Odd
// You are given a variable num Check whether the number is even or odd, without using a function.

let num: number=5;
if(num%2==0){
    console.log("Number is Even");
}else{
    console.log("Number is Odd");
    
}



// Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.
let threshold:number=30;
let Products: number[]=[13,40,20,55,111,1.50,3.33]
for (let i = 0; i < Products.length; i++) {
    if (Products[i]>threshold) {
        console.log(Products[i])
    }
}

// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.