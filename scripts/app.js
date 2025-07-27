const burgerMenu = document.querySelector('.menu-button__menu')
if (burgerMenu) {
  const menuBackground = document.querySelector('.main-menu-background')
  const mainMenu = document.querySelector('.main-menu')


burgerMenu.addEventListener('click', menu =>{
  burgerMenu.classList.toggle('active')

  if (burgerMenu.classList.contains('active')) {
    menuBackground.classList.add('active')
    mainMenu.classList.add('active')
  }else{
    menuBackground.classList.remove('active')
    mainMenu.classList.remove('active')
  }
})}



function globalGradient() {
  const interBubble = document.querySelector('.interactive')

  let curX = 0,
      curY = 0,
      tgX = 0,
      tgY = 0

  function move() {
    curX += (tgX - curX) / 20
    curY += (tgY - curY) / 20

    gsap.set(interBubble, {
      x: Math.round(curX),
      y: Math.round(curY)
    })

    requestAnimationFrame(() => {
      move()
    })
  }

  window.addEventListener('mousemove', (event) => {
  tgX = event.clientX
  tgY = event.clientY
})

  move()
}

globalGradient()