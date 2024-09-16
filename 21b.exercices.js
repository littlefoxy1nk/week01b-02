/*function roll(faces, times) {
    
    for (i=1 ; i <= times ; i++) { 
    let result = Math.floor(Math.random() *faces)+1;
    console.log(`die ${i} : ${result}`);
    };
};

roll(6, 2);*/

/*function strinRepeat(str, num) {
    let result= "";
   for (let i=0; i<=num; i++){
   result += str ;
   }
   console.log(result)
};

strinRepeat("aby ", 3);*/

/*function fullName(firstName, lastName){
    let firstLetter = lastName.charAt(0);
    console.log(`This is ${firstName} ${firstLetter} .` );
};

fullName("Chloé", "Hamoir")*/

/*function sum(num1, num2){
    if (typeof num1 !== 'number' || typeof num1 !== 'number'){
        return "please enter number";
    } else
    return num1+num2
};

const myVariable = sum( "a", 6);
console.log(myVariable); //ok print please

const myVariable = sum(3, 6);
console.log(myVariable); //9
*/
/*function logs() {
    console.log("Hello");
    console.log("World");
    return 4;
    console.log("Goodbye");
    console.log("World");
  }
  
  const myVariable = logs();
  
  console.log(myVariable); */

/*function isShortWeather(temp){
    if (temp >= 24){
        return true 
    } else 
    return false
};
isShortWeather(13); // false
isShortWeather(27); // true
isShortWeather(-7); */

/*function lastElement (array){
    if (array = []){
        return null
    } else
    return array[array.length-1]
};

lastElement([3, 5, 7]); //7
lastElement([1]); //1
lastElement([]); //null*/

/*
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
capitalize("eggplant"); // "Eggplant"
capitalize("pamplemousse"); // "Pamplemousse"
capitalize("squid"); //"Squid" */

/*function sumArray(array){
    let result = 0; 
    for (let i=0; i< array.length ; i++){
    if (typeof array[i] !== 'number'){
    return "please enter a number" ;
    } else 
    result += array[i];
    } 
    return result; 
};


    console.log(sumArray([1, 2, 3]));
    console.log (sumArray([2, 2, 2, 2]));*/

/*function returnDay(num){
    let day = ["monday"," tuesday", "wednesday", "thuesday", "friday", "saturday", "sunday"];
    if (num < 1 || num > 7) {
        return null;
       } else 
       return num = day[num-1]
    }
   console.log(returnDay(1));*/

 
