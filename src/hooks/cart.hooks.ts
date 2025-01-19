import { usePostAddToCart } from '@/services/api/api-service/cart/add-to-cart'
import { usePostCartCheckout } from '@/services/api/api-service/cart/cart-checkout'
import { useGetCartList } from '@/services/api/api-service/cart/cart-list'
import { usePostRemoveFromCart } from '@/services/api/api-service/cart/remove-from-cart'
import { useGetCustomerDetails } from '@/services/api/api-service/customer/customer-detail'
import { useCartStore } from '@/slice/cart-slice'
import { useUserStore } from '@/slice/user-slice'
import { isTokenExpired } from '@/utils/is-token-expired'
import { zodResolver } from '@hookform/resolvers/zod'
import { isAxiosError } from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

const checkoutSchema = z.object({
  name: z.string({ required_error: 'Please enter your name.' }),
  email: z
    .string({ required_error: 'Please enter your email.' })
    .email({ message: 'Invalid email.' }),
  phone: z.string({ required_error: 'Please enter your phone number.' }),
  post_code: z.string({ required_error: 'Postal Code is required.' }),
  address: z.string({ required_error: 'Please enter your address.' }),
  city: z.string().optional(),
  note: z.string().optional()
})

export type TCheckoutSchemaProps = z.infer<typeof checkoutSchema>

export const useMyCart = () => {
  const [cartIds, setCartIds] = useState<number[] | undefined>()
  const router = useRouter()
  const pathname = usePathname()
  const errorMessage = 'Please login to proceed to checkout'
  const cartTotal = useCartStore(state => state.cartTotal)
  const cartProducts = useCartStore(state => state.cart)

  const { id, uuid, loadUserFromLocalStorage } = useUserStore()

  const { data: cartData, isLoading } = useGetCartList(uuid, id)

  const { mutateAsync: addToCartMutateAsync } = usePostAddToCart()

  const { mutateAsync: removeFromCartAsync, isPending } =
    usePostRemoveFromCart()

  const { mutateAsync: cartCheckoutAsync, isPending: checkoutPending } =
    usePostCartCheckout()

  useEffect(() => {
    loadUserFromLocalStorage()
  }, [loadUserFromLocalStorage])

  // #region Add to cart
  const handleAddToCart = async (productId: number) => {
    try {
      if (productId && id !== -1 && uuid !== '') {
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

  // #region Proceed to checkout
  const handleProceedToCheckout = () => {
    const token = localStorage.getItem('token')
    if (!cartProducts?.length) {
      toast.error('Please add items to cart to proceed to checkout')
      return
    }
    if (!token) {
      toast.error(errorMessage)
      router.push(`/login?from=${pathname}`, { scroll: true })
    }
    if (token) {
      if (isTokenExpired(token)) {
        localStorage.removeItem('token')
        toast.error(errorMessage)
        router.push(`/login?from=${pathname}`, { scroll: true })
      } else {
        router.push('/cart/checkout')
      }
    }
    cartProducts?.map(item => handleAddToCart(item.id))
  }

  // #region Remove from cart
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

  // #region Procced with payment || handleCartCheckout

  useEffect(() => {
    if (cartData?.data) {
      setCartIds(cartData.data.data.map(item => item.id))
    }
  }, [cartData?.data, id, uuid])

  const form = useForm<Partial<TCheckoutSchemaProps>>({
    resolver: zodResolver(checkoutSchema)
  })

  const { data: userData } = useGetCustomerDetails(uuid, id)

  useEffect(() => {
    if (userData?.data) {
      form.setValue(
        'name',
        userData.data.first_name + ' ' + userData.data.last_name
      )
      form.setValue('email', userData.data.email)
      form.setValue('phone', userData.data.phone || '')
      form.setValue('address', userData.data.address || '')
    }
  }, [userData?.data])

  const shippingCost = cartIds?.length ? 10 : 0

  const handleCartCheckout = async (data: Partial<TCheckoutSchemaProps>) => {
    if (!cartIds?.length) {
      toast.error('Please add items to cart to proceed with payment')
      return
    }

    try {
      await cartCheckoutAsync({
        uid: uuid,
        customer_id: id,
        cart_id: cartIds as number[],
        data
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
    products: cartData?.data.data,
    isLoading,
    handleRemoveFromCart,
    isPending,
    checkoutPending,
    handleCartCheckout,
    handleAddToCart,
    handleProceedToCheckout,
    cartTotal,
    router,
    form,
    shippingCost
  }
}
