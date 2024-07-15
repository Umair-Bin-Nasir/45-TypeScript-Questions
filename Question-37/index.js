"use strict";
function make_shirt(message = "I love TypeScript", size = "Large") {
    console.log(`You have ordered a ${size} T-shirt with the message: "${message}".`);
}
make_shirt();
make_shirt(undefined, "Medium");
make_shirt("TypeScript is awesome!", "Small");
