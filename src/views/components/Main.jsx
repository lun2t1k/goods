import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Main = ({children}) => (
  <main className='main'>
    <div className='container'>
      {children}
    </div>
    <ToastContainer />
  </main>
)

export default Main
