const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let attempts = 1
let randomNumber = getRandom(100);

//Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)

document.addEventListener("keydown", function (e) {
  if (e.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick()
  }
})


// Funções
function getRandom(max) {
  let result = Math.floor(Math.random() * (max + 1))
  console.log(result)
  return result
}

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    if (attempts == 1) document.querySelector(".screen2 h2").innerText = (`Acertou "de primeira"`);
    else document.querySelector(".screen2 h2").innerText = (`Acertou em ${attempts} tentativas`);

  }
  else if (inputNumber.value > randomNumber) {
    alert("Errado, tente um número menor:")
  }

  else if (inputNumber.value < randomNumber) {
    alert("Errado, tente um número maior:")
  }

  inputNumber.value = ""
  attempts++
}


function handleResetClick() {
  toggleScreen()
  randomNumber = getRandom(100)
  attempts = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")

}