import { photos } from './../assets/img/works'
import Masonry from 'masonry-layout'

const body = document.querySelector('body')
const grid = document.querySelector('.grid')

// append items
const pasteGridItem = ({_id, src}) => {
  const gridItem_el = document.createElement('div')
  gridItem_el.className = 'grid-item'
  gridItem_el.innerHTML = `
    <div data-modal=${_id}>
      <img src="${src}" alt="work photo">
    </div>
  `
  return gridItem_el
}
photos.forEach(photo => {
  grid.append(pasteGridItem(photo))
})

const msnry = new Masonry( grid, {
  // options...
  itemSelector: '.grid-item',
  columnWidth: 0
})

//? Lays out all item elements. layout is useful when an item has changed size, and all items need to be laid out again.
setTimeout(() => {
  msnry.layout()
}, 1000)
setTimeout(() => {
  msnry.layout()
}, 10000)
setTimeout(() => {
  msnry.layout()
}, 20000)

// modal
const modalBg = document.querySelector('.modal-bg')
const modalSlider_el = document.querySelector('.modal-slider')

// template, but here may be photos
const modalSliders = {
  1: ['1.1', '1.2', '1.3', '1.4', '1.5'],
  2: ['2.1', '2.2', '2.3', '2.4', '2.5'],
  3: ['3.1', '3.2', '3.3', '3.4', '3.5'],
  4: ['4.1', '4.2', '4.3', '4.4', '4.5'],
  5: ['5.1', '5.2', '5.3', '5.4', '5.5'],
  6: ['6.1', '6.2', '6.3', '6.4', '6.5'],
  7: ['7.1', '7.2', '7.3', '7.4', '7.5'],
  8: ['8.1', '8.2', '8.3', '8.4', '8.5'],
  9: ['9.1', '9.2', '9.3', '9.4', '9.5']
}

// append items
const pasteSliderItem = (id, sliders) => {

  const cteateElement = (slider) => {
    const sliderItem_el = document.createElement('div')
      sliderItem_el.innerHTML = `
      <div class="modal-slider-slider-item">${slider}</div>
    `
    return sliderItem_el
  }

  sliders.forEach(slider => {
    modalSlider_el.append(cteateElement(slider))
  })
  setTimeout(() => {
    const test = modalSlider_el.querySelectorAll('button[role="tab"]')
    test.forEach((element, index) => {
      element.innerText = sliders[index]
    })
  }, 10);
}

// open modal window
grid.addEventListener('click', (event) => {
  const {target} = event
  event.stopPropagation()

  let modalId = target.dataset.modal
  let action = target.dataset.action

  // open modal
  if (modalId) {
    document.querySelector('.header').style.display = 'none'
    modalBg.classList.add('show')
    body.style.overflow = 'hidden'

    pasteSliderItem(modalId, modalSliders[modalId])

    $('.modal-slider').slick({
      arrows: true,
      dots: true
    })

  }

  // rozwin func
  if (action === 'rozwin') {
    grid.classList.toggle('hide')

    if (grid.className.includes('hide')) {
      target.classList.remove('rozwin')
      target.classList.add('zwinac')
      target.innerHTML = `
        Zwinąć
        <svg class="zwinac"><use xlink:href="#arrow-down"></use></svg>
      `
    } else {
      target.classList.remove('zwinac')
      target.classList.add('rozwin')
      target.innerHTML = `
        Rozwiń
        <svg class="zwinac"><use xlink:href="#arrow-down"></use></svg>
      `
    }
  }
})

// close modal window
const closeModalBtn = document.querySelector('button[data-action="close/modal"]')
function closeModal() {
  modalBg.classList.remove('show')
  body.style.overflow = 'auto'
  console.log('auto');

  modalSlider_el.className = 'modal-slider'
  modalSlider_el.innerHTML = ''
}

closeModalBtn.addEventListener('click', () => {
  closeModal()
    document.querySelector('.header').style.display = 'block'
})
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal()
    document.querySelector('.header').style.display = 'block'
  }
})



