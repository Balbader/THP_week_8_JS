let number = prompt("Of which number would you like to calculate the factorial ?");

const factorial = (number) => {
    let fact = 1;
    for(i = 1; i <= number; i++){
        fact *= i;
    }
    return fact;
}
console.log(`The result is : ${factorial(number)}`);