const text = document.getElementById('total')
let modedark
let toggleTheme = true
let change = document.querySelectorAll('#base, #title, #num1, #num2, #selesoma, #btnR, #total, .autor, a')

btnDark.addEventListener('click', () => {
    if (toggleTheme) {
        change.forEach(items => {items.classList.add('darkmode')})
        document.body.classList.add('darkmode')
        modedark = document.querySelectorAll('.darkmode')
        btnDark.innerHTML = 'Light mode'
    }else {
        modedark.forEach(item => {item.classList.remove('darkmode')})
        btnDark.innerHTML = 'Dark mode'
    }
    toggleTheme = !toggleTheme
})

btnC.addEventListener('click', (cal1, cal2, expoent) =>{
    cal1 = Number(num1.value)
    cal2 = Number(num2.value)
    expoent = selesoma.value

    if (cal1 == 0) {
        text.textContent = `Insira um valor no primeiro input!`
        num1.focus()
        return
    } else if (cal2 == 0) {
        text.textContent = `Insira um valor no segundo input!`
        num2.focus()
        return
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
        btnN.style.display = 'block'
    }else if (result <= -1) {
        btnN.style.display = 'block'
    }    
})

btnR.addEventListener('click', () =>{
    num1.value = ''
    num2.value = ''
    text.textContent = ''
    num1.focus()
    btnN.style.display = 'none'
    result = 0
})

btnN.addEventListener('click', () => {
    num1.value = result
    num2.value= ''
    num2.focus()
})