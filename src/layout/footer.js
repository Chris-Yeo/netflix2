import React from 'react';

import Logo from './logo';
import './footer.css';
import imageLogo from '../logo.svg'


const Footer = () => {

    const authorImages = {
        width: '150px',
        height: '80px'
    }
    return (
        <div className="footer">
            <div className="icons">
                <div className="follow">
                    <p>FOLLOW @impactbyte</p>
                </div>
                <div className="icons">
                    <i className="fab fa-facebook-square fa-2x icon"></i>
                        <i className="fab fa-twitter-square fa-2x icon"></i>
                        <i className="fab fa-instagram-square fa-2x icon"></i>
                        <i className="fab fa-youtube-square fa-2x icon"></i>
                        <i className="fab fa-linkedin fa-2x icon"></i>
                        <i className="fas fa-podcast fa-2x icon"></i>
                </div>
            </div>
            <div className="logoAndTerms">
                <div className="smallLogo">
                    <Logo logo={imageLogo} styles={authorImages}/>
                </div>
                <div className="terms">
                    <p className="impactbyte">Impactbyte.com</p>
                    <p className="term">Privacy</p>
                    <p className="term">Cookie Preferences</p>
                    <p className="term">Help Center</p>
                </div>
            </div>
        </div>
    );
}

export default Footer