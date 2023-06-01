import {HeartIcon, UserCardIcon, ContactUsIcon, LogoutIcon, OctagonInfoIcon, WavyInfoIcon, ShieldInfoIcon, SettingsIcon, FolderIcon} from '../icons'

const links = [
  {
    icon: <UserCardIcon />,
    label: 'Account',
    url: '/account'
  },
  {
    icon: <FolderIcon />,
    label: 'Orders',
    url: '/orders'
  },
  {
    icon: <HeartIcon />,
    label: 'Favorites',
    url: '/favorites'
  },
  {
    icon: <SettingsIcon />,
    label: 'Settings',
    url: '/settings'
  },
  {
    icon: <ContactUsIcon />,
    label: 'Contact Us',
    url: '/contact-us'
  },
  {
    icon: <ShieldInfoIcon />,
    label: 'Privacy Policy',
    url: '/privacy-policy'
  },
  {
    icon: <WavyInfoIcon />,
    label: 'Cookies Policy',
    url: '/cookies-policy'
  },
  {
    icon: <OctagonInfoIcon />,
    label: 'Term of Use',
    url: '/term-of-use'
  },
  {
    icon: <LogoutIcon />,
    label: 'Log Out',
    url: '/log-out',
    className: 'logout'
  }
]

export default links
