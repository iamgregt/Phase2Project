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
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/house2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
      <h1>What We Offer</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/driveway.jpeg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Driveway Cleaning'
              path='/services'
            />
            <CardItem
              src='images/roof.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Roof Cleaning'
              path='/products'
            />
            <CardItem
              src='images/patio.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
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