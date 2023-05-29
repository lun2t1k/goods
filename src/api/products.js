import {instance} from './axios'

const productsAPI = {
  requestProducts() {
    return instance.get('products')
  }
}

export default productsAPI
