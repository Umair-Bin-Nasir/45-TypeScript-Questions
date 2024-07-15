"use strict";
function makeSandwich(...items) {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("  - Just bread...");
    }
    else {
        items.forEach((item, index) => {
            console.log(`  - Item ${index + 1}: ${item}`);
        });
    }
    console.log("Enjoy your sandwich!\n");
}
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich("Peanut Butter", "Jelly");
