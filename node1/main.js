const readlineSync = require('readline-sync');
const question = readlineSync.question("What is your name?")
console.log('Hi ' + question);

const operator = readlineSync.question("Please enter the operation to perform: add, sub, mul, div? ")
const number1 = readlineSync.question("Please enter your first number: ");
console.log(typeof number1)

const number2 = readlineSync.question("Please enter your second number: ");
console.log(typeof number2)


if (operator === "add" || operator === "Add" || operator === "ADD") {
    function add(num1, num2) {
        return Number(num1) + Number(num2)
    }
    console.log("The result is:")
    console.log(add(number1, number2))
}

else if (operator === "sub") {

    function sub(num1, num2) {
        return Number(num1) - Number(num2)
    }
    console.log("The result is:")
    console.log(sub(number1, number2))
}

else if (operator === "mul") {
    function multiplies(num1, num2) {
        return Number(num1) * Number(num2)
    }
    console.log("The result is:")
    console.log(multiplies(number1, number2))

}
else if (operator === "div") {
    function divide(num1, num2) {
        return Number(num1) / Number(num2)
    }
    console.log("The result is:")
    console.log(divide(number1, number2))

}