import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

test('should Greet be rendered correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText(/hello/i)
  expect(textElement).toBeInTheDocument()
})

test('Greet renders with name', () => {
  const name = 'Ramy'
  render(<Greet name={name} />)
  const textElement = screen.getByText(`Hello ${name}`)
  expect(textElement).toBeInTheDocument()
})
