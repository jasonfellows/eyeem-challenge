import React from 'react'
import styles from './PlayerScore.module.css'

export default function PlayerScore ({ activeTurn, name, pairsWon }) {
  return (
    <div className={styles.container}>
      <div>{name}</div>
      <div>{`${pairsWon} points`}</div>
    </div>
  )
}
