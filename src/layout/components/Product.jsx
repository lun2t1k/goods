import cn from 'classnames'

const Product = ({product}) => {
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
              <span>{product.rating.rate || '--'}</span>
            </div>

            <div className='product-reviews'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z'
                  clipRule='evenodd'
                />
              </svg>
              <span>{product.rating.count || '---'}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button>Add to cart</button>
      </div>

      <button className='product-like'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
        </svg>
      </button>
    </div>
  )
}

export default Product
