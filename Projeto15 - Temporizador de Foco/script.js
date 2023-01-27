const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

let minutes
let seconds
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

buttonPlay.addEventListener('click', handlePlayClick)
buttonPause.addEventListener('click', handlePauseClick)
buttonStop.addEventListener('click', handleStopClick)
buttonSet.addEventListener('click', handleSetClick)

buttonSoundOn.addEventListener('click', handleSoundOnClick)
buttonSoundOff.addEventListener('click', handleSoundOffClick)

function countDown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    if (seconds <= 0) {
      seconds = 60
      if (minutes <= 0) {
        handleStopClick()
        return
      }
      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
    countDown()
  }, 1000)
}

function handlePlayClick() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countDown()
}

function handlePauseClick() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonStop.classList.remove('hide')
}

function handleStopClick() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function handleSetClick() {
  minutes = prompt('Quantos minutos')
  minutesDisplay.textContent = String( minutes).padStart(2,'0')
}

function handleSoundOnClick() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
}

function handleSoundOffClick() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
}
