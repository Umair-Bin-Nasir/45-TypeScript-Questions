// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty
let userNames = ["admin", "asad", "ali", "umar", "zain"];
// If the list is empty, print the message We need to find some users!
if (userNames.length === 0){
    console.log("We need to find some users!");
}
else {
    console.log("Current list of users:");
    console.log(userNames);
    userNames = [];
}
if (userNames.length === 0) {
    console.log("We need to find some users!");
}