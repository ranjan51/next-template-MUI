// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Home',
    path: '/home',
    icon: 'mdi:home-outline'
  },
  {
    title: 'Ticket',
    path: '/second-page',
    icon: 'mdi:email-outline'
  },
  {
    path: '/acl',
    action: 'read',
    subject: 'acl-page',
    title: 'Access Control',
    icon: 'mdi:shield-outline'
  },
  {
    icon: 'mdi:account-cog-outline',
    title: 'Account Settings',
    children: [
      {
        title: 'Account',
        path: '/pages/account-settings/account'
      },
      {
        title: 'Security',
        path: '/pages/account-settings/security'
      }
    ]
  }
]

export default navigation
