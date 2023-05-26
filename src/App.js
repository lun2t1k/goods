import {HashRouter, Route, Routes} from 'react-router-dom'
import Header from './layout/components/Header'
import Main from './layout/components/Main'
import Home from './layout/pages/Home'
import Products from './layout/pages/Products'
import About from './layout/pages/About'
import ContactUs from './layout/pages/ContactUs'
import Dashboard from './layout/pages/Dashboard'

// ! HashRouter is used for GitHub page
// ! Use BrowserRouter with basename={process.env.PUBLIC_URL} instead of it

const App = () => (
  <HashRouter>
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
  </HashRouter>
)

export default App
