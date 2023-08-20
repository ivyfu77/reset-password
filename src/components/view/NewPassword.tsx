import React from 'react'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const NewPassword: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="password-container">
      <label htmlFor="new-pass">New Password:</label>
      <input
        type="password"
        id="new-pass"
        name="password"
        minLength={8}
        onChange={onChange}
        required />
    </div>
  )
}
