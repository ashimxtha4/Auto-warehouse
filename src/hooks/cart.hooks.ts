import { usePostCartCheckout } from '@/services/api/api-service/cart/cart-checkout'
import { useGetCartList } from '@/services/api/api-service/cart/cart-list'
import { usePostRemoveFromCart } from '@/services/api/api-service/cart/remove-from-cart'
import { useUserStore } from '@/slice/user-slice'
import { isAxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const useMyCart = () => {
  const router = useRouter()
  const [total, setTotal] = useState(0)
  const { id, uuid, loadUserFromLocalStorage } = useUserStore()

  useEffect(() => {
    loadUserFromLocalStorage()
  }, [loadUserFromLocalStorage])

  const { data, isLoading, isSuccess } = useGetCartList(uuid, id)

  const { mutateAsync: removeFromCartAsync, isPending } =
    usePostRemoveFromCart()

  const { mutateAsync: cartCheckoutAsync, isPending: checkoutPending } =
    usePostCartCheckout()

  useEffect(() => {
    if (Array.isArray(data?.data.data)) {
      const newTotal = data.data.data.reduce(
        (acc, product) => acc + parseInt(product?.product_price) * 1,
        0
      )
      setTotal(newTotal as number)
    }
  }, [data?.data.data, isSuccess])

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

  const cartIds = data?.data.data.map(item => item.id)

  const handleCartCheckout = async () => {
    try {
      await cartCheckoutAsync({
        uid: uuid,
        customer_id: id,
        cart_id: cartIds as number[]
      })
      router.push('/orders', { scroll: true })
      toast.success('Your order has been placed successfully!')
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.message)
      }
      toast.error('Something went wrong! Try again later')
    }
  }

  return {
    total,
    products: data?.data.data,
    isLoading,
    handleRemoveFromCart,
    isPending,
    checkoutPending,
    handleCartCheckout,
  }
}
