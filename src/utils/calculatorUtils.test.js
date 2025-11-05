import { describe, it, expect } from 'vitest'
import { performCalculation, isValidNumber } from '../utils/calculatorUtils'

describe('Calculator Utils', () => {
  describe('performCalculation', () => {
    it('debe sumar dos números correctamente', () => {
      expect(performCalculation(5, 3, 'add')).toBe(8)
      expect(performCalculation(-5, 3, 'add')).toBe(-2)
      expect(performCalculation(0, 0, 'add')).toBe(0)
    })

    it('debe restar dos números correctamente', () => {
      expect(performCalculation(10, 3, 'subtract')).toBe(7)
      expect(performCalculation(3, 10, 'subtract')).toBe(-7)
      expect(performCalculation(5, 5, 'subtract')).toBe(0)
    })

    it('debe multiplicar dos números correctamente', () => {
      expect(performCalculation(4, 5, 'multiply')).toBe(20)
      expect(performCalculation(-3, 4, 'multiply')).toBe(-12)
      expect(performCalculation(0, 100, 'multiply')).toBe(0)
    })

    it('debe dividir dos números correctamente', () => {
      expect(performCalculation(10, 2, 'divide')).toBe(5)
      expect(performCalculation(7, 2, 'divide')).toBe(3.5)
      expect(performCalculation(-10, 2, 'divide')).toBe(-5)
    })

    it('debe lanzar un error al dividir por cero', () => {
      expect(() => {
        performCalculation(10, 0, 'divide')
      }).toThrow('No se puede dividir por cero')
    })

    it('debe lanzar un error para operación inválida', () => {
      expect(() => {
        performCalculation(5, 3, 'invalid')
      }).toThrow('Operación no válida: invalid')
    })

    it('debe lanzar un error si los argumentos no son números', () => {
      expect(() => {
        performCalculation('5', 3, 'add')
      }).toThrow('Los argumentos deben ser números')

      expect(() => {
        performCalculation(5, null, 'add')
      }).toThrow('Los argumentos deben ser números')
    })

    it('debe manejar números decimales correctamente', () => {
      expect(performCalculation(2.5, 1.5, 'add')).toBe(4)
      expect(performCalculation(5.5, 2.5, 'subtract')).toBe(3)
    })
  })

  describe('isValidNumber', () => {
    it('debe retornar true para números válidos', () => {
      expect(isValidNumber('5')).toBe(true)
      expect(isValidNumber('0')).toBe(true)
      expect(isValidNumber('-10')).toBe(true)
      expect(isValidNumber('3.14')).toBe(true)
    })

    it('debe retornar false para valores inválidos', () => {
      expect(isValidNumber('')).toBe(false)
      expect(isValidNumber(null)).toBe(false)
      expect(isValidNumber(undefined)).toBe(false)
      expect(isValidNumber('abc')).toBe(false)
      expect(isValidNumber('12.34.56')).toBe(false)
    })

    it('debe retornar false para Infinity y NaN', () => {
      expect(isValidNumber('Infinity')).toBe(false)
      expect(isValidNumber('NaN')).toBe(false)
    })
  })
})
