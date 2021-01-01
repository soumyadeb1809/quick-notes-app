import React from 'react';

import './user-info.css';
import profilePic from "../../assets/profile-pic.png";


const UserInfo = ({
    profileImage = profilePic,
    name = "Soumya Deb",
    email = "soumyadeb1809@gmail.com"
}) => {
    return (
        <div className="user-info-component">
            <div className="user-info-img-container">
                <img 
                    className="user-info-img"
                    src={ profileImage } 
                    alt="Profile Picture"
                />
            </div>
            <div className="user-info-txt-container">
                <span className="user-info-name-txt">
                    { name }
                </span>
                <span className="user-info-email-txt">
                    { email }
                </span>
            </div>

            <div className="user-info-options-container">
                <button className="user-info-options-btn">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24"
                    >
                        <g transform="translate(-1835 -59)">
                            <g transform="translate(1835 59)" fill="none" stroke="#bababa" stroke-width="2">
                                <circle cx="12" cy="12" r="12" stroke="none"/>
                                <circle cx="12" cy="12" r="11" fill="none"/>
                            </g>
                            <path 
                                d="M-300.5-2944.5l-.5.5.5-.5-4.5-4.5,4.5,4.5,4.5-4.5-4.5,4.5.5.5Z" 
                                transform="translate(2147.5 3018.501)" 
                                fill="none" 
                                stroke="#bababa" 
                                stroke-width="2"
                            />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default UserInfo;