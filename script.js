/*

    JavaScript code.
    We will be using Node to run JavaScript code for the time being

*/

let color = "blue";
let fruit = "berry";

/*
    console.log() will help print out the value of a variable
*/

console.log(color);
console.log(fruit);

//This is the same as "blue" + "fruit" 
console.log(color + fruit);

// toUpperCase() is one of many String methods. This makes the string letters all capital letters
console.log(fruit.toUpperCase()); // "berry" => "BERRY"
console.log("berry".toUpperCase());// "berry" => "BERRY"


/*
    Using the declaration keyword: let
    You can assign a variable a value
    and then later on reassign the variable's value
*/
let name = "Frank"; //Assigning 'Frank' to the variable name
name = "Scott"; //Reassign/replace 'Scott' to the variable name
console.log(name);

/*
    You cannot make two variables with the same name
*/
let coolNumber = 1;
let coolNumber = coolNumber + 2; //This will cause an error because coolNumber is already declared

/*
    Declaration keyword: const
    Const - constant. Once you assign a value to constant variable, you cannot reassign the value
*/
const pi = 3.14159; // constant variable 'pi' with value of 3.14159
pi = 7; // Trying to reassign the value. This will cause an error

/*
    Declaration keywords and scope
*/

//let - respects scope
//const - respects scope
//var - does NOT respect scope
let isRaining = true;

if (isRaining) {
    console.log("Bring a jacket");
    console.log("isRaining", isRaining); //isRaining is a global variable. This works.
    let bringJacket = true;
} else {
    console.log("No need to bring a jacket");
}
//bringJacket is a variable in the scope of the 'if' block. This will cause an error
console.log("bringJacket", bringJacket)