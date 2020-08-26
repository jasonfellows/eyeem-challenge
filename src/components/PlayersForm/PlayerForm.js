import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPlayer } from '../../features/memory/memorySlice'
import Button from '../Button'
import styles from './PlayerForm.module.css'

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
    <div className={styles.container}>
      <input
        className={styles.name}
        onChange={handleChange}
        maxLength='20'
        placeholder='player name'
        value={name}
      />
      <Button
        className={styles.add}
        disabled={name.length === 0}
        onClick={handleSubmit}
        small
      >
        Add
      </Button>
    </div>
  )
}
