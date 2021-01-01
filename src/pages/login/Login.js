import React from 'react';

import './login.css';

import Banner from '../../components/banner/Banner';
import GoogleLogin from '../../components/google_login/GoogleLogin';

import treeImg from '../../assets/tree.png';
import quickImg from '../../assets/quick.png';
import cloudsImg from '../../assets/clouds.png';


const Login = () => {
    return (
        <div className="login-page">
            <header className="login-header">
                <Banner />
            </header>
            <main className="login-main">
                <div className="login-welcome mar-bottom-64">
                    <h1 className="login-welcome-text fw-bold">Welcome back!</h1>
                </div>
                <div className="login-instruction mar-bottom-64">
                    <h2 className="login-instruction">
                        Please sign in to your account <br/> 
                        to access your notes and capture new ones.
                    </h2>
                </div>
                <div className="login-btn-container">
                    <GoogleLogin />
                </div>
            </main>

            <div className="tree-img-container">
                <img className="tree-img" src={ treeImg } alt="Tree"/>
            </div>

            <div className="clouds-img-container">
                <img className="clouds-img" src={ cloudsImg } alt="Clouds"/>
            </div>

            <div className="quick-img-container">
                <img className="quick-img" src={ quickImg } alt="Quick"/>
            </div>

        </div>
    );
}

export default Login;