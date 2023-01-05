/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 1.90
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 1.70
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 1.80
  },
]

function calcIMC(weight, height) {
  let IMC = weight / (height ** 2)
  return IMC.toFixed(1)
}

for (let patient of patients) {
  alert(`O IMC de ${patient.name} é ${calcIMC(patient.weight, patient.height)}`)
}
