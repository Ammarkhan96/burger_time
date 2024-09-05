import React from 'react'
import burger from '../assets/burger/burger5.png'
import Atropos from 'atropos/react'
import { OurProducts } from '../layout/OurProducts'
import { Menu } from './Menu'

export const Home: React.FC = () => {
  return (
    <>
      <div className='home'>
        <div className='home__info'>
          <h1 className='home__info__title'>
            The <span>Fastest Food</span>, For <span>Instant Hunger</span>
          </h1>
          <p className='home__info__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam delectus sed, vel quaerat, libero nesciunt debitis, architecto repudiandae accusamus aut exercitationem nisi non doloribus! Temporibus officia architecto reiciendis blanditiis.
          </p>
          <a href='#' className='home__info__cta'>
            Order Now
          </a>
        </div>
        <div className='home__image'>
          <Atropos>
            <img src={burger} alt="Burger Burger Time" loading='lazy' className='home__image-img'/>
          </Atropos>
          <div className='home__image-effect' />
        </div>
      </div>
      <OurProducts />
      <Menu />
    </>
  )
}
