const initHero = () => {
  gsap.registerPlugin(ScrollTrigger)
  const title = gsap.timeline({defaults: {ease: 'power1.out'}})
  title.to('.js-anime-text', {y: '0%', duration: 1, stagger: 0.25})

  // Cover transition
  gsap.to('.js-scale', {
    scrollTrigger: {
      trigger: '.js-translate',
      scrub: true,
    },
    y: '15%',
    duration: 1,
    ease: 'ease',
    stagger: 0.25
  })

  // Graph 1
  anime({
    targets: '#graph-group-1 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

  // Graph 2
  function randomValues() {
    anime({
      targets: '#graph-group-2 circle',
      scale: [
        {value: .9, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      loop: true
    });
  }
  randomValues();

  // Graph 3
  function randomValues2() {
    anime({
      targets: '#graph-group-3 path',
      scale: [
        {value: .9, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
      loop: true
    });
  }
  randomValues2();
}


window.addEventListener('load', initHero)