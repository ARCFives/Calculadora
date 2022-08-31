const numeros = document.querySelectorAll('.num')
const display = document.querySelector('.display-number')
const btnReset = document.querySelector('.reset')
const result = document.querySelector('.result')
const arithmetic = document.querySelectorAll('.ari')
let soma = []

numeros.forEach(num => {
  num.addEventListener('click', e => {
    const numrsValue = e.target.value
    if(display.value.includes('.') && numrsValue === '.'){
      return
    }
    display.value += numrsValue
  })
})

arithmetic.forEach(ari => {
  ari.addEventListener('click', expo => {
    if (soma.length == '') {
      if (display.value == '') {
        return
      } else {
        soma.push(display.value)
        display.value = ''
        const expoent = expo.target.value
        soma.push(expoent)
      }
    } else {
      calculo()
    }
  })
})

btnReset.addEventListener('click', () => {
  display.value = ''
  soma = []
})

result.addEventListener('click', () => {
  calculo()
})

btnDelete.addEventListener('click', () => {
  if (display.value == '') {
    return
  }else {
    let currentValue = display.value
    console.log(currentValue.slice(0, -1))
    currentValue = currentValue.slice(0, -1)
    display.value = currentValue
  }
})

function calculo() {
  if (display.value == '') {
    if (soma.length == '') {
      return
    }
  } else if (soma.length == '') {
    return
  } else {
    soma.push(display.value)
    const resultado = eval(soma[0] + soma[1] + soma[2])
    display.value = resultado
    soma = []
  }
}