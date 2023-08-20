import React, { useState } from 'react'
import logo from './imgs/logo.svg'
import './style/App.css'

import { Button } from './components/common'
import { NewPassword } from './components/view/NewPassword'

const ERRORS = {
  EMPTY: 'empty',
  LESS_THAN_MIN_LENGTH: 'lessThanMinLength',
  NO_DIGIT: 'noDigit',
  NO_TWO_SPECIAL_CHAR: 'noTwoSpecialChar',
}

const REGEX = {
  AT_LEAST_ONE_DIGIT: /\d/,
  AT_LEAST_TWO_SPECIAL_CHAR: /(?=(.*[`!@#$%^&*\-_=+'/.,]){2})/
}

const hasError = (value: string): string | boolean => {
  if (!value) {
    return ERRORS.EMPTY
  }
  if (value.length > 15) {
    return false
  }
  if (value.length < 8) {
    return ERRORS.LESS_THAN_MIN_LENGTH
  }
  if (!value.match(REGEX.AT_LEAST_ONE_DIGIT)) {
    return ERRORS.NO_DIGIT
  }
  if (!value.match(REGEX.AT_LEAST_TWO_SPECIAL_CHAR)) {
    return ERRORS.NO_TWO_SPECIAL_CHAR
  }

  return false
}

const App: React.FC<{}> = () => {
  const [password, setPassword] = useState<string>('')

  return (
    <div className="App-container">
      <div className="reset-password">
        <header className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Reset Your Password
          </p>
        </header>
        <NewPassword onChange={(e) => {
          const value = e.target.value
          //console.log(value)
          setPassword(value)
        }} />
        {/* <div className="password-container">
          <label htmlFor="confirm-pass">Confirm Password:</label>
          <input type="password" id="confirm-pass" name="password" minLength={8} required />
        </div> */}
        <div className="reset-btn-container">
          <Button disabled={Boolean(hasError(password))}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
