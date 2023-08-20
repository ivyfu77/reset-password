import React, { useEffect, useState } from 'react'
import logo from './imgs/logo.svg'
import './style/App.css'

import { Button } from './components/common'
import { NewPassword } from './components/view/NewPassword'

// const ERRORS = {
//   EMPTY: 'empty',
//   LESS_THAN_MIN_LENGTH: 'lessThanMinLength',
//   NO_DIGIT: 'noDigit',
//   NO_TWO_SPECIAL_CHAR: 'noTwoSpecialChar',
// }

const REGEX = {
  AT_LEAST_ONE_DIGIT: /\d/,
  AT_LEAST_TWO_SPECIAL_CHAR: /(?=(.*[`!@#$%^&*\-_=+'/.,]){2})/
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

  const resetConditions = (key: string, value: boolean) => {
    if (conditions[key as keyof MatchConditions] !== value) {
      setConditions({
        ...conditions,
        [key]: value
      })
    }
  }

  const updateConditions = (value: string) => {
    if (!value) {
      resetConditions('notEmpty', false)
    } else {
      resetConditions('notEmpty', true)
    }

    if (value.length > 15) {
      resetConditions('longEnough', true)
    } else {
      resetConditions('longEnough', false)
    }

    if (value.length < 8) {
      resetConditions('minLength', false)
    } else {
      resetConditions('minLength', true)
    }

    if (!value.match(REGEX.AT_LEAST_ONE_DIGIT)) {
      resetConditions('oneDigit', false)
    } else {
      resetConditions('oneDigit', true)
    }

    if (!value.match(REGEX.AT_LEAST_TWO_SPECIAL_CHAR)) {
      resetConditions('twoSpecialChar', false)
    } else {
      resetConditions('twoSpecialChar', true)
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
            console.log(conditions)
            updateConditions(password)
          }}
          conditions={conditions}
        />
        {/* <div className="password-container">
          <label htmlFor="confirm-pass">Confirm Password:</label>
          <input type="password" id="confirm-pass" name="password" minLength={8} required />
        </div> */}
        <div className="reset-btn-container">
          <Button disabled={hasError}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
