import Swal from 'sweetalert2'

export const swalError = error => {
  Swal.fire({
    title: 'Error!',
    text: error,
    icon: 'error',
    buttonsStyling: false,
    confirmButtonText: 'Ok',
  })
}
