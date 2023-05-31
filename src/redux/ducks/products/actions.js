import {createAction} from '@reduxjs/toolkit'
import * as types from './types'

export const setProducts = createAction(types.SET_PRODUCTS, function prepare(products) {
  return {
    payload: {products}
  }
})

export const setIsLoading = createAction(types.SET_IS_LOADING, function prepare(boolean) {
  return {
    payload: {boolean}
  }
})
