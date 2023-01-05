/*

** Jogo da advinhação **

Apresente a mensagem ao usuário:
"Adivinhe o número que estou pensando? Está entre 0 e 100"

Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

Enquanto o usuário não adivinhar o número, mostrar a mensagem:
"Errado, tente novamente:"

Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns! Você adivinhou o número em X tentativas"

Substitua o "X" da mensagem, pelo número de tentativas.

*/
function getRandom(max) {
  return Math.floor(Math.random() * (max + 1))
}

let randomNumber = getRandom(100)
let attempts = 0
let kick = -1
randomNumber = 10

while (kick != randomNumber) {
  kick = prompt("Adivinha o número que estou pensando? Está entre 0 e 100")
  attempts++

  if (kick > randomNumber) {
    kick = alert("Errado, tente um número menor:")
  }
  else if (kick < randomNumber) {
    kick = alert("Errado, tente um número maior:")
  }
}

alert(`Parabéns! Você adivinhou o número em ${attempts} tentativas`)

