import React from 'react';

import './search-box.css';

const SearchBox = ({
    placeHolder
}) => {
    return (
        <div className="search-box-component">
            <div className="search-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        d="M21.653,19.594H20.569l-.384-.37a8.933,8.933,0,1,0-.961.961l.37.384v1.084L26.455,28.5,28.5,26.455Zm-8.233,0a6.175,6.175,0,1,1,6.175-6.175A6.167,6.167,0,0,1,13.419,19.594Z" 
                        transform="translate(-4.5 -4.5)" 
                        fill="#bababa" 
                    />
                </svg>
            </div>
            <input
                className="search-box-input"
                type="search"
                placeholder={placeHolder}
            />
        </div>
    )
}


export default SearchBox;