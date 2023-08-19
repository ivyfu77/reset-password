import React from 'react'
import logo from './logo.svg'
import './style/App.css'

import { Button } from './components/common'

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reset Your Password
        </p>
        <Button>
          Reset
        </Button>
      </header>
    </div>
  )
}

export default App
