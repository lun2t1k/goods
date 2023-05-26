import cl from './Modal.module.css'

const Modal = ({children, title, closeModal}) => (
  <div className={cl.modal}>
    <div className={cl.modalWrap}>
      <div className={cl.modalContent}>
        <h3 className={cl.modalTitle}>{title}</h3>
        {children}
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  </div>
)

export default Modal
