import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaGooglePlus} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com" target="_blank"><FiInstagram/></a>
        <a href="https://google.com" target="_blank"><FaGooglePlus/></a>
 
    </div>
  )
}

export default HeaderSocials