import {useEffect} from 'react'

const ContactUs = () => {
  useEffect(() => {
    document.title = 'GOODS | Contact Us'
  }, [])

  return (
    <div>ContactUs</div>
  )
}

export default ContactUs