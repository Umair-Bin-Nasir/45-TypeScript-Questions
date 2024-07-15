type Car = {
  manufacturer: string;
  model: string;
  [key: string]: any;
};
function createCar(
  manufacturer: string,
  model: string,
  ...args: [string, any][]
): Car {
  let car: Car = {
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
