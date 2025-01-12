import { usePostAddToCart } from '@/services/api/api-service/cart/add-to-cart'
import { usePostCartCheckout } from '@/services/api/api-service/cart/cart-checkout'
import { useGetCartList } from '@/services/api/api-service/cart/cart-list'
import { usePostRemoveFromCart } from '@/services/api/api-service/cart/remove-from-cart'
import { useCartStore } from '@/slice/cart-slice'
import { useUserStore } from '@/slice/user-slice'
import { isTokenExpired } from '@/utils/is-token-expired'
import { isAxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const useMyCart = () => {
  const router = useRouter()
  const [total, setTotal] = useState(0)
  const errorMessage = 'Please login to proceed to checkout'
  const cartTotal = useCartStore(state => state.cartTotal)
  const cartProducts = useCartStore(state => state.cart)

  const { id, uuid, loadUserFromLocalStorage } = useUserStore()

  const { data: cartData, isLoading, isSuccess } = useGetCartList(uuid, id)

  const { mutateAsync: addToCartMutateAsync } = usePostAddToCart()

  const { mutateAsync: removeFromCartAsync, isPending } =
    usePostRemoveFromCart()

  const { mutateAsync: cartCheckoutAsync, isPending: checkoutPending } =
    usePostCartCheckout()

  useEffect(() => {
    loadUserFromLocalStorage()
  }, [loadUserFromLocalStorage])

  const handleAddToCart = async (productId: number) => {
    try {
      if (productId) {
        await addToCartMutateAsync({
          customer_id: id,
          uid: uuid,
          product_id: productId,
          quantity: 1
        })
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message)
      }
      toast.error('Something went wrong! Try again later!')
    }
  }

  const handleProceedToCheckout = () => {
    const token = localStorage.getItem('token')
    if (!cartProducts?.length) {
      toast.error('Please add items to cart to proceed to checkout')
      return
    }
    if (!token) {
      toast.error(errorMessage)
      router.push('/login')
    }
    if (token) {
      if (isTokenExpired(token)) {
        localStorage.removeItem('token')
        toast.error(errorMessage)
        router.push('/login', { scroll: true })
      } else {
        router.push('/cart/checkout')
      }
    }
    cartProducts?.map(item => handleAddToCart(item.id))
  }

  useEffect(() => {
    if (Array.isArray(cartData?.data.data)) {
      const newTotal = cartData.data.data.reduce(
        (acc, product) => acc + parseInt(product?.product_price) * 1,
        0
      )
      setTotal(newTotal as number)
    }
  }, [cartData?.data.data, isSuccess])

  const handleRemoveFromCart = async (
    id: number,
    customer_id: number,
    product_id: number
  ) => {
    try {
      await removeFromCartAsync({
        cart_id: id,
        customer_id: customer_id,
        product_id: product_id,
        quantity: 1,
        status: 'Cancelled',
        uid: uuid
      })
      toast.success('Product removed from cart successfully!')
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message)
      }
      toast.error('Something went wrong! Try again later')
    }
  }

  const cartIds = cartData?.data.data.map(item => item.id)

  const handleCartCheckout = async () => {
    try {
      await cartCheckoutAsync({
        uid: uuid,
        customer_id: id,
        cart_id: cartIds as number[]
      })
      localStorage.removeItem('cart')
      toast.success('Your order has been placed successfully!')
      router.push('/orders', { scroll: true })
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message)
      }
      toast.error('Something went wrong! Try again later')
    }
  }

  return {
    total,
    products: cartData?.data.data,
    isLoading,
    handleRemoveFromCart,
    isPending,
    checkoutPending,
    handleCartCheckout,
    handleAddToCart,
    handleProceedToCheckout,
    cartTotal,
    router
  }
}
