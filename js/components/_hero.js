const initHero = () => {
  const title = gsap.timeline({defaults: {ease: 'power1.out'}})

  title.to('.js-anime-text', {y: '0%', duration: 1, stagger: 0.25})

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
      targets: '#graph-group-2 path',
      translateX: function() {
        return anime.random(0, 270);
      },
      easing: 'easeInOutQuad',
      duration: 750,
      complete: randomValues
    });
  }
  randomValues();
}


window.addEventListener('load', initHero)