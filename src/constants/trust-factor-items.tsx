import { BsBoxFill } from "react-icons/bs";
import { FaBoxOpen, FaPhoneVolume } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";

export const TRUST_ITEMS = [
  {
    id: '1',
    label: 'Original Products',
    content: 'Only parts from trusted brands',
    icon: <BsBoxFill size={24} />
  },
  {
    id: '2',
    label: 'Fast Delivery',
    content: 'Free Shipping over $599',
    icon: <MdLocalShipping size={24} />
  },
  {
    id: '3',
    label: '30 Days Return',
    content: '30 days open purchase',
    icon: <FaBoxOpen size={24} />
  },
  {
    id: '4',
    label: 'Dedicated Support',
    content: 'We’re open all week',
    icon: <FaPhoneVolume size={24} />
  }
]
