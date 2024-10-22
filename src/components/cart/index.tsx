import React from 'react'

const CartPage = () => {
  return (
    <section className='container my-2 flex flex-col md:flex-row'>
      <aside className='flex-[2] border'>
        <h2>My Cart</h2>
        <div>Here cart items with prices, sru and details</div>
      </aside>
      <aside className='flex-1'>checkout details here</aside>
    </section>
  )
}

export default CartPage
