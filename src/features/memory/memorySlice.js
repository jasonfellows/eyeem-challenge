import { createSlice } from '@reduxjs/toolkit'

export const memorySlice = createSlice({
  name: 'memory',
  initialState: {
    boardSize: 6,
    cards: [],
    gameActive: false,
    gameComplete: false,
    loading: false,
    players: [{
      activeTurn: false,
      name: 'player1',
      pairsWon: 0
    }]
  },
  reducers: {
    addPlayer: (state, action) => {
      const players = state.players.slice()
      players.push({
        activeTurn: false,
        name: action.payload,
        pairsWon: 0
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
            if (player.activeTurn) player.pairsWon++
          })

          cards.forEach(card => {
            if (card.imgSrc === shownCards[0].imgSrc) card.won = true
          })

          const wonCards = cards.filter(card => card.shown)
          if (wonCards.length === state.boardSize) {
            state.gameActive = false
            state.gameComplete = true
          }
        } else {
          cards.forEach(card => {
            if (!card.won) card.shown = false
          })
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

export const flipCardAsync = (index) => (dispatch, getState) => {
  dispatch(flipCard(index))
  setTimeout(() => {
    dispatch(checkTurn())
  }, 1000)
}

export const startGameAsync = () => async (dispatch, getState) => {
  // const { boardSize } = getState()

  dispatch(setLoading(true))

  // fetch from EyeEm API
  // map response to cards and add cards

  const cards = [
    {
      shown: false,
      imgSrc: 'https://placekitten.com/200/200',
      won: false
    }, {
      shown: false,
      imgSrc: 'https://placekitten.com/200/300',
      won: false
    }, {
      shown: false,
      imgSrc: 'https://placekitten.com/200/200',
      won: false
    }, {
      shown: false,
      imgSrc: 'https://placekitten.com/200/600',
      won: false
    }, {
      shown: false,
      imgSrc: 'https://placekitten.com/200/600',
      won: false
    }, {
      shown: false,
      imgSrc: 'https://placekitten.com/200/300',
      won: false
    }
  ]

  dispatch(startGame(cards))
}

export const selectCards = state => state.memory.cards

export const selectGameState = state => ({
  gameActive: state.memory.gameActive,
  gameComplete: state.memory.gameComplete,
  loading: state.memory.loading
})

export const selectPlayers = state => state.memory.players

export default memorySlice.reducer
