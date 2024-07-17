import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

const Info = () => {
    return (
        <header className='info__container'>
            <div className='info__title'>
                <h3>Laura Smith</h3>
                <h4>Frontend Developer</h4>
                <p>laurasmith.website</p>
            </div>

            <div className='info__contact'>
                <button className='email'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Email</span>
                </button>
                <button className='linkedin'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>LinkedIn</span>
                </button>
            </div>

            <About />
            <Interests />
            <Footer />
        </header>
    )   
}

export default Info