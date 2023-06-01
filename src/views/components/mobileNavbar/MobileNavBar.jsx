import {NavLink} from 'react-router-dom'
import links from './links'

const MobileNavBar = () => (
  <nav className='mobile-navbar'>
    <ul>
      {links.map(link => (
        <li key={link.label}>
          <NavLink
            to={link.url}
            className={({isActive}) => (isActive ? 'active-page' : '')}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

export default MobileNavBar
