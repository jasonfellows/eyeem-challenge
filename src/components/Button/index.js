import React from 'react'
import styles from './Button.module.css'

export default function Game ({
  children,
  disabled,
  onClick
}) {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
