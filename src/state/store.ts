import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import authReducer from "./auth";
import GetItemsReducer from "./todoItem";

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    GetItemsReducer: GetItemsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector