import { create } from 'zustand'
import { productProps } from '@/services/api/api-service/product/product-list'
import toast from 'react-hot-toast'

interface CartState {
  cart: productProps[] | null
  cartTotal: number
  loadCartFromLocalStorage: () => void
  addToCart: (item: productProps) => void
  removeFromCart: (id: number) => void
  calculateCartTotal: () => void
}

export const useCartStore = create<CartState>(set => ({
  cart: null,
  cartTotal: 0,
  loadCartFromLocalStorage: () => {
    if (typeof window !== 'undefined') {
      const cartData = localStorage.getItem('cart')
      if (cartData) {
        const cartArray = JSON.parse(cartData) as productProps[]
        set({ cart: cartArray })
        set(state => ({
          cartTotal:
            state.cart?.reduce(
              (total, item) => total + (Number(item.price) || 0),
              0
            ) || 0
        }))
      } else {
        set({ cart: null, cartTotal: 0 })
      }
    }
  },
  addToCart: (item: productProps) => {
    setTimeout(() => {
      set(state => {
        const existingItem = state.cart?.find(
          cartItem => cartItem.id === item.id
        )
        if (existingItem) {
          toast.error('Product is already in the cart')
          return { ...state, isLoading: false }
        }

        const updatedCart = state.cart ? [...state.cart, item] : [item]
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        toast.success('Product added to cart Successfully!')

        return {
          cart: updatedCart,
          cartTotal:
            updatedCart.reduce(
              (total, item) => total + (Number(item.price) || 0),
              0
            ) || 0,
          isLoading: false
        }
      })
    }, 1000)
  },
  removeFromCart: (id: number) => {
    set(state => {
      const updatedCart = state.cart?.filter(item => item.id !== id) || null
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return {
        cart: updatedCart,
        cartTotal:
          updatedCart?.reduce(
            (total, item) => total + (Number(item.price) || 0),
            0
          ) || 0
      }
    })
  },
  calculateCartTotal: () => {
    set(state => ({
      cartTotal:
        state.cart?.reduce((total, item) => total + (Number(item.price) || 0), 0) || 0
    }))
  }
}))
