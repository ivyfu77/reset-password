import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

function checkValid(password: string) {
  render(<App />)
  const passwordInput = screen.getByLabelText('New Password:')
  fireEvent.change(passwordInput, { target: { value: password } })
  expect(passwordInput).toHaveValue(password)
  expect(screen.getByText('✓ At least 8 characters')).toBeInTheDocument()
  expect(screen.getByText('✓ At least 1 number')).toBeInTheDocument()
  expect(screen.getByText('✓ At least 2 special characters')).toBeInTheDocument()
}

describe('# Validation', () => {
  test('should disable Reset button initially', () => {
    render(<App />)
    const btnElement = screen.getByRole('button')
    expect(btnElement).toBeDisabled()
  })
  test('should pass validation with length more than 15 characters', () => {
    let password = 'thisisverylongforpasswordentropy'
    render(<App />)
    const passwordInput = screen.getByLabelText('New Password:')
    fireEvent.change(passwordInput, { target: { value: password } })
    expect(passwordInput).toHaveValue(password)
    expect(screen.getByText('✓ More than 15 characters')).toBeInTheDocument()

    password = 'this_is_shorter'
    fireEvent.change(passwordInput, { target: { value: password } })
    expect(passwordInput).toHaveValue(password)
    expect(screen.getByText('⚠ More than 15 characters')).toBeInTheDocument()
  })
  test('should show correct notification when password is valid', () => {
    let password = '1password!!'
    checkValid(password)
    password = '_12345678)'
    checkValid(password)
    password = '=-)(*&^%$#@!9'
    checkValid(password)
  })
  test('should show notification to indicate which condition is not match', () => {
    let password = 'abc'
    render(<App />)
    const passwordInput = screen.getByLabelText('New Password:')
    fireEvent.change(passwordInput, { target: { value: password } })
    expect(screen.getByText('⚠ At least 8 characters')).toBeInTheDocument()
    expect(screen.getByText('⚠ At least 1 number')).toBeInTheDocument()
    expect(screen.getByText('⚠ At least 2 special characters')).toBeInTheDocument()

    password = 'abc1'
    fireEvent.change(passwordInput, { target: { value: password } })
    expect(screen.getByText('⚠ At least 8 characters')).toBeInTheDocument()
    expect(screen.getByText('✓ At least 1 number')).toBeInTheDocument()
    expect(screen.getByText('⚠ At least 2 special characters')).toBeInTheDocument()

    password = 'abc1defg'
    fireEvent.change(passwordInput, { target: { value: password } })
    expect(screen.getByText('✓ At least 8 characters')).toBeInTheDocument()
    expect(screen.getByText('✓ At least 1 number')).toBeInTheDocument()
    expect(screen.getByText('⚠ At least 2 special characters')).toBeInTheDocument()

    password = '!%abc1'
    fireEvent.change(passwordInput, { target: { value: password } })
    expect(screen.getByText('⚠ At least 8 characters')).toBeInTheDocument()
    expect(screen.getByText('✓ At least 1 number')).toBeInTheDocument()
    expect(screen.getByText('✓ At least 2 special characters')).toBeInTheDocument()
  })
})
