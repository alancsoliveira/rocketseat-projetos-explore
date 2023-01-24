export const AlertError = {
  element: document.querySelector(".alert-error"),
  open() {
    AlertError.element.classList.add("open")
  },
  close() {
    AlertError.element.classList.remove("open")
  },
}

window.addEventListener('input', handleKeydown)

function handleKeydown (){
  if(AlertError.element.classList.contains("open")){
    AlertError.close()
  }
}
