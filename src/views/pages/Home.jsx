import {useEffect} from 'react'

const Home = () => {
  useEffect(() => {
    document.title = 'GOODS | Home'
  }, [])

  return <div>Home Page</div>
}

export default Home
