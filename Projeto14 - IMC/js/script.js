import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumber } from "./utils.js"

const form = document.querySelector("form")
const inptutWeight = document.querySelector("#weight")
const inptutHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inptutWeight.value
  const height = inptutHeight.value

  const weightOrHeightIsNotANumbers = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotANumbers) {
    AlertError.open()

    return
  }
  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message
  Modal.open()
}