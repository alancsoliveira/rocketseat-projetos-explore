/*
Capturar 2 números e fazer as operações matemáticas de:
Soma
Subtração
Multiplicação
Divisão
Resto da divisão.
*/

let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite o segundo número:"))



let soma = numberOne + numberTwo
let subtração = numberOne - numberTwo
let multiplicação = numberOne * numberTwo
let divisão = numberOne / numberTwo
let resto = numberOne % + numberTwo


if (numberOne && numberTwo) {
  alert(`A soma de ${numberOne} e ${numberTwo} é: ${soma}`)
  alert(`A subtração de ${numberOne} por ${numberTwo} é: ${subtração}`)
  alert(`A multiplicação de ${numberOne} por ${numberTwo} é: ${multiplicação}`)
  alert(`A divisão de ${numberOne} por ${numberTwo} é: ${divisão}`)
  alert(`O resto da divisão de ${numberOne} por ${numberTwo} é: ${resto}`)
} else { alert("Insira os valores") }