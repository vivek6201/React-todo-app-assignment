import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../Redux/Slices/TodoSlice"

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
})