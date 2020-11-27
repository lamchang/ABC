const initFounding = () => {
  gsap.utils.toArray(".js-path-translate").forEach(path => {
      // Title company
      gsap.to(path, {
        scrollTrigger: {
          trigger: path,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: '40%',
        duration: 700,
        stagger: 0.25
      })
  })

  // Path 1
  anime({
    targets: '.graph-card-1 rect',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

  // Path 1
  anime({
    targets: '.graph-card-1 polyline',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
}

window.addEventListener('load', initFounding)