import Controls from "./controls.js"
import Timer from "./timer.js"

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

buttonPlay.addEventListener("click", handlePlayClick)
buttonPause.addEventListener("click", handlePauseClick)
buttonStop.addEventListener("click", handleStopClick)
buttonSet.onclick = () => {
  handleSetClick()
}

buttonSoundOn.addEventListener("click", handleToogleSound)
buttonSoundOff.addEventListener("click", handleToogleSound)

function handlePlayClick() {
  controls.play()
  timer.countDown()
}

function handlePauseClick() {
  controls.pause()
  timer.hold()
}

function handleStopClick() {
  controls.reset()
  timer.reset()
}

function handleSetClick() {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)

}

function handleToogleSound() {
  buttonSoundOn.classList.toggle("hide")
  buttonSoundOff.classList.toggle("hide")
}
