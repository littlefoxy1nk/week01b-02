/****** create prompt and give a special message that depen of the animals */
/*let name = prompt("what's your name?")
let animals = prompt("do you rather cat ou dog?")

if (animals=="dog") {
    alert(`hi ${name}, come on to see more about WAOUF WAOUF`);
} else {
   alert(`hi ${name}, come on to see more about MIAOUW MIAOUW`);
}*/

/*const mystery = "Potter7harry"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
} else {
  console.log("TRY AGAIN");
}*/

/****Make a keyless car! This car will only let you drive if you are over 18. Make it do the following:

using prompt() and alert(), ask a user for their age. */
/*let age= prompt("how old are you ?");
switch (true) {
   case age < 18: 
   alert("Sorry, you are too young to drive this car. Powering off");
   break;
   case age == 18 : 
   alert("Congratulations on your first year of driving. Enjoy the ride!");
   break;
   case age > 18 : 
   alert("Powering On. Enjoy the ride!");
   break;
   default: 
   console("empty");
}*/

// favorite food but DRY and efficient 
/*let fruit= prompt("what's your favorite fruit ?");
let fruit1= fruit.toLowerCase();
switch (true) {
   case fruit1 == "bananas" || fruit1 == "strawberry" : 
   alert(`you like ${fruit}`);
   break;
   case fruit1 == "grape" : 
   let color = prompt("color ?");
        switch(true){
            case color == "purple":
                alert("don't like purple grapes");
                break;
            case color == "green": 
                alert("green grapes are ok...");
                break;
            default:
                alert("I dont understand!")
          }
   break;
   default:
    alert(`i dont't understand ${fruit}`);
}*/

let fruits = ['apple', 'orange', 'banana']; 

let newFruits = fruits.unshift('cherry', 'pineaple');

console.log(fruits)