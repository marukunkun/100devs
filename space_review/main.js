//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 3, 4, 5, 6, 7]
alert(nums.reduce((a, c) => a + c, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr) {
    return arr.map(e => e ** 2)
}

//Create a function that takes string
//Print the reverse of that string to the console
function reverse(str) {
    console.log(str.split('').reverse().join(''))
}

reverse('hello')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
    return str === str.split('').reverse().join('')
}

palindrome('madam')
palindrome('123321')