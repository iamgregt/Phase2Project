import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out These Customer Reviews!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/house1.jpg'
              text='"Jamaal was timely and made the experience very pleasant!"'
              label='Review'
              path='/services'
            />
            <CardItem
              src='images/house2.jpg'
              text='"Just, wow! Thank you HomeShine901! Great service and very professional."'
              label='Review'
              path='/services'
            />
          </ul>
      <h1>What We Offer</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/driveway.jpeg'
              text='Sidewalks and driveways are among the first things that people notice when coming to your house.'
              label='Driveway Cleaning'
              path='/services'
            />
            <CardItem
              src='images/roof.jpeg'
              text='When washing your roof it is important that it is done right by a trained and experienced professional with the right equipment.'
              label='Roof Cleaning'
              path='/products'
            />
            <CardItem
              src='images/patio.jpeg'
              text='With use, patios can easily accumulate dirt, debris and grime and leaving it there could be very unsightly.'
              label='Patio Cleaning'
              path='/sign-up'
            />
          </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;