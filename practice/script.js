const firstInput = document.getElementById('first')
const secondInput = document.getElementById('second')
const button = document.querySelector('button')
const resultText = document.querySelector('#result')
const cleanBtn = document.getElementById('clean')

button.addEventListener('click', function() {


    let firstValue = firstInput.value
    let secondValue = secondInput.value

    //let sum = firstValue + secondValue - sehv yol
    //let sum = Number(firstValue) + Number(secondValue) - birinci duzgun yol
    let sum = +firstValue + +secondValue
    console.log(sum)
    if(isNaN(sum)) {
        resultText.innerText = "Xahiş edirik rəqəm daxil edin"
    } else {
        resultText.innerText = sum
    }

    

})

cleanBtn.addEventListener('click', function() {


    firstInput.value = ""
    secondInput.value = ""

    resultText.innerText = ""

})