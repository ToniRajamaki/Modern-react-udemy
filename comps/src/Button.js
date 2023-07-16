import React from 'react'

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outlie,
  rounder,
}) {
  return <button>{children}</button>
}

export default Button
