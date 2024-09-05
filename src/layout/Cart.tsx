import React, { useContext, useState, useEffect } from 'react'
import { CardItem } from '../components/CardItem'
import { UserContext } from '../context/UserContext'
import { Toaster } from 'react-hot-toast'
import { type IUserContext } from '../interface/types'
import emptyCart from '../assets/images/empty_cart.svg'
import { Link } from 'react-router-dom'

interface ICartInfo {
  total: number
  subtotal: number
  shippingCost: number
}

export const Cart: React.FC = () => {
  const [cartInfo, setCartInfo] = useState<ICartInfo>({ total: 0, subtotal: 0, shippingCost: 0 })
  const { cart, cleanCart } = useContext(UserContext) as IUserContext

  let shippingCost = 30

  useEffect(() => {
    if (cart.length > 0) {
      let subtotal = 0
      cart.forEach((itemCart) => {
        const value = itemCart.quantity * itemCart.price
        subtotal = subtotal + value
      })

      if (subtotal > 100 && subtotal < 200) {
        shippingCost = 60
      } else if (subtotal > 200) {
        shippingCost = 90
      }

      setCartInfo({
        shippingCost,
        subtotal,
        total: subtotal + shippingCost
      })
    } else {
      setCartInfo({
        total: 0,
        subtotal: 0,
        shippingCost: 0
      })
    }
  }, [cart])

  return (
    <section className='cart'>
      <h2 className='subtitle'>
        My Cart
      </h2>
      <div className='cart_grid'>
        <ul className='cart_rid_items'>
          {
            cart.length > 0
              ? (
                  cart.map((product) => (
                    <CardItem key={product.id} id={product.id} image={product.image} information={product.information} name={product.name} price={product.price} quantity={product.quantity} />
                  ))
                )
              : (
                  <li className='cart_grid_items_empty'>
                    <img src={emptyCart} alt="empty Cart" className='cart_grid_items_empty-img' />
                    <h3 className='cart_grid_items_empty-title'>Empty Cart</h3>
                    <Link to={'/menu'} className='cart_grid_items_empty-link'>Explore menu</Link>
                  </li>
                )
          }
        </ul>
        <div className='cart_grid_info'>
          <h3 className='cart_grid_info_title'>
            Summary
          </h3>
          <div className='cart_grid_info_container'>
            <div className='cart_grid_info_container_div'>
              <span className='cart_grid_info_container_div-name'>
                Shipping Cost:
              </span>
              <span className='cart_grid_info_container_div-price'>
                Rs. {cartInfo.shippingCost}
              </span>
            </div>
            <div className='cart_grid_info_container_div'>
              <span className='cart_grid_info_container_div-name'>
                Subtotal:
              </span>
              <span className='cart_grid_info_container_div-price'>
                Rs. {cartInfo.subtotal}
              </span>
            </div>
          </div>
          <div className='cart_grid_info_div'>
            <span className='cart_grid_info_div-name'>
              Total:
            </span>
            <span className='cart_grid_info_div-price'>
              Rs. {cartInfo.total}
            </span>
          </div>
          <button className='cart_grid_info_button' onClick={() => { cleanCart() } }>Checkout</button>
        </div>
      </div>
      <Toaster
          position="top-right"
          reverseOrder={false}
        />
    </section>
  )
}