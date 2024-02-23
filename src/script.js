const frameMain = document.querySelector('.frame-main')
const frameLoading = document.querySelector('.frame-loading')
const btnYes = document.querySelector('.frame-main__btn-yes')
const btnNo = document.querySelector('.frame-main__btn-no')

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
    frameMain.classList.remove('d-hide')
  }, 8000)
}

const hideFrames = () => {
  frameMain.classList.add('d-hide')
  frameLoading.classList.add('d-hide')
}

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
