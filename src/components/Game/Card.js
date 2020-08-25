import React from 'react'
import { useDispatch } from 'react-redux'
import { flipCardAsync } from '../../features/memory/memorySlice'
import styles from './Card.module.css'

export default function Card ({ imgSrc, index, shown, won }) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(flipCardAsync(index))
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      {shown
        ? <img alt='' src={imgSrc} styles={styles.image} />
        : <div className={styles.back} />
      }
      {won && <div className={styles.won} />}
    </div>
  )
}
