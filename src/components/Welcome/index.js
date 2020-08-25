import React from 'react'
import styles from './Welcome.module.css'
import PlayersForm from '../PlayersForm'

export default function Welcome () {
  return (
    <div className={styles.container}>
      <h1>Welcome to EyeMemory!</h1>
      <PlayersForm />
    </div>
  )
}
