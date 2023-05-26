import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import cn from 'classnames'
import links from './links'

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen)
  window.addEventListener('resize', () => setMenuIsOpen(false))

  return (
    <nav>
      <button className='nav-menu' onClick={toggleMenu}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className={cn('nav-menu__open', menuIsOpen && 'nav-menu__open--hidden')}
        >
          <path
            fillRule='evenodd'
            d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
            clipRule='evenodd'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className={cn('nav-menu__close', menuIsOpen && 'nav-menu__close--active')}
        >
          <path
            fillRule='evenodd'
            d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
            clipRule='evenodd'
          />
        </svg>
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

export default Nav
