import {NavLink} from 'react-router-dom'
import Nav from './nav/Nav'

const Header = () => (
  <header className='header'>
    <div className='container'>
      <div className='header-wrap'>
        <NavLink to='/' className='header-logo'>
          <h1>GOODS</h1>
        </NavLink>
        <Nav />
      </div>
    </div>
  </header>
)

export default Header
