const text = document.getElementById('total')

btnC.addEventListener('click', (cal1, cal2, expoent) =>{
    cal1 = Number(num1.value)
    cal2 = Number(num2.value)
    expoent = selesoma.value

    if (cal1 == 0) {
        text.textContent = `Insira um valor no primeiro input!`
        num1.focus()
    } else if (cal2 == 0) {
        text.textContent = `Insira um valor no segundo input!`
        num2.focus()
    }else {
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
    }

    if (result >= 1) {
        btnN.classList.remove('desativado')
        btnN.classList.add('ativo')
    }else if (result <= -1) {
        btnN.classList.remove('desativado')
        btnN.classList.add('ativo')
    }
})

btnR.addEventListener('click', () =>{
    num1.value = 0
    num2.value = 0
    text.textContent = ''
    num1.focus()
    btnN.classList.remove('ativo')
    btnN.classList.add('desativado')
    result = 0
})

btnN.addEventListener('click', () => {
    num1.value = result
    num2.focus()
})