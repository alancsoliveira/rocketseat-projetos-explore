function getRandom(max) {
  let result = Math.floor(Math.random() * (max + 1))
  console.log(result)
  return result
}


const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let attempts = 1
let randomNumber = getRandom(100);


// Função Callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

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


//Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", function () {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  attempts = 1
  getRandom(100)
})