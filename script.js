const greeting = "Hello World";
console.log(greeting);

/*======== script_1.js =========
let firstName = console.log("What is your first name?");
console.log(`Hello, ${firstName}`);
*/


/*======== script_2.js =========*/
let number = prompt("Of which number would you like to calculate the factorial ?");

const factorial = (number) => {
    let fact = 1;
    for(i = 1; i <= number; i++){
        fact *= i;
    }
    return fact;
}
console.log(`The result is : ${factorial(number)}`);