import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {FiUserPlus} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {   
    const [activeNav, setActiveNav] = useState('#')
    return (
    <nav> 
        <a href="#" onClick={() =>setActiveNav('#')} className={activeNav == '#' ? 'active' : ''}><BiHomeHeart/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav == '#about' ? 'active' : ''}><FiUserPlus/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav == '#experience' ? 'active' : ''}><BiBook/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav == '#services' ? 'active' : ''}><RiServiceLine/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav == '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav