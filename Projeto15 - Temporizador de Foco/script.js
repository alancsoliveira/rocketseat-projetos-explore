const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")

let minutes
let seconds
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

buttonPlay.addEventListener("click", handlePlayClick)
buttonPause.addEventListener("click", handlePauseClick)
buttonStop.addEventListener("click", resetControls)
buttonSet.addEventListener("click", handleSetClick)

buttonSoundOn.addEventListener("click", handleToogleSound)
buttonSoundOff.addEventListener("click", handleToogleSound)

function countDown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (seconds == 0) {
      seconds = 60
      if (minutes == 0) {
        resetControls()
        return
      }
      --minutes
    }

    updateTimerDisplay(minutes, --seconds)
    countDown()
  }, 10)
}

function resetControls() {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonSet.classList.remove("hide")
  buttonStop.classList.add("hide")
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function handlePlayClick() {
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonSet.classList.add("hide")
  buttonStop.classList.remove("hide")

  countDown()
}

function handlePauseClick() {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonStop.classList.remove("hide")
}

function handleStopClick() {
  resetControls()
}

function handleSetClick() {
  minutes = prompt("Quantos minutos") ?? 5
  console.log(minutes)
  updateTimerDisplay(minutes, 0)
}

function handleToogleSound() {
  buttonSoundOn.classList.toggle("hide")
  buttonSoundOn.classList.toggle("hide")
}
