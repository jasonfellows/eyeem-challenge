import { createSlice } from '@reduxjs/toolkit'

export const memorySlice = createSlice({
  name: 'memory',
  initialState: {
    boardSize: 6,
    cards: [],
    gameActive: false,
    gameComplete: false,
    loading: false,
    players: []
  },
  reducers: {
    addPlayer: (state, action) => {
      state.players = state.players.push[{
        activeTurn: false,
        name: action.payload.name,
        pairsWon: 0
      }]
    },
    completeGame: state => {
      state.gameActive = false
      state.gameComplete = true
    },
    completeTurn: (state, action) => {

    },
    flipCard: (state, action) => {

    },
    removePlayer: (state, action) => {
      state.players = state.players.splice(action.index, 1)
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    startGame: (state, action) => {
      state.loading = false
      state.gameActive = true
      state.cards = action.payload.cards
      state.players[0].activeTurn = true
    }
  }
})

export const {
  addPlayer,
  completeGame,
  completeTurn,
  flipCard,
  removePlayer,
  setLoading
} = memorySlice.actions

export const startGameAsync = () => async (dispatch, getState) => {
  const { boardSize } = getState()

  dispatch(setLoading(true))

  // fetch from EyeEm API
  // map response to cards and add cards

  dispatch(setLoading(false))
}

export default memorySlice.reducer
