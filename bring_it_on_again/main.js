// *Variables*
// Declare a variable, assign it a value, and alert the value
const namu = 'Boris'
alert(namu)

// Create a variable, divide it by 10, and console log the value
let num = 666
num /= 10
console.log(num)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplysThreeNumAlert(n1, n2, n3) {
    let product = n1 * n2 * n3
    alert(product)
}

multiplysThreeNumAlert(2, 10, 6)

// Create a function that takes in 4 numbers. 
// Add the first two numbers and subtract the next two.
// Console log the result

function takesFourNum(n1, n2, n3, n4) {
    let result = (n1 + n2) + (n3 - n4)
    console.log(result)
}

takesFourNum(10, 2, 7, 4)

// *Conditionals*
// Create a function that takes in 3 numbers.
// Starting with 100 add the first number, subtract the second, and divide the third.
// If the value is greater then 25, console log "WE HAVE A WINNNA"
function takesThreeNum(n1, n2, n3) {
    let val = (100 + n1) - (n2) / (n3)

    if(val > 25) {
        console.log('WE HAVE A WINNA')
    }
}

takesThreeNum(100, 20, 2)

// Create a function that takes in a day of the week. 
// If it is a weekend alert, "weekend" and if not alert "week day". 
// Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfTheWeek(day) {
    day = day.toLowerCase()
    if(day === 'sunday' || day === 'saturday') {
        console.log('weekend')
    } else {
        console.log('week day')
    }
}

dayOfTheWeek('MonDay')
dayOfTheWeek('SATURDAY')

// *Loops*
// Create a function that takes in a number. 
// Console log all values from 1 to that number or greater, but count by 3
function loopByThree(num) {
    for(let i = 0; i <= num; i+=3) {
        if(i === 0) {
            console.log(1)
        } else {
            console.log(i)
        }
    }
}

loopByThree(28)
loopByThree(10)