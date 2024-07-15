"use strict";
// Define an array containing numbers from 1 to 9
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Function to determine the ordinal suffix based on the number
function getOrdinalSuffix(num) {
    // Special cases for 1, 2, 3
    if (num === 1) {
        return "st";
    }
    else if (num === 2) {
        return "nd";
    }
    else if (num === 3) {
        return "rd";
    }
    else {
        return "th";
    }
}
// Loop through the array and print each number with its ordinal suffix
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const ordinalSuffix = getOrdinalSuffix(number);
    console.log(`${number}${ordinalSuffix}`);
}
