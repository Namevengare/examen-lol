/**
 * Realiza una operación matemática con dos números
 * @param {number} num1 - Primer número
 * @param {number} num2 - Segundo número
 * @param {string} operation - Tipo de operación: 'add', 'subtract', 'multiply', 'divide'
 * @returns {number} Resultado de la operación
 * @throws {Error} Si la operación no es válida o hay división por cero
 */
export const performCalculation = (num1, num2, operation) => {
  // Validar que sean números
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Los argumentos deben ser números')
  }

  switch (operation) {
    case 'add':
      return num1 + num2
    case 'subtract':
      return num1 - num2
    case 'multiply':
      return num1 * num2
    case 'divide':
      if (num2 === 0) {
        throw new Error('No se puede dividir por cero')
      }
      return num1 / num2
    default:
      throw new Error(`Operación no válida: ${operation}`)
  }
}

/**
 * Valida si una cadena es un número válido
 * @param {string} value - Valor a validar
 * @returns {boolean} True si es un número válido
 */
export const isValidNumber = (value) => {
  if (value === '' || value === null || value === undefined) {
    return false
  }
  
  // Validar que no tenga múltiples puntos decimales
  if (typeof value === 'string' && (value.match(/\./g) || []).length > 1) {
    return false
  }
  
  const num = parseFloat(value)
  return !isNaN(num) && isFinite(num)
}
