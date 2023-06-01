import {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Notifications from './notifications/Notifications'

const Header = () => {
  useEffect(() => {
    const header = document.querySelector('.header')
    let lastScroll = 0

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY

      if (currentScroll <= 0) {
        header.classList.remove('header--shown')
        return
      }

      if (currentScroll > lastScroll && !header.classList.contains('header--hidden')) {
        // Hide header when scrolling down
        header.classList.remove('header--shown')
        header.classList.add('header--hidden')
      } else if (currentScroll < lastScroll && header.classList.contains('header--hidden')) {
        // Show header when scrolling up
        header.classList.remove('header--hidden')
        header.classList.add('header--shown')
      }

      lastScroll = currentScroll
    })
  }, [])

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-wrap'>
          <NavLink to='/' className='header-logo'>
            <h1>GOODS</h1>
          </NavLink>
          <div className='header-actions'>
            <NavBar />
            <Notifications />
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header
