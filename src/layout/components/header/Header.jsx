import {NavLink} from 'react-router-dom'
import cl from './Header.module.css'
import Navigation from '../navigation/Navigation'

const Header = () => (
  <header>
    <div className='container'>
      <div className={cl.headerWrap}>
        <NavLink to='/' className={cl.headerLogo}>
          <h1>GOODS</h1>
        </NavLink>
        <Navigation />
      </div>
    </div>
  </header>
)

export default Header
