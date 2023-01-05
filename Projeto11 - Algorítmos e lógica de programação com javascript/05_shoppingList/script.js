/*

Capture 10 itens para compor a lista de um supermercado.

Após capturar os 10 items, imprima-os, separando por vírgula.

*/

let list = []

for (let i = 1; i < 11; i++) {
  let item = prompt(`Escreva para adicionar o item ${i} a lista: `)
  list.push(item)
}

alert(list)

