let guestList3 = ["Mubashir", "Anas", "Rehan"];
console.log(`I would like to invite you to dinner ${guestList3[0]}`);
console.log(`I would like to invite you to dinner ${guestList3[1]}`);
console.log(`I would like to invite you to dinner ${guestList3[2]}`);
console.log("I just heared that Rehan can't make the dinner");
guestList3.pop();
guestList3.push("Amir");
console.log(`I would like to invite you to dinner ${guestList3[0]}`);
console.log(`I would like to invite you to dinner ${guestList3[1]}`);
console.log(`I would like to invite you to dinner ${guestList3[2]}`);
console.log("Hey guys, I found a bigger dinner table");
guestList3.unshift("Jawad");
guestList3.splice(2, 0, "Hassan");
guestList3.push("Junaid");
console.log(`I would like to invite you to dinner ${guestList3[0]}`);
console.log(`I would like to invite you to dinner ${guestList3[1]}`);
console.log(`I would like to invite you to dinner ${guestList3[2]}`);
console.log(`I would like to invite you to dinner ${guestList3[3]}`);
console.log(`I would like to invite you to dinner ${guestList3[4]}`);
console.log(`I would like to invite you to dinner ${guestList3[5]}`);
console.log("I can invite only two people for dinner");
console.log(`I am sorry ${guestList3[5]}, I can't invite you to dinner`);
guestList3.pop();
console.log(`I am sorry ${guestList3[4]}, I can't invite you to dinner`);
guestList3.pop();
console.log(`I am sorry ${guestList3[3]}, I can't invite you to dinner`);
guestList3.pop();
console.log(`I am sorry ${guestList3[2]}, I can't invite you to dinner`);
guestList3.pop();
console.log(`You are still invited ${guestList3[1]}`);
console.log(`You are still invited ${guestList3[0]}`);
guestList3.pop();
guestList3.pop();
console.log(guestList3)