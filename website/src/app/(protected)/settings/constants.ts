// import { Bars3Icon } from '@heroicons/react/20/solid'
import {
  BellIcon,
  CreditCardIcon,
  UserCircleIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline'

export const settingsNavigation = [
  { name: 'Account', href: '/settings', icon: UserCircleIcon, },
  { name: 'Video', href: '/settings/video', icon: PlayCircleIcon, },
  { name: 'Billing', href: '/settings/billing', icon: CreditCardIcon, },
  { name: 'Notifications', href: '/settings/notifications', icon: BellIcon, },
]