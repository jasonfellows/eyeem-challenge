import { createSlice } from '@reduxjs/toolkit'
import { shuffleArray } from '../../utils'

export const memorySlice = createSlice({
  name: 'memory',
  initialState: {
    boardSize: 8,
    cards: [],
    gameActive: false,
    gameComplete: false,
    loading: false,
    players: [{
      activeTurn: false,
      name: 'player1',
      score: 0
    }]
  },
  reducers: {
    addPlayer: (state, action) => {
      const players = state.players.slice()
      players.push({
        activeTurn: false,
        name: action.payload,
        score: 0
      })
      state.players = players
    },
    checkTurn: (state, action) => {
      const cards = state.cards.slice()
      const players = state.players.slice()
      const shownCards = cards.filter(card => card.shown && !card.won)

      if (shownCards.length === 2) {
        if (shownCards[0].imgSrc === shownCards[1].imgSrc) {
          players.forEach(player => {
            if (player.activeTurn) player.score++
          })

          cards.forEach(card => {
            if (card.imgSrc === shownCards[0].imgSrc) card.won = true
          })

          const wonCards = cards.filter(card => card.shown)
          if (wonCards.length === state.boardSize) {
            state.gameActive = false
            state.gameComplete = true

            players.forEach(player => {
              player.activeTurn = false
            })
          }
        } else {
          cards.forEach(card => {
            if (!card.won) card.shown = false
          })

          let activeIndex
          players.forEach((player, index) => {
            if (player.activeTurn) activeIndex = index
          })
          players[activeIndex].activeTurn = false
          if (activeIndex === players.length - 1) players[0].activeTurn = true
          else players[activeIndex + 1].activeTurn = true
        }
      }

      state.cards = cards
      state.players = players
    },
    flipCard: (state, action) => {
      const cards = state.cards.slice()
      const shownCards = cards.filter(card => card.shown && !card.won)
      if (shownCards.length < 2) cards[action.payload].shown = true
      state.cards = cards
    },
    removePlayer: (state, action) => {
      const players = state.players.slice()
      players.splice(action.payload, 1)
      state.players = players
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    startGame: (state, action) => {
      state.cards = action.payload
      state.gameActive = true
      state.gameComplete = false
      state.loading = false

      const players = state.players.slice()
      players.forEach(player => {
        player.score = 0
      })
      players[0].activeTurn = true
      state.players = players
    }
  }
})

export const {
  addPlayer,
  checkTurn,
  flipCard,
  removePlayer,
  setLoading,
  startGame
} = memorySlice.actions

export const flipCardAsync = (index) => dispatch => {
  dispatch(flipCard(index))
  setTimeout(() => {
    dispatch(checkTurn())
  }, 500)
}

export const startGameAsync = () => async (dispatch, getState) => {
  const { boardSize } = getState().memory

  dispatch(setLoading(true))

  const url = `https://api.eyeem.com/v2/photos?client_id=9iNUTAc4FCsRj5Co6vJgzVySHxuJtL3Y&limit=${boardSize}&type=popular`
  const response = await fetch(url)
  const body = await response.json()
  console.log(body)

  const cards = [
    {
      shown: false,
      imgSrc: 'https://placekitten.com/600/600',
      won: false
    }, {
      shown: false,
      imgSrc: 'https://placekitten.com/700/700',
      won: false
    }, {
      shown: false,
      imgSrc: 'https://placekitten.com/800/800',
      won: false
    }, {
      shown: false,
      imgSrc: 'https://placekitten.com/900/900',
      won: false
    }
  ]

  dispatch(startGame(shuffleArray(cards.concat(cards))))
}

export const selectCards = state => state.memory.cards

export const selectGameState = state => ({
  gameActive: state.memory.gameActive,
  gameComplete: state.memory.gameComplete,
  loading: state.memory.loading
})

export const selectPlayers = state => state.memory.players

export default memorySlice.reducer
