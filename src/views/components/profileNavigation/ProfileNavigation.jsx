import {NavLink} from 'react-router-dom'
import links from './links'

const ProfileNavigation = () => (
  <nav className='profile-navigation'>
    <ul>
      {links.map(link => (
        <li key={link.label}>
          <NavLink to={link.url} className={link.className}>
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

export default ProfileNavigation
