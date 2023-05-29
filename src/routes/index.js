// import {lazy} from 'react'
import Home from '../views/pages/Home'
import Products from '../views/pages/Products'
import About from '../views/pages/About'
import ContactUs from '../views/pages/ContactUs'
import Dashboard from '../views/pages/Dashboard'

const routes = [
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/products',
    component: <Products />
  },
  {
    path: '/About',
    component: <About />
  },
  {
    path: '/contact-us',
    component: <ContactUs />
  },
  {
    path: '/dashboard',
    component: <Dashboard />
  }
]

export default routes
