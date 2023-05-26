import {Route, Routes} from 'react-router-dom'
import './App.css';
import useProducts from './useProducts'
import Header from './layout/components/header/Header'
import Main from './layout/components/Main'
import Loading from './layout/components/loading/Loading'
import Home from './layout/pages/Home'
import Products from './layout/pages/Products'
import About from './layout/pages/About'
import ContactUs from './layout/pages/ContactUs'
import Dashboard from './layout/pages/Dashboard'

const App = () => {
  const {products, loading} = useProducts()

  return (
    <>
      <Header />
      <Main>
        {loading && <Loading />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products products={products} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
