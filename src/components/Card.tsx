import React, { useContext } from 'react'
import { type IProduct, type IProductCart, type IUserContext } from '../interface/types'
import { BiCartAdd } from 'react-icons/bi'
import toast from 'react-hot-toast'
import Atropos from 'atropos/react'
import { UserContext } from '../context/UserContext'

export const Card: React.FC<IProduct> = ({ id, image, name, price, information }) => {
  const { addCart } = useContext(UserContext) as IUserContext

  const handleAddProduct = (): void => {
    const newProduct: IProductCart = {
      id,
      image,
      name,
      price,
      information,
      quantity: 1
    }
    addCart(newProduct)
    toast.success('Added successfully', {
      className: 'toast'
    })
  }

  return (
    <div className='card'>
      <Atropos>
        <img src={image} alt={name} className='card__img' />
      </Atropos>
      <h3 className='card__name'>{name}</h3>
      <p className='card__info'>{information}</p>
      <div className='card__container'>
        <span className='card__container__price'>Rs. {price}</span>
        <button aria-label='Add to cart' className='card__container__button' onClick={handleAddProduct}>
          <BiCartAdd aria-hidden='true' />
        </button>
      </div>
    </div>
  )
}
