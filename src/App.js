import {Route, Routes} from 'react-router-dom'
import Header from './layout/components/Header'
import Main from './layout/components/Main'
import Home from './layout/pages/Home'
import Products from './layout/pages/Products'
import About from './layout/pages/About'
import ContactUs from './layout/pages/ContactUs'
import Dashboard from './layout/pages/Dashboard'

const App = () => (
  <>
    <Header />
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Main>
  </>
)

export default App
