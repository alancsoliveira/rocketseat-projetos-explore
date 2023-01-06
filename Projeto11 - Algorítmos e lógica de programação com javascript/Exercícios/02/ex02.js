/*

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:

<aside>
💡 Dica: para quebrar uma linha no `alert()` basta usar um **\n** na mensagem. 😛

</aside>

Obs: você quem manda no tamanho da lista! No exemplo a lista é composta por 4 estudantes. 😊
Fique à vontade caso queira adicionar novos dados e fazer novas validações. Se desafie! 🚀

****E aí, topa encarar esse desafio? **💜**
Vai ser muito importante para o seu aprendizado rever e aplicar esses novos conceitos. 

*****Lembrando*: tente se desafiar mas, caso apareça alguma dificuldade, você pode ir no nosso **[fórum](https://app.rocketseat.com.br/h/forum/explorer)** e deixar sua dúvida por lá! 
Boa sorte e boooooora codar! **🚀**

*/

function average(student) {
  let menssageResult;

  let average = (Number(student.firstTestScore) + Number(student.secondTestScore)) / 2

  if (average >= 7) {
    menssageResult = `
    A média do aluno(a/e) ${student.name} é: ${average}
    Parabéns ${student.name}! Você foi aprovad(a/e) no concurso!
    `
  } else {
    menssageResult = `
    A média do aluno(a/e) ${student.name} é: ${average}
    Não foi dessa vez, ${student.name}!Tente novamente!
    `

  }

  return menssageResult;
}

function isItApproved() {

}

let students = [
  {
    name: "Alan",
    firstTestScore: 10,
    secondTestScore: 10,
  },

  {
    name: "Rafaely",
    firstTestScore: 9,
    secondTestScore: 8,
  },

  {
    name: "Cristiano",
    firstTestScore: 7,
    secondTestScore: 5,
  }
]



for (student of students) {
  alert(average(student))
}


