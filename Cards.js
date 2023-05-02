import React from 'react';
import '../styles/Cards.css'
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h2>HOT PRODUCTS!</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='assets/1.png'
              text='Womens full sleeve Black dress'
              label='Casual'
              path='/Product'
            />
            <CardItem
              src='assets/4.png'
              text='Womens Brown Suit pant'
              label='Casual'
              path='/Product'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;