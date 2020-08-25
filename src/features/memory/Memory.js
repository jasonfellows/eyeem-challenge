import React from 'react'
import { useSelector } from 'react-redux'
import { selectGameState } from './memorySlice'
import Game from '../../components/Game'
import Loading from '../../components/Loading'
import Summary from '../../components/Summary'
import Welcome from '../../components/Welcome'

export function Memory () {
  const {
    gameActive,
    gameComplete,
    loading
  } = useSelector(selectGameState)

  const MainContent = () => {
    if (gameComplete) return <Summary />
    else if (gameActive) return <Game />
    else return <Welcome />
  }

  return (
    <>
      {loading && <Loading />}
      <MainContent />
    </>
  )
}
