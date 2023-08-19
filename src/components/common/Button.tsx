import React, { ReactNode } from 'react'
import classNames from 'classnames'

interface Props {
  variant?: 'do' | 'no' | 'go'
  className?: string
  disabled?: boolean
  children: ReactNode
}

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  variant = 'do',
  className = '',
  disabled = false,
  children,
  ...attributes
}) => {
  return (
    <button
      {...attributes}
      className={classNames('btn', `btn--${variant}`, className)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
