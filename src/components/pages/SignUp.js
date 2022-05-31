import React from 'react'
import '../../App.css'

export default function SignUp() {
    return (
        <div className='sign-up'>
            <div>
                <h2>Sign Up</h2>
            </div>
            <div className='sign-up-form'>
        <form>
            <input type='email' placeholder='Email'/>
        </form>
            </div>
        </div>
    )
}