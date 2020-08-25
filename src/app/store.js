import { configureStore } from '@reduxjs/toolkit'
import memoryReducer from '../features/memory/memorySlice'

export default configureStore({
  reducer: {
    memory: memoryReducer
  }
})
