import {swalError} from '../../../utils/swal'
import {setProducts, setIsLoading} from './actions'
import productsAPI from '../../../api/products'

export const loadProducts = () => dispatch => {
  dispatch(setIsLoading(true))
  productsAPI.requestProducts()
  .then(response => {
    if (response.status === 200) {
        dispatch(setIsLoading(false))
        dispatch(setProducts(response.data))
      }
    })
    .catch(error => {
      swalError(error)
    })
}
