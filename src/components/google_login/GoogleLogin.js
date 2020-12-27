import React from 'react';
import './google_login.css';

import googleLogo from '../../assets/google-logo.png';

const GoogleLogin = () => {
    return (
        <div className="google-login">
            <div className="google-logo-container">
                <img className="google-logo" src={ googleLogo } alt="Google Logo"/>
            </div>
            

            <span className="google-login-text">Sign in with Google</span>
        </div>
    );
}

export default GoogleLogin;