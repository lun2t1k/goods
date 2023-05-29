import {useEffect} from 'react'
import {connect} from 'react-redux'
import {loadProducts} from '../../redux/ducks/products'
import Product from '../components/Product'
// import Loading from '../components/Loading'

const Products = ({loadProducts, products}) => {
  useEffect(() => {
    document.title = 'GOODS | Products'
  }, [])

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return (
    <>
      {/* {loading && <Loading />} */}
      <div className='products'>
        {products.map(product => (
          <Product key={`${product.id}`} product={product} />
        ))}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps, {loadProducts})(Products)
