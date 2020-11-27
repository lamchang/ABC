const initHowDoesItWork = () => {
  // Icon choose
  anime({
    targets: '.icon-choose polygon',
    points: [
      {value: '0'},
      {value: '126 263,281 317,475 132,405 417,530 535,29 490,202 365'}
    ],
    easing: 'easeOutQuad',
    duration: 2500,
    loop: true,
    direction: 'alternate'
  });
}

window.addEventListener('load', initHowDoesItWork)