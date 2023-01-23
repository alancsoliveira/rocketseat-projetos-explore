const message1 = "Mensagem" // Essa variável fica isolada nesse arquivo, e não consigo usar ela em outro lugar.
//main.js


export const message = message1
export const alertar = function alertar() {
  return "ok"
}
