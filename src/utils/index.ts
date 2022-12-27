export function convertCentsToReal(cents: number) {
  const priceInterger = cents.toString().slice(0, cents.toString().length - 2)
  const priceRest = cents.toString().slice(-2)

  return `${priceInterger},${priceRest}`
}
