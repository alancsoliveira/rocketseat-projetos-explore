/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let list = []
let option = 0

while (option != 3) {
  option = Number(prompt(`
Olá usuário!
Digite o número da opção desejada

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`))

  switch (option) {
    case 1:
      list.push(prompt("Cadastrar item: "))
      break;
    case 2:
      if (list.length > 0) alert(`Esses são os itens da lista: ${list}`)
      else alert("Não existem itens cadastrados")
      break;
    case 3:
      alert("Saindo do programa...!")
      option = 3
      break;
    default:
      alert("Digite uma opção válida")
  }
}