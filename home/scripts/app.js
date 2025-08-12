import './scroll.js'

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
})
menuBackground.addEventListener('click', (e) => {
    if (e.target === menuBackground) {
        menuBackground.classList.remove('active')
        mainMenu.classList.remove('active')
        burgerMenu.classList.remove('active') 
    }
  })
}


const contactButton = document.querySelector('.contact-button')
if (contactButton) {
  const contactButtonCancel = document.querySelector('.button_cancel')
  const contactBackground = document.querySelector('.contact__background')
  const contactContainer = document.querySelector('.contact__container')

  
  contactButton.addEventListener('click', () => {
    contactBackground.classList.add('active')
    contactContainer.classList.add('active')
  })

 
  contactButtonCancel.addEventListener('click', () => {
    contactBackground.classList.remove('active')
    contactContainer.classList.remove('active')
  })


  contactBackground.addEventListener('click', (e) => {
    if (e.target === contactBackground) {
      contactBackground.classList.remove('active')
      contactContainer.classList.remove('active')
    }
  })
}


