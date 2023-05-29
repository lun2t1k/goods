import {swalError} from '../../../utils/swal'
import {setProducts} from './actions'
import productsAPI from '../../../api/products'

export const loadProducts = () => dispatch => {
  productsAPI.requestProducts()
    .then(response => {
      if (response.status === 200) {
        dispatch(setProducts(response.data))
      }
    })
    .catch(error => {
      swalError(error)
    })
}
