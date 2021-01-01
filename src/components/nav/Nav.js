import React from 'react';
import Card from '../card/Card';
import Banner from '../banner/Banner';
import SearchBox from '../search-box/SearchBox';
import UserInfo from '../user-info/UserInfo';

import './nav.css';


const Nav = () => {
    return(
        <div className="nav-component">
            <Card className="nav-card-component">
                <div className="nav-banner-container">
                    <Banner />
                </div>
                <div className="nav-search-box-container">
                    <SearchBox 
                        placeHolder="Search notes..."
                    />
                </div>
                <div className="nav-user-info-container">
                    <UserInfo />
                </div>
            </Card>
        </div>
    )
}

export default Nav;