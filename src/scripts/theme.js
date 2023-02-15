(() => {
  const switchButton = document.querySelector('.switch')
  const switchSlider = document.querySelector('.switch__select')
  const elementsLight = document.querySelectorAll('body, .calculator, #displayNumber, .btn, i, btnResult')
  let themeLight = false
  
  switchButton.addEventListener('click', () => {
    if(!themeLight){
      switchSlider.classList.add('light')
      elementsLight.forEach(el => el.classList.add('light'))
    }else {
      switchSlider.classList.remove('light')
      elementsLight.forEach(el => el.classList.remove('light'))
    }
    themeLight = !themeLight
  })
})()