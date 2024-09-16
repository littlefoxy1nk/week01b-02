let numberMax;

while ( isNaN(numberMax)) {
    numberMax = parseInt(prompt("enter a max number ?"))
} 

const secretNumber = Math.floor(Math.random()* numberMax )+1;
console.log(secretNumber);


let findNumber = parseInt(prompt("which number am i? "))

while (findNumber != secretNumber){
    switch (true){
        case isNaN(findNumber):
            alert('try a number');
            break;
        case findNumber < secretNumber:
            alert('more');
            break;
        case findNumber > secretNumber:
            alert ('less');
            break;
    }
    findNumber = parseInt(prompt("try again!"))
}
alert('congrats')







