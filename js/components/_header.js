toggleDropdown = event => {
  const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show')
}

const initHeader = () => {
  const dropdowns = document.querySelectorAll('[data-toggle="dropdown"]')
  for(dropdown of dropdowns) {
    dropdown.addEventListener('click', toggleDropdown)
  }


}

window.addEventListener('load', initHeader)