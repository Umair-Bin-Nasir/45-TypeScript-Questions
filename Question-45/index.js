"use strict";
function createCar(manufacturer, model, ...args) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2023]);
console.log(myCar);
