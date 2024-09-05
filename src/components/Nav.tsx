import { Pivot } from 'hamburger-react'
import React from 'react'
import { NavLink } from 'react-router-dom'


interface INav {
    show: boolean
    setMenu: (show: React.SetStateAction<boolean>) => void
}

interface ILink{
    name: string
    to: string
}

const links: ILink[] = [
    {
        name: 'Home',
        to: '/'
    },
    {
        name: 'Menu',
        to: '/menu'
    },
    {
        name: 'Services',
        to: '/service'
    },
    {
        name: 'About Us',
        to: '/about'
    },
    {
        name: 'Contact Us',
        to: '/contact'
    }
]

export const Nav: React.FC<INav> = ({show, setMenu}) => {
  return (
    <nav className={show? 'nav nav-show' : 'nav'}>
        <ul className='nav_list'>
        {
          links.map((link, index) => (
            <li key={index} className='nav_list_item'>
              <NavLink to={link.to} className={({ isActive }) => isActive ? 'nav_list_item nav_list_item-active' : 'nav_list_item'}>
                {link.name}</NavLink>
            </li>
          ))
        }
        </ul>
        <div className='nav_button'>
            <Pivot toggle={setMenu} toggled={show} />
        </div>
    </nav>
  )
}
