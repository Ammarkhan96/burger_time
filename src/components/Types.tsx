import React from 'react'
import { ProductType } from '../interface/types'


interface ITypes {
    image: string
    name: ProductType
    setType: (type: ProductType) => void
  }
export const Types:React.FC<ITypes> = ({image, name, setType}) => {
    const handleClick = ():void => {
        setType(name)
    }
  return (
    <button className='type' onClick={handleClick}>
        <span className='type_div'>
            <img src={image} alt={'Icon'+name} className='type_div_image' />
        </span>
        <span className='type_name'>{name}</span>
    </button>
  )
}
