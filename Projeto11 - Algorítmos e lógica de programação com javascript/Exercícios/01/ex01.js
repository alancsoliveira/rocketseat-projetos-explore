/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:


E então, topa encarar esse desafio? **💜**
Vai ser muito importante para o seu aprendizado rever e aplicar esses novos conceitos. 

*****Lembrando*: tente se desafiar mas, caso apareça alguma dificuldade, você pode ir no nosso **[fórum](https://app.rocketseat.com.br/h/forum/explorer)** e deixar sua dúvida por lá! 
Boa sorte e boooooora codar! **🚀**

*/

let number1 = Number(prompt("Insira o primeiro número: "))
let number2 = Number(prompt("Insira o segundo número: "))

let soma = number1 + number2
let subtracao = number1 - number2
let multiplicacao = number1 * number2
let divisao = number1 / number2
let resto = number1 % number2


function parOuImpar(number1, number2) {
  let result;
  if (number1 % number2 === 0) result = "Par";
  else result = "Ímpar";

  return result;
}

alert(
  ` Os números digitados forma ${number1} e ${number2}
    A soma dos dois números é ${soma} e é um número ${parOuImpar(number1, number2)};
    A subtração dos dois números é ${subtracao};
    A multiplicação dos dois números é ${multiplicacao};
    A divisão dos dois números é ${divisao};
    O resto da divisão dos dois números é ${resto};
`
)

if (number1 == number2) {
  alert("Os números inseridos são iguais")
} else { alert("Os números inseridos são diferentes") }
