import type { CartProductsProps } from '@/components/cart'
import { useEffect, useState } from 'react'

export const useMyCart = (cartProducts: CartProductsProps[]) => {
  const [products, setProducts] = useState<CartProductsProps[]>(cartProducts)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    )
    setTotal(newTotal)
  }, [products])

  const increaseQty = (id: number) => {
    setProducts(
      products.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    )
  }

  const decreaseQty = (id: number) => {
    setProducts(
      products.map(product =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    )
  }

  const removeProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
  }

  return {
    total,
    increaseQty,
    decreaseQty,
    removeProduct,
    products
  }
}
