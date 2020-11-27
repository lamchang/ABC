const initFounding = () => {

  // Title funding
  gsap.to('.js-anime-title-funding', {
    scrollTrigger: '.js-anime-title-funding',
    y: '0%',
    duration: 1,
    stagger: 0.25
  })

  // Title mobility
  gsap.to('.js-anime-mobility', {
    scrollTrigger: '.js-anime-mobility',
    y: '0%',
    duration: 1,
    stagger: 0.25
  })

  // Title company
  gsap.to('.js-anime-company', {
    scrollTrigger: '.js-anime-company',
    y: '0%',
    duration: 1,
    stagger: 0.25
  })

}

window.addEventListener('load', initFounding)