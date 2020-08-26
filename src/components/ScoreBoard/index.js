import React from 'react'
import { useSelector } from 'react-redux'
import { selectPlayers } from '../../features/memory/memorySlice'
import Score from './Score'
import styles from './ScoreBoard.module.css'

export default function ScoreBoard () {
  const players = useSelector(selectPlayers)

  return (
    <div className={styles.container}>
      {players.map((player, index) => <Score key={player.name + index} {...player} />)}
    </div>
  )
}
