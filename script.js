const main = document.querySelector('main')
const input = document.getElementById('input')
const inputResult = document.getElementById('result')
const root = document.querySelector(':root')
const clear = document.getElementById('clear')

const consult = ['0','1','2','3','4','5','6','7','8','9','.','(',')', '*', '-', '+', '%', '/', ' ']

input.addEventListener('keydown', function (ev) {
  ev.preventDefault()
  
  if (consult.includes(ev.key)) {
    input.value += ev.key
  } else if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  } else if (ev.key === 'Enter') {
    calc()
  }
})

document.querySelectorAll('.charKey').forEach( function (element) {
  element.addEventListener('click', function () {
    const value = element.dataset.value
    input.value += value
  })
})

clear.addEventListener('click', function () {
  input.value = ''
  inputResult.value = ''
  input.focus()

  if (inputResult.className === 'error') {
    inputResult.classList.remove('error')
  }
})

document.getElementById('equal').addEventListener('click', calc)

function calc () {
  inputResult.className = 'error'
  inputResult.value = 'ERROR'
  inputResult.value = eval(input.value)
  inputResult.classList.remove('error')
}

document.getElementById('themeSwitcher').addEventListener('click', function () {
  
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#005C53')
    clear.style.setProperty('background-color', '#9FC131')
    
    main.dataset.theme = 'ligth'
  } else if (main.dataset.theme === 'ligth') {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#3ac56f')
    clear.style.setProperty('background-color', '#DBF227')
    
    main.dataset.theme = 'dark'
  }
})

document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
  const btnCopy = ev.currentTarget
  
  if (btnCopy.innerText === 'Copy') {
    navigator.clipboard.writeText(inputResult.value)
    btnCopy.className = 'success'
    btnCopy.innerText = 'Copied!'
  } else {
    btnCopy.classList.remove('success')
    btnCopy.innerText = 'Copy'
  }
})