import {HashRouter, Route, Routes} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import routes from './routes'
import store from './redux/store'
import Header from './views/components/Header'
import Main from './views/components/Main'
import MobileNavBar from './views/components/mobileNavbar/MobileNavBar'

// ! HashRouter is used for GitHub page
// ! Use BrowserRouter with basename={process.env.PUBLIC_URL} instead of it

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Header />
      <Main>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Main>
      <MobileNavBar />
      <ToastContainer limit={3} />
    </HashRouter>
  </Provider>
)

export default App
