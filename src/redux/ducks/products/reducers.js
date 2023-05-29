import {createReducer} from '@reduxjs/toolkit'
import {setProducts} from './actions'

const initialFriendsState = {
  products: []
}

const productsReducer = createReducer(initialFriendsState, builder => {
  builder
    .addCase(setProducts, (state = initialFriendsState, action) => {
      return {
        ...state,
        products: action.payload.products
      }
    })
    .addDefaultCase((state = initialFriendsState) => {
      return state
    })
})

export default productsReducer
