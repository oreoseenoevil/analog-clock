const deg = 6
const hr = document.querySelector('.hr')
const mn = document.querySelector('.mn')
const sc = document.querySelector('.sc')

const toggleBox = document.querySelector('.toggle-box')
const number = document.querySelectorAll('.number')

let lightMode = localStorage.getItem('lightMode')

const enabledLightMode = () => {
  document.body.classList.add('light')
  toggleBox.classList.add('light')
  number.forEach(n => {
    n.classList.add('light')
  })
  localStorage.setItem('lightMode', 'enabled')
}

const disabledLightMode = () => {
  document.body.classList.remove('light')
  toggleBox.classList.remove('light')
  number.forEach(n => {
    n.classList.remove('light')
  })
  localStorage.setItem('lightMode', null)
}

if (lightMode === 'enabled') {
  enabledLightMode()
}

toggleBox.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode')
  if (lightMode !== 'enabled') {
    enabledLightMode()
  } else {
    disabledLightMode()
  }
})

setInterval(() => {
  const day = new Date()
  const hh = day.getHours() * 30
  const mh = day.getMinutes() * deg
  const sh = day.getSeconds() * deg

  hr.style.transform = `rotateZ(${(hh)+(mh/12)}deg)`
  mn.style.transform = `rotateZ(${mh}deg)`
  sc.style.transform = `rotateZ(${sh}deg)`
}, 1000)
