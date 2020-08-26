import React from 'react'
import styles from './Score.module.css'

export default function Score ({ activeTurn, name, score }) {
  const allStyles = () => {
    if (activeTurn) return `${styles.container} ${styles.active}`
    else return `${styles.container}`
  }

  return (
    <div className={allStyles()}>
      <div className={styles.name}>{name}</div>
      <div className={styles.score}>{`${score} points`}</div>
    </div>
  )
}
