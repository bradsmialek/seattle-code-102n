var age = 23;
var myname = "Bleu Olive";
var yourname = prompt('Please enter your name');

document.write('<h1> Welcome '+yourname+'</h1>');
document.write('<h4> My age is ' +age+ '</h4');

x = 7;
y = 7 + 3;
console.log(y);

if(5 < 2){
    console.log('5 is greater than 2');
}

//Comparison operators used in conditional expressions
x < y;
x > y;
x == y;
x != y;
x === y;

var x = 5
var y = '5';

console.log(x === y);

//Arithmetic operators
/*
x + y;
x - y;
x * y;
x / y;
x++;
x--;*/

var y = 6%2;

console.log(y);

/*
Logical Operators
x && y;
!x;
!y;
x || y;
*/

var tired = true;
var hungry = false;
var runErrands;

if(tired && hungry){
    runErrands = false;
}

//console.log(!tired);

//A function is a container that contains series of statements that performed whenever the function is called

function myFunction(){

    var tired = true;
    var hungry = false;
    var runErrands;

    if(!tired){
        runErrands = true;
        console.log('running errands');
    
    }
    else if(!hungry){
        runErrands = true;
        console.log('running errands and I am tired');
    }
    
    else{
        console.log("I'm staying home");
    } 
}

function multiply(x,y){

    return x*y;
}

let firstnum = Math.floor(Math.random() * 10); 
let secondnum = Math.floor(Math.random() * 10);
let z = multiply(firstnum,secondnum);

console.log(z);
console.log(firstnum);
console.log(secondnum);


5; //number
'Hello There';//String
False, True; //Booleans
undefined; //Not defined*/

var hours_worked = 0;
var tired = false;
var hungry = false;

while(!tired){
    console.log("Working");
    hours_worked++;
    
    if(hours_worked == 8){
        tired=true;     
    }
}

for(let i = 0; i < 8; i = i+2){
    console.log(i);
}

function guessGame(numbertoGuess){
    for(let i = 0; i < 10; i++){

        let userGuess = prompt('Guess a number between 1 and 30');
        if(userGuess == numbertoGuess){
            alert("Congratulations, you guessed correctly")
            break;
        }
        else if(userGuess > numbertoGuess){
            alert("You number is too high");
        }
        else{
            alert("Your number is too low");
        }
    }
}

//let numbertoGuess = Math.floor(Math.random() * 30);

let num_images = prompt('Enter number of images')

for(let i = 0; i < num_images; i++){
    document.write('<img src = "gcheese.jpg"/>');
}


