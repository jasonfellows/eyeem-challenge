import React from 'react'
import styles from './Game.module.css'
import GameBoard from './GameBoard'
import ScoreBoard from '../ScoreBoard'

export default function Game () {
  return (
    <div className={styles.container}>
      <ScoreBoard />
      <GameBoard />
    </div>
  )
}
