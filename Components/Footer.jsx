import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer__container'>
        <a href="#">
           <FontAwesomeIcon icon={faTwitter} color="#000" />
        </a>
        <a href="#">
            <FontAwesomeIcon icon={faFacebook} color='#000' />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} color='#000' />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGithub} color='#000' />
        </a>
    </div>
  )
}

export default Footer