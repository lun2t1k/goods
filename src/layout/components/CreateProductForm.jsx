import {useState} from 'react'
import axios from 'axios'

const CreateProductForm = ({onCreate}) => {
  const [value, setValue] = useState('')


  
  const [error, setError] = useState('')

  const handleInputChange = (event) => {
    setValue(event.currentTarget.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (value.trim().length === 0) {
      setError('Please enter a product title')
      return
    }

    const productData = {
      title: value,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: null,
        count: 1,
      },
    }

    try {
      const response = await axios.post(
        'https://fakestoreapi.com/products',
        productData
      )
      onCreate(response.data)
    } catch (error) {}
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        onChange={handleInputChange}
        className=''
      />
      <input type='number' name='' id='' />
      <input type='text' />
      <input type='file' name='' id='' />
      <input type='text' />
      {error && <p className='error'>{error}</p>}
      <button type='submit'>Add</button>
    </form>
  )
}

export default CreateProductForm
