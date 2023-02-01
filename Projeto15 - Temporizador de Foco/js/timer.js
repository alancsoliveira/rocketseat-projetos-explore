export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

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

      updateDisplay(minutes, --seconds)
      countDown()
    }, 1000)
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countDown,
    reset,
    updateDisplay,
    clearTimeout,
    updateMinutes,
    hold,
  }
}
