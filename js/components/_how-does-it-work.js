const initHowDoesItWork = () => {
  // Title trasition
  gsap.to('.js-anime-title', {
    scrollTrigger: '.js-anime-title',
    y: '0%',
    duration: 1,
    stagger: 0.25
  })

  // Card trasition
  gsap.to('.js-translate', {
    scrollTrigger: {
      trigger: '.js-translate',
      start: 'top 60%',
      end: 'top center',
      scrub: 1,
    },
    y: '0',
    duration: 1,
    stagger: 0.25
  })
}

window.addEventListener('load', initHowDoesItWork)