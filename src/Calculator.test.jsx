import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Calculator from './Calculator'

describe('Calculator Component', () => {
  beforeEach(() => {
    render(<Calculator />)
  })

  it('debe renderizar el componente correctamente', () => {
    expect(screen.getByText('Calculadora')).toBeInTheDocument()
    expect(screen.getByLabelText('Primer número:')).toBeInTheDocument()
    expect(screen.getByLabelText('Segundo número:')).toBeInTheDocument()
    expect(screen.getByLabelText('Operación:')).toBeInTheDocument()
  })

  it('debe renderizar los botones de Calcular y Limpiar', () => {
    expect(screen.getByRole('button', { name: /calcular/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /limpiar/i })).toBeInTheDocument()
  })

  it('debe permitir ingresar números en los campos de entrada', async () => {
    const user = userEvent.setup()
    const num1Input = screen.getByLabelText('Primer número:')
    const num2Input = screen.getByLabelText('Segundo número:')

    await user.type(num1Input, '5')
    await user.type(num2Input, '3')

    expect(num1Input.value).toBe('5')
    expect(num2Input.value).toBe('3')
  })

  it('debe realizar una suma correctamente', async () => {
    const user = userEvent.setup()
    const num1Input = screen.getByLabelText('Primer número:')
    const num2Input = screen.getByLabelText('Segundo número:')
    const calculateBtn = screen.getByRole('button', { name: /calcular/i })

    await user.type(num1Input, '5')
    await user.type(num2Input, '3')
    await user.click(calculateBtn)

    await waitFor(() => {
      expect(screen.getByText(/resultado:/i)).toBeInTheDocument()
      expect(screen.getByText('8')).toBeInTheDocument()
    })
  })

  it('debe realizar una resta correctamente', async () => {
    const user = userEvent.setup()
    const num1Input = screen.getByLabelText('Primer número:')
    const num2Input = screen.getByLabelText('Segundo número:')
    const operationSelect = screen.getByLabelText('Operación:')
    const calculateBtn = screen.getByRole('button', { name: /calcular/i })

    await user.type(num1Input, '10')
    await user.type(num2Input, '3')
    await user.selectOptions(operationSelect, 'subtract')
    await user.click(calculateBtn)

    await waitFor(() => {
      expect(screen.getByText(/resultado:/i)).toBeInTheDocument()
      expect(screen.getByText('7')).toBeInTheDocument()
    })
  })

  it('debe realizar una multiplicación correctamente', async () => {
    const user = userEvent.setup()
    const num1Input = screen.getByLabelText('Primer número:')
    const num2Input = screen.getByLabelText('Segundo número:')
    const operationSelect = screen.getByLabelText('Operación:')
    const calculateBtn = screen.getByRole('button', { name: /calcular/i })

    await user.type(num1Input, '4')
    await user.type(num2Input, '5')
    await user.selectOptions(operationSelect, 'multiply')
    await user.click(calculateBtn)

    await waitFor(() => {
      expect(screen.getByText(/resultado:/i)).toBeInTheDocument()
      expect(screen.getByText('20')).toBeInTheDocument()
    })
  })

  it('debe realizar una división correctamente', async () => {
    const user = userEvent.setup()
    const num1Input = screen.getByLabelText('Primer número:')
    const num2Input = screen.getByLabelText('Segundo número:')
    const operationSelect = screen.getByLabelText('Operación:')
    const calculateBtn = screen.getByRole('button', { name: /calcular/i })

    await user.type(num1Input, '10')
    await user.type(num2Input, '2')
    await user.selectOptions(operationSelect, 'divide')
    await user.click(calculateBtn)

    await waitFor(() => {
      expect(screen.getByText(/resultado:/i)).toBeInTheDocument()
      expect(screen.getByText('5')).toBeInTheDocument()
    })
  })

  it('debe mostrar un error al intentar dividir por cero', async () => {
    const user = userEvent.setup()
    const num1Input = screen.getByLabelText('Primer número:')
    const num2Input = screen.getByLabelText('Segundo número:')
    const operationSelect = screen.getByLabelText('Operación:')
    const calculateBtn = screen.getByRole('button', { name: /calcular/i })

    await user.type(num1Input, '10')
    await user.type(num2Input, '0')
    await user.selectOptions(operationSelect, 'divide')
    await user.click(calculateBtn)

    await waitFor(() => {
      expect(screen.getByText(/no se puede dividir por cero/i)).toBeInTheDocument()
    })
  })

  it('debe mostrar un error cuando faltan números', async () => {
    const user = userEvent.setup()
    const calculateBtn = screen.getByRole('button', { name: /calcular/i })

    await user.click(calculateBtn)

    await waitFor(() => {
      expect(screen.getByText(/por favor ingresa ambos números/i)).toBeInTheDocument()
    })
  })

  it('debe limpiar todos los campos al hacer clic en Limpiar', async () => {
    const user = userEvent.setup()
    const num1Input = screen.getByLabelText('Primer número:')
    const num2Input = screen.getByLabelText('Segundo número:')
    const clearBtn = screen.getByRole('button', { name: /limpiar/i })

    await user.type(num1Input, '5')
    await user.type(num2Input, '3')
    
    expect(num1Input.value).toBe('5')
    expect(num2Input.value).toBe('3')

    await user.click(clearBtn)

    expect(num1Input.value).toBe('')
    expect(num2Input.value).toBe('')
    expect(screen.queryByText(/resultado:/i)).not.toBeInTheDocument()
  })

  it('debe calcular al presionar Enter', async () => {
    const user = userEvent.setup()
    const num1Input = screen.getByLabelText('Primer número:')
    const num2Input = screen.getByLabelText('Segundo número:')

    await user.type(num1Input, '5')
    await user.type(num2Input, '3')
    await user.type(num2Input, '{Enter}')

    await waitFor(() => {
      expect(screen.getByText(/resultado:/i)).toBeInTheDocument()
      expect(screen.getByText('8')).toBeInTheDocument()
    })
  })
})
