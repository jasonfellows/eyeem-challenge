import React from 'react'
import styles from './Welcome.module.css'
import PlayersForm from '../PlayersForm'

export default function Welcome () {
  return (
    <div className={styles.container}>
      <h2>EyeMemory</h2>
      <PlayersForm />
    </div>
  )
}
