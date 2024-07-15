let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function make_great(magiciansArray: string[]): string[] {
    let newArray: string[] = [...magiciansArray];
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = `the Great ${newArray[i]}`;
    }
    return newArray;
}
function show_magicians(magiciansArray: string[]): void {
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}
let modifiedMagicians: string[] = make_great(magicians.slice()); // Using slice() to create a shallow copy
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
