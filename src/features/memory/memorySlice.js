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
    completeGame: state => {
      state.memory.gameActive = false
      state.memory.gameComplete = true
    },
    completeTurn: (state, action) => {
      const players = state.players.slice()
      // set current active player inactive
      // cycle to next index or first if current is last and set active
      state.players = players
    },
    flipCard: (state, action) => {
      const cards = state.cards.slice()
      // flip one card
      // check if two cards are flipped
      // if two with same src are flipped, add a win to active player, set both cards won
      // else unflip all
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
      state.loading = false
      const players = state.players.slice()
      players[0].activeTurn = true
      state.players = players
    }
  }
})

export const {
  addPlayer,
  completeGame,
  completeTurn,
  flipCard,
  removePlayer,
  setLoading,
  startGame
} = memorySlice.actions

export const startGameAsync = () => async (dispatch, getState) => {
  // const { boardSize } = getState()

  dispatch(setLoading(true))

  // fetch from EyeEm API
  // map response to cards and add cards

  dispatch(startGame([
    {
      shown: false,
      imageSrc: 'https://placekitten.com/200/200',
      won: false
    }, {
      shown: false,
      imageSrc: 'https://placekitten.com/200/200',
      won: false
    }, {
      shown: false,
      imageSrc: 'https://placekitten.com/200/200',
      won: false
    }, {
      shown: false,
      imageSrc: 'https://placekitten.com/200/200',
      won: false
    }, {
      shown: false,
      imageSrc: 'https://placekitten.com/200/200',
      won: false
    }, {
      shown: false,
      imageSrc: 'https://placekitten.com/200/200',
      won: false
    }
  ]))
}

export const selectCards = state => state.memory.cards

export const selectGameState = state => ({
  gameActive: state.memory.gameActive,
  gameComplete: state.memory.gameComplete,
  loading: state.memory.loading
})

export const selectPlayers = state => state.memory.players

export default memorySlice.reducer
