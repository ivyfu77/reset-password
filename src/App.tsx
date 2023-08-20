import React, { useEffect, useState } from 'react'
import logo from './imgs/logo.svg'
import './style/App.css'

import { Button } from './components/common'
import { NewPassword } from './components/view/NewPassword'

const REGEX = {
  AT_LEAST_ONE_DIGIT: /\d/,
  AT_LEAST_TWO_SPECIAL_CHAR: /(?=(.*[`()<>?~!@#$%^&*\-_=+'/.,]){2})/
}

export const updateConditions = (value: string, conditions: MatchConditions): MatchConditions => {
  let { notEmpty, minLength, oneDigit, twoSpecialChar, longEnough } = conditions
  notEmpty = !!value
  longEnough = value.length > 15
  minLength = value.length >= 8
  oneDigit = !!value.match(REGEX.AT_LEAST_ONE_DIGIT)
  twoSpecialChar = !!value.match(REGEX.AT_LEAST_TWO_SPECIAL_CHAR)

  return {
    notEmpty,
    minLength,
    oneDigit,
    twoSpecialChar,
    longEnough
  }
}

export type MatchConditions = {
  notEmpty: boolean
  minLength: boolean
  oneDigit: boolean
  twoSpecialChar: boolean
  longEnough: boolean // more than 15 characters
}

const App: React.FC<{}> = () => {
  const [hasError, setHasError] = useState<boolean>(true)
  const [conditions, setConditions] = useState<MatchConditions>({
    notEmpty: false,
    minLength: false,
    oneDigit: false,
    twoSpecialChar: false,
    longEnough: false
  })

  const resetConditions = (newConditions: MatchConditions) => {
    const shouldUpdateConditions =
      Object.keys(newConditions).some(
        key => newConditions[key as keyof MatchConditions] !== conditions[key as keyof MatchConditions]
      )
    if (shouldUpdateConditions) {
      setConditions(newConditions)
    }
  }

  const checkError = (conditions: MatchConditions) => {
    return !conditions.longEnough && Object.keys(conditions).some(key => {
      const condition = conditions[key as keyof MatchConditions]
      return key !== 'longEnough' && !condition
    })
  }

  useEffect(() => {
    setHasError(checkError(conditions))
  }, [conditions])

  return (
    <div className="App-container">
      <div className="reset-password">
        <header className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Reset Your Password
          </p>
        </header>
        <NewPassword
          onChange={(password) => {
            resetConditions(updateConditions(password, conditions))
          }}
          conditions={conditions}
        />
        {/* @Todo: ConfirmPassword */}
        {/* <div className="password-container">
          <label htmlFor="confirm-pass">Confirm Password:</label>
          <input type="password" id="confirm-pass" name="password" minLength={8} required />
        </div> */}
        <div className="reset-btn-container">
          <Button data-testid="reset-btn" disabled={hasError}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
