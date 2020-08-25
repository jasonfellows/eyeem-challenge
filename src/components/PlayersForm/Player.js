import React from 'react'
import { useDispatch } from 'react-redux'
import { removePlayer } from '../../features/memory/memorySlice'
import Button from '../Button'

export default function Player ({ index, name }) {
  const dispatch = useDispatch()

  return (
    <div>
      <span>{name}</span>
      <Button onClick={() => dispatch(removePlayer(index))}>Remove</Button>
    </div>
  )
}
