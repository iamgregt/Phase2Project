import React, {useState, useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const [photo, setPhoto] = useState(false)


  const showPhoto = () => {
    if(window.innerWidth <= 599) {
      setPhoto(true)
    } else {
      setPhoto(false)
    }
  }

  useEffect(() => {
    showPhoto()
  }, [])

  window.addEventListener('resize', showPhoto)




  return (
    <div className={photo ? 'hero-container-mobile' : 'hero-container' }>
      <video src='/videos/pressureWash.mp4' autoPlay loop muted />
      <h1>WE CLEAN BETTER UNDER PRESSURE</h1>
      {/* <p>What are you waiting for?</p> */}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH DEMO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
