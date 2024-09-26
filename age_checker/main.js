//On click of the h1
document.querySelector('h1').addEventListener('click', value)

//Take the value from the input
function value() {
    let age = document.querySelector('#danceDanceRevolution').value
    let check
    if(age < 16) {
        check = 'You can not drive!'
    }else if(age < 18) {
        check = 'You can\'t hate from outside the club, because they can\'t even get in'
    }else if(age < 21) {
        check = 'You can not drink'
    }else if(age < 25) {
        check = 'You can not rent cars affordably'
    }else if(age < 30) {
        check = 'You can not rent fancy cars affordably'
    }else {
        check = 'There is nothing left to look forward too'
    }
    
//Place the result of the conditional in the paragraph    
    document.querySelector('p').innerText = check
}
