import axios from 'axios'
import {useCallback, useEffect, useState} from 'react'
import Swal from 'sweetalert2'
import Product from '../components/Product'
import Loading from '../components/Loading'

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


const Products = () => {
  const {products, loading} = useProducts()

  return (
    <>
      {loading && <Loading />}
      <div className='products'>
        {products.map(product => (
          <Product key={`${product.id}`} product={product} />
        ))}
      </div>
    </>
  )
}


export default Products
