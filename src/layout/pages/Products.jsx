import cl from '../components/product/Product.module.css'
import Product from '../components/product/Product'


const Products = ({products}) => (
  <div className={cl.products}>
    {products.map(product => (
      <Product key={`${product.id}`} product={product} />
    ))}
  </div>
)

export default Products
