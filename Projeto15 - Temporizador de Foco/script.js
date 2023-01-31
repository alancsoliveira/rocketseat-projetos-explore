const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")

let timerTimeOut
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)
let seconds

buttonPlay.addEventListener("click", handlePlayClick)
buttonPause.addEventListener("click", handlePauseClick)
buttonStop.addEventListener("click", handleStopClick)
buttonSet.addEventListener("click", handleSetClick)

buttonSoundOn.addEventListener("click", handleToogleSound)
buttonSoundOff.addEventListener("click", handleToogleSound)

function countDown() {
  timerTimeOut = setTimeout(() => {
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
  }, 1000)
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

function resetTimer(){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function handlePlayClick() {
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonSet.classList.add("hide")
  buttonStop.classList.remove("hide")

  countDown()
}

function handlePauseClick() {
  buttonPause.classList.add("hide")
  buttonPlay.classList.remove("hide")
  clearTimeout(timerTimeOut)
}

function handleStopClick() {
resetControls()
resetTimer()
}

function handleSetClick() {
  let newMinutes = prompt("Quantos minutos") 
  console.log(newMinutes)
  if(!newMinutes){
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
}

function handleToogleSound() {
  buttonSoundOn.classList.toggle("hide")
  buttonSoundOff.classList.toggle("hide")
}
