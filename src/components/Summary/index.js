import React from 'react'
import { useSelector } from 'react-redux'
import { selectPlayers } from '../../features/memory/memorySlice'
import PlayersForm from '../PlayersForm'
import ScoreBoard from '../ScoreBoard'
import styles from './Summary.module.css'

export default function Summary () {
  const players = useSelector(selectPlayers)

  const winners = () => {
    let highScoreIndices = [0]
    players.forEach((player, index) => {
      if (index > 0 && player.score === players[highScoreIndices[0]].score) {
        highScoreIndices.push(index)
      } else if (player.score > players[highScoreIndices[0]].score) {
        highScoreIndices = [index]
      }
    })
    return highScoreIndices.map(index => players[index].name).join(' and ')
  }

  return (
    <div className={styles.container}>
      <h2>{`${winners()} won!`}</h2>
      <ScoreBoard players={players} />
      <h3>Start a new game</h3>
      <PlayersForm />
    </div>
  )
}
