"use strict";
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function make_great(magiciansArray) {
    let newArray = [...magiciansArray];
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = `the Great ${newArray[i]}`;
    }
    return newArray;
}
function show_magicians(magiciansArray) {
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}
let modifiedMagicians = make_great(magicians.slice()); // Using slice() to create a shallow copy
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
