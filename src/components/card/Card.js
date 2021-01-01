import React from 'react';

import './card.css';


const Card = ({
    className='',
    children
}) => {
    return (
        <div className={ `card-component ${ className }` }>
            { children }
        </div>
    )
}

export default Card;