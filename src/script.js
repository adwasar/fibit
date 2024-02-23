const frameMain = document.querySelector('.frame-main')
const frameLoading = document.querySelector('.frame-loading')
const frameBoxes = document.querySelector('.frame-boxes')
const popupChoice = document.querySelector('.popup-choice')
const btnYes = document.querySelector('.frame-main__btn-yes')
const btnNo = document.querySelector('.frame-main__btn-no')
const btnOk = document.querySelector('.popup-choice__btn')

const boxes = [
  { isOpen: false, id: 1 },
  { isOpen: false, id: 2 },
  { isOpen: false, id: 3 },
  { isOpen: false, id: 4 },
  { isOpen: false, id: 5 },
  { isOpen: false, id: 6 },
  { isOpen: false, id: 7 },
  { isOpen: false, id: 8 },
  { isOpen: false, id: 9 },
  { isOpen: false, id: 10 },
  { isOpen: false, id: 11 },
  { isOpen: false, id: 12 },
]

const setLoader = () => {
  setTimeout(function () {
    document.querySelector('.frame-loading__text-1').classList.add('active')
  }, 800)

  setTimeout(function () {
    document.querySelector('.frame-loading__text-2').classList.add('active')
  }, 1600)

  setTimeout(function () {
    document.querySelector('.frame-loading__text-3').classList.add('active')
  }, 2400)

  setTimeout(function () {
    document.querySelector('.frame-loading__img').classList.add('active')
    document.querySelector('.frame-loading__status').classList.add('active')
  }, 3200)

  setTimeout(function () {
    hideFrames()
    popupChoice.classList.remove('d-hide')
  }, 8000)
}

const hideFrames = () => {
  frameMain.classList.add('d-hide')
  frameLoading.classList.add('d-hide')
  popupChoice.classList.add('d-hide')
}

const renderBoxes = () => {
  boxes.forEach((el) => {
    const box = document.createElement('div')
    box.classList.add(`frame-boxes__box`)
    if (el.isOpen) {
      box.classList.add('frame-boxes__box_open')
    }
    frameBoxes.appendChild(box)

    const boxСover = document.createElement('img')
    boxСover.classList.add('frame-boxes__box-cover')
    boxСover.setAttribute('src', '/src/assets/svg/box_cover.svg')
    box.appendChild(boxСover)

    const boxBottom = document.createElement('img')
    boxBottom.classList.add('frame-boxes__box-bottom')
    boxBottom.setAttribute('src', '/src/assets/svg/box_bottom.svg')
    box.appendChild(boxBottom)

    box.addEventListener('click', () => {
      el.isOpen = true
      while (frameBoxes.firstChild) {
        frameBoxes.removeChild(frameBoxes.firstChild)
      }
      renderBoxes()
    })
  })
}

renderBoxes()

btnYes.addEventListener('click', () => {
  hideFrames()
  frameLoading.classList.remove('d-hide')
  setLoader()
})

btnNo.addEventListener('click', () => {
  hideFrames()
  frameLoading.classList.remove('d-hide')
  setLoader()
})

btnOk.addEventListener('click', () => {
  hideFrames()
  frameMain.classList.remove('d-hide')
})
