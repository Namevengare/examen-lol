import { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operation, setOperation] = useState('add')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleCalculate = () => {
    setError('')
    setResult(null)

    // Validar que ambos números estén ingresados
    if (num1 === '' || num2 === '') {
      setError('Por favor ingresa ambos números')
      return
    }

    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    // Validar que sean números válidos
    if (isNaN(n1) || isNaN(n2)) {
      setError('Por favor ingresa números válidos')
      return
    }

    let calcResult

    switch (operation) {
      case 'add':
        calcResult = n1 + n2
        break
      case 'subtract':
        calcResult = n1 - n2
        break
      case 'multiply':
        calcResult = n1 * n2
        break
      case 'divide':
        if (n2 === 0) {
          setError('No se puede dividir por cero')
          return
        }
        calcResult = n1 / n2
        break
      default:
        setError('Operación no válida')
        return
    }

    setResult(calcResult)
  }

  const handleClear = () => {
    setNum1('')
    setNum2('')
    setOperation('add')
    setResult(null)
    setError('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate()
    }
  }

  return (
    <div className="calculator-container">
      <h1>Calculadora</h1>
      
      <div className="input-group">
        <label htmlFor="num1">Primer número:</label>
        <input
          id="num1"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ingresa el primer número"
        />
      </div>

      <div className="input-group">
        <label htmlFor="num2">Segundo número:</label>
        <input
          id="num2"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ingresa el segundo número"
        />
      </div>

      <div className="input-group">
        <label htmlFor="operation">Operación:</label>
        <select
          id="operation"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Suma (+)</option>
          <option value="subtract">Resta (-)</option>
          <option value="multiply">Multiplicación (×)</option>
          <option value="divide">División (÷)</option>
        </select>
      </div>

      <div className="button-group">
        <button 
          onClick={handleCalculate}
          className="btn-calculate"
        >
          Calcular
        </button>
        <button 
          onClick={handleClear}
          className="btn-clear"
        >
          Limpiar
        </button>
      </div>

      {error && (
        <div className="error-message" role="alert">
          ⚠️ {error}
        </div>
      )}

      {result !== null && !error && (
        <div className="result-message" role="status">
          ✓ Resultado: <strong>{result}</strong>
        </div>
      )}
    </div>
  )
}

export default Calculator
