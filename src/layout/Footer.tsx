import React from 'react'
import { Logo } from '../components/Logo'
import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi'
import { SiYoutube } from 'react-icons/si'

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer_container'>
        <Logo classes='footer_container_logo logo' />
        <nav className='footer_container_nav'>
          <h2 className='footer_container_nav_title'>Information</h2>
          <ul className='footer_container_nav_list'>
            <li className='footer_container_nav_list_item'><a href="#">Contact Us</a></li>
            <li className='footer_container_nav_list_item'><a href="#">About Us</a></li>
            <li className='footer_container_nav_list_item'><a href="#">Services</a></li>
            <li className='footer_container_nav_list_item'><a href="#">Frequent questions</a></li>
          </ul>
        </nav>
      </div>
      <ul className='footer_social'>
        <li className='footer_social_item'><a href="#" aria-label='Go to ##'><BiLogoInstagram aria-hidden='true' /></a></li>
        <li className='footer_social_item'><a href="#" aria-label='Go to ##'><SiYoutube /></a></li>
        <li className='footer_social_item'><a href="#" aria-label='Go to ##'><BiLogoFacebook aria-hidden='true' /></a></li>
        <li className='footer_social_item'><a href="#" aria-label='Go to ##'><BiLogoTwitter aria-hidden='true' /></a></li>
      </ul>
      <p className='footer_copy'>&copy; 2024 Burger Time Restaurant</p>
      <p className='footer_development'>Development by <a href="https://github.com/Ammarkhan96" className='footer__development__cta' target='_blank' rel='noreferrer' >Ammar Khan</a></p>
    </footer>
  )
}