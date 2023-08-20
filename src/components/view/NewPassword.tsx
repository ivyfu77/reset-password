import React, { useState } from 'react'
import classNames from 'classnames'
import { MatchConditions } from '../../App'

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
        minLength={8}
        onChange={(e) => {
          const value = e.target.value.trim()
          setPassword(value)
          onChange(value)
        }}
        required />
      <div className="notifications">
        <span className="notifications_header">Your password should:</span>
        <span className={classNames('notifications_msg', { 'satisefied': conditions.minLength})}>
          {conditions.minLength ? '✓ ' : '⚠ '}At least 8 characters
        </span>
        <span className={classNames('notifications_msg', { 'satisefied': conditions.oneDigit})}>
          {conditions.oneDigit ? '✓ ' : '⚠ '}At least 1 number
        </span>
        <span className={classNames('notifications_msg', { 'satisefied': conditions.twoSpecialChar})}>
          {conditions.twoSpecialChar ? '✓ ' : '⚠ '}At least 2 special characters
        </span>
        <span className="notifications_header">Or:</span>
        <span className={classNames('notifications_msg', { 'satisefied': password.length > 15})}>
          {password.length > 15 ? '✓ ' : '⚠ '}More than 15 characters
        </span>
      </div>
    </div>
  )
}
