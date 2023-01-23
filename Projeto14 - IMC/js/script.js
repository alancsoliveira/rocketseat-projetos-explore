import { Modal } from "./modal.js"

//Variáveis
const form = document.querySelector("form")
const inptutWeight = document.querySelector("#weight")
const inptutHeight = document.querySelector("#height")

const calcIMC = (weight, height) => {
  let IMC = weight / (height / 100) ** 2
  return IMC.toFixed(2)
}

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inptutWeight.value
  const height = inptutHeight.value

  const showALertErrr = notNumber(weight) || notNumber(height)

  if (showALertErrr) {
    console.log("Mostrar alerta de erro")
    return;
  }

  const result = calcIMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

function notNumber(value) {
  return isNaN(value) || value == ""
}
