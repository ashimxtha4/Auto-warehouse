import { BsBoxFill } from 'react-icons/bs'
import { FaBoxOpen } from 'react-icons/fa6'
import { MdLocalShipping, MdHeadsetMic } from 'react-icons/md'

export const TRUST_ITEMS = [
  {
    id: '1',
    label: 'Certified Products',
    content: 'Trusted and verified quality',
    icon: <BsBoxFill size={24} />
  },
  {
    id: '2',
    label: 'Fast Delivery',
    content: 'Speedy shipping',
    icon: <MdLocalShipping size={24} />
  },
  {
    id: '3',
    label: '30 Days Return',
    content: 'Easy returns',
    icon: <FaBoxOpen size={24} />
  },
  {
    id: '4',
    label: 'Dedicated Support',
    content: 'We’re open 5 days a week',
    icon: <MdHeadsetMic size={24} />
  }
]
