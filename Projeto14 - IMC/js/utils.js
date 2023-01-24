export function calculateIMC(weight, height) {
  let IMC = weight / (height / 100) ** 2
  return IMC.toFixed(2)
}

export function notNumber(value) {
  return isNaN(value) || value == ""
}
