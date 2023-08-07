import React from 'react';
import Cards from './Cards';
import pathCard1 from '../../assets/card1.avif';
import pathCard2 from '../../assets/card2.avif';
import pathCard3 from '../../assets/card3.avif';
import './CardsBelow.css'

const Index = () => {
    return (
        <div className="CardsBelow">
            <Cards path={pathCard1} text1="Order Online" text2="Stay home and order to your doorstep" />
            <Cards path={pathCard2} text1="Dining" text2="View the city's favourite dining venues" />
            <Cards path={pathCard3} text1="Nightlife and clubs" text2="Explore the city's top nightlife outlets" />
            
        </div>
    );
}

export default Index;
