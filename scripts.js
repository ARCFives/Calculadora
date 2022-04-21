const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
let sinal = document.getElementById('selesoma')
const button = document.getElementById('btnC')
const text = document.getElementById('total')
const buttonR = document.getElementById('btnR')
const buttonN = document.getElementById('btnN')

button.addEventListener('click', (cal1, cal2, expoent) =>{
    cal1 = Number(num1.value)
    cal2 = Number(num2.value)
    expoent = sinal.value

    if (cal1 == 0) {
        text.textContent = `Insira um valor no primeiro input!`
        num1.focus()
    } else if (cal2 == 0) {
        text.textContent = `Insira um valor no segundo input!`
        num2.focus()
    }else

    
    
    switch (expoent) {
        case 'soma':
            result = cal1 + cal2
            text.textContent = `${result}`
         break;
        
        case 'divs':
            result = cal1 / cal2
            text.textContent = `${result}`
        break;

        case 'multi':
            result = cal1 * cal2
            text.textContent = `${result}`
        break;

        case 'menor':
            result = cal1 - cal2
            text.textContent = `${result}`
        default:
            break;
    }

    if (result >= 1) {
        buttonN.classList.remove('desativado')
        buttonN.classList.add('ativo')
    }else if (result <= -1) {
        buttonN.classList.remove('desativado')
        buttonN.classList.add('ativo')
    }else {}
})


buttonR.addEventListener('click', () =>{
    num1.value = 0
    num2.value = 0
    text.textContent = ''
    num1.focus()
    buttonN.classList.remove('ativo')
    buttonN.classList.add('desativado')
    result = 0
})


buttonN.addEventListener('click', () => {
    num1.value = result
    num1.focus()
})
