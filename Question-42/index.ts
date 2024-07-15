let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function make_great(magiciansArray: string[]): void {
    for (let i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = `the Great ${magiciansArray[i]}`;
    }
}
function show_magicians(magiciansArray: string[]): void {
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}
make_great(magicians);
show_magicians(magicians);