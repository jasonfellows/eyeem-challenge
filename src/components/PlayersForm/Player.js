import React from 'react'
import { useDispatch } from 'react-redux'
import { removePlayer } from '../../features/memory/memorySlice'
import Button from '../Button'
import styles from './Player.module.css'

export default function Player ({ index, name }) {
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <span className={styles.name}>{name}</span>
      <Button className={styles.remove} onClick={() => dispatch(removePlayer(index))} small>Remove</Button>
    </div>
  )
}
