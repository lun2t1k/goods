import {toast, Slide} from 'react-toastify'

export const toastSuccess = text => {
  toast.clearWaitingQueue()
  toast.success(text, {
    transition: Slide,
    theme: 'light',
    position: 'bottom-center',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
}
