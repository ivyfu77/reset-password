import React from 'react'
import logo from './logo.svg'
import './style/App.css'

import { Button } from './components/common'

const App: React.FC<{}> = () => {
  return (
    <div className="App-container">
      <div className="reset-password">
        <header className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Reset Your Password
          </p>
        </header>
        <div className="password-container">
          <label htmlFor="new-pass">New Password:</label>
          <input type="password" id="new-pass" name="password" minLength={8} required />
        </div>
        <div className="password-container">
          <label htmlFor="confirm-pass">Confirm Password:</label>
          <input type="password" id="confirm-pass" name="password" minLength={8} required />
        </div>
        <div className="reset-btn-container">
          <Button>
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
