import React from 'react'
import styles from './Game.module.css'
import GameBoard from './GameBoard'
import ScoreHeader from './ScoreHeader'

export default function Game () {
  return (
    <div className={styles.container}>
      <ScoreHeader />
      <GameBoard />
    </div>
  )
}
