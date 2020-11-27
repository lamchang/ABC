const initHowDoesItWork = () => {
  gsap.utils.toArray(".js-text-reveal").forEach(text => {
    // Text trasition
    gsap.to(text, {
      scrollTrigger:  text,
      y: '0%',
      duration: 1,
      stagger: 0.25
    })
  })

  gsap.utils.toArray(".js-card-translate").forEach(card => {
    // Card trasition
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top center',
        end: 'top 30%',
        scrub: 1,
      },
      y: '0',
      duration: 1,
      stagger: 0.25
    })
  })
}

window.addEventListener('load', initHowDoesItWork)