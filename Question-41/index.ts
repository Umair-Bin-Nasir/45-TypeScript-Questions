const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians(magiciansArray: string[]): void {
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);