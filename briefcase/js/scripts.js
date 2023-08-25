const toggletTheme = document.getElementById('toggle__theme')
const toggleIcon = document.getElementById('toggle__icon')
const toggleText = document.getElementById('toggle__text')

const toggleColors = document.getElementById('toggle__colors')

const rootStyles = document.documentElement.style

toggletTheme.addEventListener('click' , ()=>{
  document.body.classList.toggle('dark')
  if(toggleIcon.src.includes('moon.svg')){
    toggleIcon.src='assets/icons/sun.svg'
    toggleText.textContent='light Mode'
  }else {
    toggleIcon.src='assets/icons/moon.svg'
    toggleText.textContent = 'Dark Mode'
  }
})

toggleColors.addEventListener('click', (e)=> {
  rootStyles.setProperty('--primary-color', e.target.dataset.color)
})