let personName = "umair bin nasir";
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.replace(/\b\w/g, (char: string) => char.toUpperCase()));