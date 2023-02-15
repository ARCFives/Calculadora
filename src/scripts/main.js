(() => {
const numeros = document.querySelectorAll('.num')
const display = document.querySelector('#displayNumber')
const btnReset = document.querySelector('#btnReset')
const result = document.querySelector('#btnResult')
const arithmetic = document.querySelectorAll('.ari')
let soma = []
let somaFlag = false

function setNumbers(e) {
  const numrsValue = e.target.value
  if(display.value.includes('.') && numrsValue === '.') {
    return
  }
  if(somaFlag){
    display.value = ''
    somaFlag = false
  }
  display.value += numrsValue
}

function setArithmetic(expo) {
  const expoent = expo.target.value
  if(soma.length == '' && display.value == ''){
    return
  } else if(soma.length == 2 && somaFlag == false) {
    calculo()
    soma.push(display.value)
    soma.push(expoent)
    somaFlag = true
  } else {
    soma.push(display.value)
    display.value = ''
    soma.push(expoent)
  }
}

function calculo() {
  if(display.value == '' || soma.length == ''){
    return
  }else {
    soma.push(display.value)
    const numrsResult = eval(soma[0] + soma[1] + soma[2])
    display.value = numrsResult
    soma = []
  }}

function numDelete() {
  if(display.value == '') {
    return
  }else {
    let currentValue = display.value
    currentValue = currentValue.slice(0, -1)
    display.value = currentValue
  }
}

numeros.forEach(num => {num.addEventListener('click', setNumbers)})

arithmetic.forEach(ari => {ari.addEventListener('click', setArithmetic)})

btnReset.addEventListener('click', () => {
  display.value = ''
  soma = []
})

result.addEventListener('click', () => {calculo()})

btnDelete.addEventListener('click', numDelete)
})()