const pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];
console.log("Printing pizza names:");
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
console.log("\nStatements about each pizza:");
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}
console.log("\nI really love pizza!");