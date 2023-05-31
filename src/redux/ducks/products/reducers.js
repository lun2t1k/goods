import {createReducer} from '@reduxjs/toolkit'
import {setProducts, setIsLoading} from './actions'

const initialFriendsState = {
  products: [],
  isLoading: false
}

const productsReducer = createReducer(initialFriendsState, builder => {
  builder
    .addCase(setProducts, (state = initialFriendsState, action) => {
      return {
        ...state,
        products: action.payload.products
      }
    })
    .addCase(setIsLoading, (state = initialFriendsState, action) => {
      return {
        ...state,
        isLoading: action.payload.boolean
      }
    })
    .addDefaultCase((state = initialFriendsState) => {
      return state
    })
})

export default productsReducer
