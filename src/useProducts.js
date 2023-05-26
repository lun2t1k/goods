import axios from 'axios'
import {useCallback, useEffect, useState} from 'react'
import Swal from 'sweetalert2'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const addProduct = (product) => {
    setProducts([...products, product])
  }

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        'https://fakestoreapi.com/products'
      )
      setProducts(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error,
      })
    }
  }, [])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return {products, loading, addProduct}
}

export default useProducts
