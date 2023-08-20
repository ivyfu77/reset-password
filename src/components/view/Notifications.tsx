import React from 'react'
import classNames from 'classnames'
import { MatchConditions } from '../../App'

interface Props {
  conditions: MatchConditions
  password: string
}

export const Notifications: React.FC<Props> = ({ conditions, password }) => {
  return (
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
  )
}
