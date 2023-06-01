import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {MenuIcon, CloseIcon} from '../icons'
import cn from 'classnames'
import links from './links'

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => {
    if (window.matchMedia('(max-width: 991px)').matches) {
      setMenuIsOpen(!menuIsOpen)
      if (!menuIsOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  }

  window.addEventListener('resize', () => {
    setMenuIsOpen(false)
    document.body.style.overflow = ''
  })

  return (
    <nav className='navbar'>
      <button className='navbar-menu' onClick={toggleMenu}>
        <MenuIcon menuIsOpen={menuIsOpen} />
        <CloseIcon menuIsOpen={menuIsOpen} />
      </button>

      <ul className={cn('navbar-list', menuIsOpen && 'navbar-list--opened')}>
        {links.map(link => (
          <li key={link.label}>
            <NavLink to={link.url} className='navbar-link' onClick={toggleMenu}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
