import { Button } from 'bootstrap'
import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-description'>
          <p className='footer-subscription-heading'>
              Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className='footer-description-text'>
              You can unsubscribe at any time.
          </p>
          <input className='input-areas'>
              <form>
                  <input className='footer-input' type='email' name='email' placeholder='Your Email'
                  />
                  <Button buttonStyle='btn--outline'>Subscribe</Button>
              </form>
          </input>
      </section>
    </div>
  )
}

export default Footer
