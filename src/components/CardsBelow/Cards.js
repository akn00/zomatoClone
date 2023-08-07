import React from 'react';
import './Cards.css'
const Cards = ({ path, text1, text2 }) => {
    return (
        <div className='card'>
            <img src={path} alt="Card" />
            <div className="cardText">
                <p className="title">{text1}</p>
                <p className="subtitle">{text2}</p>
            </div>
        </div>
    );
}

export default Cards;
