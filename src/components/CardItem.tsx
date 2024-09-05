import React, { useContext } from 'react'
import { IProductCart, IUserContext } from '../interface/types'
import { BiTrash } from 'react-icons/bi'
import Atropos from 'atropos/react'
import arrowLeft from '../assets/icons/arrowleft.svg'
import arrowRight from '../assets/icons/arrowright.svg'
import { UserContext } from '../context/UserContext'
import toast from 'react-hot-toast'

export const CardItem: React.FC<IProductCart> = ({ id, image, price, information, quantity, name }) => {
    const { deleteProduct, removeQuantity, addQuantity } = useContext(UserContext) as IUserContext

    const handleTrash = (): void => {
        deleteProduct(id)
        toast.success('Product removed', { className: 'toast' })
    }

    const handleRemoveQuantity = (): void => {
        if (quantity > 1) {
            removeQuantity(id)
        } else {
            deleteProduct(id)
        }
    }

    const handleAddQuantity = (): void => {
        addQuantity(id)
    }

    return (
        <li className='item'>
            <button aria-label='Delete item' className='item_trash' onClick={handleTrash}>
                <BiTrash aria-hidden='true' />
            </button>
            <Atropos>
                <img src={image} alt={name} className='item_img' />
            </Atropos>

            <div className='item_data'>
                <h3 className='item_data_name'>{name}</h3>
                <span className='item_data_description'>{information}</span>

                <div className='item_data_grid'>
                    <div className='item_data_grid_quantity'>
                        <button aria-label='Remove item' onClick={handleRemoveQuantity}>
                            <img src={arrowLeft} alt='' aria-hidden='true' />
                        </button>
                        <span>{quantity}</span>

                        <button aria-label='Add one' onClick={handleAddQuantity}>
                            <img src={arrowRight} alt='' aria-hidden='true' />
                        </button>
                    </div>
                    <span className='item_data_grid_price'>Rs {price}</span>
                </div>
            </div>
        </li>
    )
}
