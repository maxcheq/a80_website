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

const bgLayers = document.querySelectorAll('.bg-layer');
const triggers = document.querySelectorAll('.trigger');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = entry.target.dataset.bg;

      bgLayers.forEach((layer, i) => {
        layer.classList.toggle('active', i == index);
      });
    }
  });
}, { threshold: 0.5 }); // секция видна на 50%

triggers.forEach(trigger => observer.observe(trigger));

const contactButton = document.querySelector('.contact-button')
if (contactButton) {
  const contactButtonCancel = document.querySelector('.button_cancel')
  const contactBackground = document.querySelector('.contact__background')
  const contactContainer = document.querySelector('.contact__container')
  const topMenu = document.querySelector('.top-menu')

  
  contactButton.addEventListener('click', () => {
    contactBackground.classList.add('active')
    contactContainer.classList.add('active')
    topMenu.style.visibility = 'hidden' 
    topMenu.style.opacity = '0'
  })

 
  contactButtonCancel.addEventListener('click', () => {
    contactBackground.classList.remove('active')
    contactContainer.classList.remove('active')
    topMenu.style.visibility = 'visible' 
    topMenu.style.opacity = '1'
  })


  contactBackground.addEventListener('click', (e) => {
    if (e.target === contactBackground) {
      contactBackground.classList.remove('active')
      contactContainer.classList.remove('active')
      topMenu.style.visibility = 'visible' 
      topMenu.style.opacity = '1'
    }
  })
}



gsap.utils.toArray('[data-parallax-wrapper]').forEach(container => {
  const img = container.querySelector('[data-parallax-target]')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true
    }
  })

  tl.fromTo(img, {
    yPercent: -15,
    ease: 'none'
  }, {
    yPercent: 15,
    ease: 'none'
  })
})

const accordionCol = document.querySelectorAll('.accordion__col')
accordionCol.forEach(col => {
  col.addEventListener('mouseenter', () => {
    accordionCol.forEach(c => {
      c.classList.remove('active')
      col.classList.add('active')
    })
  })
})
