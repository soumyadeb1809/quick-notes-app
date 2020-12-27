import React from 'react';
import './banner.css';

// Import assets
import logo from '../../assets/logo.png';

const Banner = () => {
    return (
        <div className="banner">
            <img className="banner-logo mar-right-16" src={ logo } alt="Logo"/>
            <div className="banner-name">
                <span className="banner-name-text">Quick Notes</span>
            </div>
        </div>
    );
}

export default Banner;