// create a function that takes in 4 numbers. 
// Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function takeFourNumbers(n1, n2, n3, n4) {
    let multi = (n1 * n2)

    if(multi > 100) {
        console.log(multi + n3 + n4)
    }else if(multi < 100) {
        console.log(multi - (Math.abs(n3 - n4)))
    }else {
        alert((n1 * n2 * n3) % n4)
    }
}

console.log(takeFourNumbers(30, 2, 3, 4))
console.log(takeFourNumbers(2, 50, 4, 3))
