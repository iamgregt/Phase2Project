import React from 'react'
import '../../App.css'

export default function SignUp() {
    

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target[0].value)
        fetch('http://localhost:3000/posts')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        
    }


    return (
        <div className='sign-up'>
            <div>
                <h2>Sign Up</h2>
            </div>
            <div className='sign-up-form'>
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Enter Your Email Here'/>
            <input type='submit' value='Submit'/>
        </form>
            </div>
        </div>
    )
}