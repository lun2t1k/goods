import {NavLink} from 'react-router-dom'
import {DefaultBellIcon, NotifyBellIcon, DisabledBellIcon} from './BellIcon'

const Notifications = () => {
  return (
    <NavLink to='/notifications' className='notifications'>
      <DefaultBellIcon />
    </NavLink>
  )
}

export default Notifications
