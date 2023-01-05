/* Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

A média positiva deverá ser maior que 6

Se o aluno passou no bimestre, dar os parabéns.

Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt("Digite o nome do aluno")
let nota1 = Number(prompt("Digite a primeira nota"))
let nota2 = Number(prompt("Digite a segunda nota"))
let nota3 = Number(prompt("Digite a terceira nota"))

let average = ((nota1 + nota2 + nota3) / 3).toFixed(2)

if (average >= 6) {
  alert(`Parabéns ${student}, sua média final é ${average}`)
} else {
  alert(`${student} sua média final é ${average}, infelizmente não é o suficiente para aprovação direta, mas você pode se esforçar mais e conseguir uma nota melhor na recuperação.`)
}
