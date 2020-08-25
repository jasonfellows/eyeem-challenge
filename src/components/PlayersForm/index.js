import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPlayers, startGame } from '../../features/memory/memorySlice'
import Button from '../Button'
import PlayerForm from './PlayerForm'
import Player from './Player'

export default function PlayersForm () {
  const players = useSelector(selectPlayers)
  const dispatch = useDispatch()

  return (
    <>
      {players && players.map((player, index) => <Player key={player.name + index} index={index} name={player.name} />)}
      <PlayerForm />
      <Button disabled={players.length === 0} onClick={() => dispatch(startGame())}>
        Start game
      </Button>
    </>
  )
}
