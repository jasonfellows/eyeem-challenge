import React from 'react'
import { useSelector } from 'react-redux'
import { selectCards } from '../../features/memory/memorySlice'
import Card from './Card'
import styles from './GameBoard.module.css'

export default function GameBoard () {
  const cards = useSelector(selectCards)

  return (
    <div className={styles.container}>
      {cards.map((card, index) => <Card index={index} key={card.imgSrc + index} {...card} />)}
    </div>
  )
}
