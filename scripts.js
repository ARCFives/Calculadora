const text = document.getElementById('total')
let modedark
let toggleTheme = true
let change = document.querySelectorAll(
  '#base, #title, #num1, #num2, #selesoma, #btnR, #total, .autor, a'
)

btnDark.addEventListener('click', () => {
  if (toggleTheme) {
    btnDark.innerHTML = 'Light mode'
  } else {
    btnDark.innerHTML = 'Dark mode'
  }
  change.forEach(item => item.classList.toggle('darkmode'))
  document.body.classList.toggle('darkmode')
  toggleTheme = !toggleTheme
})

btnC.addEventListener('click', (cal1, cal2, expoent) => {
  cal1 = Number(num1.value)
  cal2 = Number(num2.value)
  expoent = selesoma.value

  if (cal1 == '' || cal2 == '') {
    text.textContent = `Valores incorretos!`
    return
  }

  result = eval(cal1 + expoent + cal2)
  text.textContent = `${result}`

  if (result >= 1 || result <= -1) {
    btnN.style.display = 'block'
  } else {
    btnN.style.display = 'none'
  }
})

btnR.addEventListener('click', () => {
  num1.value = ''
  num2.value = ''
  text.textContent = ''
  num1.focus()
  btnN.style.display = 'none'
  result = 0
})

btnN.addEventListener('click', () => {
  num1.value = result
  num2.value = ''
  num2.focus()
})