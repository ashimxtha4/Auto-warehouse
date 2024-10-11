export type NavItemsProps = {
    key: string
    label: string
    href: string
    links: {
      link: string
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
      links: [
        {
          link: 'Windscreens',
          href: '/shop/windscreens'
        },
        {
          link: 'Body Side Glass',
          href: '/shop/body-side-glass'
        },
        {
          link: 'Rear Windows',
          href: '/shop/rear-windows'
        }
      ]
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
          link: 'Online Shop - Pick up(Same Day)',
          href: '/online-shop'
        },
        {
          link: 'ADAS Calibration',
          href: '/adas-calibration'
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
  