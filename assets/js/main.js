window.addEventListener('DOMContentLoaded', event => {
//
// // Activate Bootstrap scrollspy on the main nav element
//   const mainNav = document.body.querySelector('#navbar')
//   if (mainNav) {
//     new bootstrap.ScrollSpy(document.body, {
//       target: '#navbar',
//       offset: 74,
//     })
//   }

  // window.onscroll = function () {scrollFunction()}

  // Navbar shrink function
  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#navbar')
    if (!navbarCollapsible) {
      return
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  }

  // Shrink the navbar
  navbarShrink()

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink)

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav')
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    })
  }


// animate lazy loading image
  gsap.defaults({ ease: 'power1' })
  gsap.set('.lazy', { y: 50, opacity: 0 })

  ScrollTrigger.batch('.lazy', {
    onEnter: batch => gsap.to(batch,
      { opacity: 1, y: 0, stagger: 0.5 }),
    // onLeaveBack: batch => gsap.to(batch,
    //   { opacity: 0, y:100, stagger: 0.5 }),
  })

})