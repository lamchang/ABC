const initMap = () => {
  let map;

  map = new google.maps.Map(document.querySelector(".js-map"), {
    center: { lat: 24.7202603, lng: -101.3731918 },
    zoom: 5,
    disableDefaultUI: true,
  });

  gsap.utils.toArray(".js-element-translate").forEach(card => {
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

  // Graph 1
  anime({
    targets: '#searcher-graph-group-1 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
}

window.addEventListener('load', initMap)