import { CATEGORY_ITEMS } from './vehicle-parts-category'

export type NavItemsProps = {
  key: string
  label: string
  href: string
  links: {
    label: string
    href: string
  }[]
}

export const NAVBAR_ITEMS: NavItemsProps[] = [
  {
    key: '1',
    label: 'HOME',
    href: '/',
    links: []
  },
  {
    key: '2',
    label: 'OUR SHOP',
    href: '/shop',
    links: CATEGORY_ITEMS
  },
  {
    key: '3',
    label: 'ABOUT US',
    href: '/about',
    links: []
  },
  {
    key: '4',
    label: 'OUR SERVICES',
    href: '/services',
    links: [
      {
        label: 'Online Shop - Pick up(Same Day)',
        href: '/services/online-shop'
      },
      {
        label: 'ADAS Calibration',
        href: '/services/adas-calibration'
      }
    ]
  },
  {
    key: '5',
    label: 'REVIEWS',
    href: '/reviews',
    links: []
  },
  {
    key: '6',
    label: 'FAQS',
    href: '/faqs',
    links: []
  }
]
