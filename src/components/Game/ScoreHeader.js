import React from 'react'
import { useSelector } from 'react-redux'
import { selectPlayers } from '../../features/memory/memorySlice'
import PlayerScore from './PlayerScore'
import styles from './ScoreHeader.module.css'

export default function ScoreHeader () {
  const players = useSelector(selectPlayers)

  return (
    <div className={styles.container}>
      {players.map((player, index) => <PlayerScore key={player.name + index} {...player} />)}
    </div>
  )
}
