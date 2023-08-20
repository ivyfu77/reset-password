import React, { useState } from 'react'
import { MatchConditions } from '../../App'
import { Notifications } from './Notifications'

interface Props {
  onChange: (password: string) => void
  conditions: MatchConditions
}

export const NewPassword: React.FC<Props> = ({ onChange, conditions }) => {
  const [password, setPassword] = useState<string>('')
  return (
    <div className="password-container">
      <label htmlFor="new-pass">New Password:</label>
      <input
        type="password"
        id="new-pass"
        name="password"
        onChange={(e) => {
          const value = e.target.value.trim()
          setPassword(value)
          onChange(value)
        }}
      />
      <Notifications conditions={conditions} password={password} />
    </div>
  )
}
