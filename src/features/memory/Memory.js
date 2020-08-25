import React from 'react'
import { useSelector } from 'react-redux'
import { selectGameState } from './memorySlice'
import Game from '../../components/Game'
import Loading from '../../components/Loading'
import Scoreboard from '../../components/Scoreboard'
import Welcome from '../../components/Welcome'

export function Memory () {
  const {
    gameActive,
    gameComplete,
    loading
  } = useSelector(selectGameState)

  if (!gameActive && !gameComplete) return <Welcome />

  return (
    <>
      {loading && <Loading />}
      {gameComplete && <Scoreboard />}
      <Game />
    </>
  )
}
