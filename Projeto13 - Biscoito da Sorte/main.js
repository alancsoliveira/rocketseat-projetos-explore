const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector(".fortune-cookie")
const btnReset = document.querySelector("#reset")

btnOpen.addEventListener("click", handleTryOpen)
btnReset.addEventListener("click", handleReset)

function handleTryOpen() {
  toggleScreen()
}

function handleReset() {
  toggleScreen()
}

document.addEventListener("keydown", function (e) {
  if (e.key == 'Enter' ) {
    handleReset()
  }
})


function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}