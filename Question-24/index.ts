// Tests for equality and inequality with strings 
let fruit = "orange";
console.log("Is fruit === apple? I predict False.")
console.log(fruit === "apple");
console.log("Is fruit != apple? I predict True.")
console.log(fruit != "apple");
let myName = "Umair";
console.log("Is myName == Umair? I predict True.")
console.log(myName == "Umair");
console.log("Is myName == ali? I predict False.")
console.log(myName == "ali");

//Tests using the lower case function
let fruit1 = "orange";
console.log("Is fruit1 == Orange? I predict False.")
console.log(fruit1 == "Orange");
console.log("Is fruit1 != apple? I predict True.")
console.log(fruit != "apple");
let myname = "Umair";
console.log("Is myname == Umair? I predict True.")
console.log(myname == "Umair");
console.log("Is myname == umair? I predict False.")
console.log(myname == "umair");

//  Numerical tests involving equality and inequality,
// greater than and less than, greater than or equal to, and less than or equal to
let num = 15;
console.log("Is num == 15 I predict True.")
console.log(num == 15);
console.log("Is num != 15 I predict False.")
console.log(num != 15);
console.log("Is num > 5 I predict True.")
console.log(num > 5);
console.log("Is num < 5 I predict False.")
console.log(num < 5);
console.log("Is num >= 15 I predict True.")
console.log(num >= 5);
console.log("Is num <= 5 I predict False.")
console.log(num <= 5);

// Tests using "and" and "or" operators
let a = 6;
console.log("Is a > 2 && a < 7 I predict True.")
console.log(a > 2 && a < 7);
console.log("Is a > 6 || a < 9 I predict True.")
console.log(a > 6 || a < 9);


let fruits: string[] = ["apple", "banana", "orange", "grape", "kiwi"];
// Test whether an item is in a array
if (fruits.includes("orange")) {
    console.log("Orange is in the array.");
} else {
    console.log("Orange is not in the array.");
}

// Test whether an item is not in a array
if (fruits.includes("pear")) {
    console.log("Pear is in the array.");
} else {
    console.log("Pear is not in the array.");
}
