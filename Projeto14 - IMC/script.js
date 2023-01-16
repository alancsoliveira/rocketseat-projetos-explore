//Variáveis
const form = document.querySelector("form")
const inptutWeight = document.querySelector("#weight")
const inptutHeight = document.querySelector("#height")

const modalWrapper = document.querySelector(".modal-wrapper")
const modalMessage = document.querySelector(".modal .title span")
const modalBtnClose = document.querySelector(".modal button.close")

// const Modal = {
//   open: function(){},
// }

calcIMC = (weight, height) => {
  let IMC = weight / ((height / 100) ** 2)
  return IMC.toFixed(2)
}

handleModalToggle = () => {
  modalWrapper.classList.add("open")
}

handleModalClose = () => {
  modalWrapper.classList.remove("open")
}


form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inptutWeight.value
  const height = inptutHeight.value

  const result = calcIMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modalMessage.innerText = message
  handleModalToggle()
}

modalBtnClose.addEventListener("click", handleModalClose)


