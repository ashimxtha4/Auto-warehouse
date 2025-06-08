import { create } from 'zustand'
import { productProps } from '@/services/api/api-service/product/product-list'
import toast from 'react-hot-toast'

export interface CartItemProps extends productProps {
  quantity: number
}

interface CartState {
  cart: CartItemProps[] | null
  cartTotal: number
  loadCartFromLocalStorage: () => void
  addToCart: (item: productProps) => void
  removeFromCart: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  calculateCartTotal: () => void
  clearCart: () => void
}

export const useCartStore = create<CartState>(set => ({
  cart: null,
  cartTotal: 0,
  loadCartFromLocalStorage: () => {
    if (typeof window !== 'undefined') {
      const cartData = localStorage.getItem('cart')
      if (cartData) {
        const cartArray = JSON.parse(cartData) as CartItemProps[]
        set({ cart: cartArray })
        set(state => ({
          cartTotal:
            state.cart?.reduce(
              (total, item) =>
                total + (Number(item.price) * item.quantity || 0),
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

        const updatedCart = state.cart
          ? [...state.cart, { ...item, quantity: 1 }]
          : [{ ...item, quantity: 1 }]
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        toast.success('Product added to cart Successfully!')

        return {
          cart: updatedCart,
          cartTotal:
            updatedCart.reduce(
              (total, item) =>
                total + (Number(item.price) * item.quantity || 0),
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
      toast.success('Product removed from cart')

      return {
        cart: updatedCart,
        cartTotal:
          updatedCart?.reduce(
            (total, item) => total + (Number(item.price) * item.quantity || 0),
            0
          ) || 0
      }
    })
  },
  increaseQuantity: (id: number) => {
    set(state => {
      const updatedCart =
        state.cart?.map(item => {
          if (item.id === id && item.quantity < 5) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        }) || null
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return {
        cart: updatedCart,
        cartTotal:
          updatedCart?.reduce(
            (total, item) => total + (Number(item.price) * item.quantity || 0),
            0
          ) || 0
      }
    })
  },
  decreaseQuantity: (id: number) => {
    set(state => {
      const updatedCart =
        state.cart?.map(item => {
          if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }
          }
          return item
        }) || null
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return {
        cart: updatedCart,
        cartTotal:
          updatedCart?.reduce(
            (total, item) => total + (Number(item.price) * item.quantity || 0),
            0
          ) || 0
      }
    })
  },
  calculateCartTotal: () => {
    set(state => ({
      cartTotal:
        state.cart?.reduce(
          (total, item) => total + (Number(item.price) * item.quantity || 0),
          0
        ) || 0
    }))
  },
  clearCart: () => {
    set(() => {
      localStorage.removeItem('cart')
      return { cart: [], cartTotal: 0 }
    })
  }
}))
