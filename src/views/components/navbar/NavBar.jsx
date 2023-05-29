import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {MenuIcon, CloseIcon} from '../icons'
import cn from 'classnames'
import links from './links'

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
    if (!menuIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  window.addEventListener('resize', () => {
    setMenuIsOpen(false)
    document.body.style.overflow = ''
  })

  return (
    <nav>
      <button className='nav-menu' onClick={toggleMenu}>
        <MenuIcon menuIsOpen={menuIsOpen} />
        <CloseIcon menuIsOpen={menuIsOpen} />
      </button>

      <ul className={cn('nav-list', menuIsOpen && 'nav-list--opened')}>
        {links.map(link => (
          <li key={link.label}>
            <NavLink to={link.url} className='nav-link' onClick={toggleMenu}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
