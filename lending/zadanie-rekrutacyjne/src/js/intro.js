$(document).ready(function(){
  $('.intro-slider').slick();
});

const introBtns = document.querySelectorAll('#slider-item-js')

introBtns.forEach(btn => {
  btn.addEventListener('click', ({target}) => {
    if (target.dataset.scroll) {
      const sectionId = target.dataset.scroll
      const element = document.querySelector(`#${sectionId}`)
      let offsetTop = element.getBoundingClientRect().top + document.body.scrollTop
  
      window.scrollBy({
        top: Math.trunc(offsetTop) - 60,
        behavior: 'smooth'
      })
    }
  })
})

