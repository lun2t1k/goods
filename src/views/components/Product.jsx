import {useCallback, useState} from 'react'
import {StarIcon, CommentIcon, HeartIcon} from './icons'
import {toastSuccess} from '../../utils/toast'
import cn from 'classnames'

const Product = ({product}) => {
  let likedProductsStorage = JSON.parse(localStorage.getItem('likedProducts'))
  let [likedProducts, setLikedProducts] = useState(likedProductsStorage)

  if (likedProductsStorage === null) {
    localStorage.setItem('likedProducts', JSON.stringify([]))
    likedProductsStorage = JSON.parse(localStorage.getItem('likedProducts'))
  }

  const handleLike = id => {
    likedProductsStorage = JSON.parse(localStorage.getItem('likedProducts'))
    
    if (likedProductsStorage.includes(id)) {
      likedProducts = likedProductsStorage.filter(i => i !== id)
      toastSuccess('Product removed from favorites.')
    } else {
      likedProducts = [...likedProductsStorage, id]
      toastSuccess('Product added to favorites.')
    }

    localStorage.setItem('likedProducts', JSON.stringify(likedProducts))
    setLikedProducts(likedProducts)
  }

  const likedItem = useCallback(() => {
    const productID = product.id
    const liked = id => id === productID
    return likedProductsStorage.some(liked)
  }, [likedProductsStorage, product.id])

  return (
    <div key={`${product.id}`} id={`${product.id}`} className='product'>
      <div>
        <a href='/' className='product-image'>
          <img src={product.image} alt={product.title} />
        </a>

        <div className='product-description'>
          <div className='product-price'>${product.price}</div>

          <a href='/' className='product-title'>
            {product.title}
          </a>

          <div className='product-rating'>
            <div
              className={cn('product-rate', {
                'product-rate--good': product.rating.rate > 4 || false,
                'product-rate--bad': product.rating.rate < 3 || false,
              })}
            >
              <StarIcon />
              <span>{product.rating.rate || '--'}</span>
            </div>

            <div className='product-reviews'>
              <CommentIcon />
              <span>{product.rating.count || '---'}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button>Add to cart</button>
      </div>

      <button className={cn('product-like', {
        'product-like--liked': likedItem()
      })} onClick={() => handleLike(product.id)}>
        <HeartIcon />
      </button>
    </div>
  )
}

export default Product
