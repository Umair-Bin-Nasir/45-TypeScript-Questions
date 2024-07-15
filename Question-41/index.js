"use strict";
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians(magiciansArray) {
    magiciansArray.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
