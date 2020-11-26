const initHero = () => {
  // Bacon path
  anime({
    targets: '#graph-group-1 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
}


window.addEventListener('load', initHero)