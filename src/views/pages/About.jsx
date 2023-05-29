import {useEffect} from 'react'

const About = () => {
  useEffect(() => {
    document.title = 'GOODS | About'
  }, [])

  return (
    <div>About</div>
  )
}

export default About
