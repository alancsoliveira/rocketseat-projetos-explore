const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")

buttonPlay.addEventListener("click", handlePlayClick)
buttonPause.addEventListener("click", handlePauseClick)
buttonStop.addEventListener("click", handleStopClick)
buttonSoundOn.addEventListener("click", handleSoundOnClick)
buttonSoundOff.addEventListener("click", handleSoundOffClick)


function handlePlayClick() {
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonSet.classList.add("hide")
  buttonStop.classList.remove("hide")
}

function handlePauseClick() {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonStop.classList.remove("hide")
}

function handleStopClick() {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonSet.classList.remove("hide")
  buttonStop.classList.add("hide")
}

function handleSoundOnClick() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')

}

function handleSoundOffClick() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
}

