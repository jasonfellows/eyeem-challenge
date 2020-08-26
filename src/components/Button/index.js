import React from 'react'
import styles from './Button.module.css'

export default function Button ({
  children,
  className,
  disabled,
  onClick,
  small
}) {
  const allStyles = () => {
    if (small) return `${styles.button} ${styles.small} ${className}`
    else return `${styles.button} ${styles.big}  ${className}`
  }

  return (
    <button
      className={allStyles()}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
