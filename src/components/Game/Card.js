import React from 'react'
import { useDispatch } from 'react-redux'
import { flipCardAsync } from '../../features/memory/memorySlice'
import styles from './Card.module.css'

export default function Card ({ imgSrc, index, shown, won }) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(flipCardAsync(index))
  }

  const cardStyles = () => {
    let styles = { backgroundImage: `url("${imgSrc}")`}
    if (shown) styles.display = 'block'
    return styles
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.image} style={cardStyles()} />
      <div className={styles.back} />
      {won && <div className={styles.won} />}
    </div>
  )
}
