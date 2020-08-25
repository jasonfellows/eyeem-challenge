import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPlayer } from '../../features/memory/memorySlice'
import Button from '../Button'

export default function Player () {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = () => {
    setName('')
    dispatch(addPlayer(name))
  }

  return (
    <div>
      <input
        onChange={handleChange}
        maxLength='20'
        placeholder='player name'
        value={name}
      />
      <Button 
        disabled={name.length === 0}
        onClick={handleSubmit}
      >
        Add
      </Button>
    </div>
  )
}
