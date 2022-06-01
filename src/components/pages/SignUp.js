import React, { useState, useContext } from 'react'
import '../../App.css'
import { UserEmail } from '../../context/userEmail'

export default function SignUp() {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useContext(UserEmail)

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target[0].value)
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: e.target[0].value,
                lastName: e.target[1].value,
                email: e.target[2].value

            })
        })
        .then(resp =>console.log(resp))
        
    }


    return (
        <div className='sign-up'>
            <div>
                <h2>Sign Up</h2>
            </div>
            <div className='sign-up-form'>
        <form onSubmit={handleSubmit}>
            <label>First Name
            <input type='text' placeholder='Your First Name' required value={firstName}
            onChange={e => setFirstName(e.target.value)}/>
            </label>
            <label>Last Name
            <input type='text' placeholder='Your Last Name' required value={lastName}
            onChange={e => setLastName(e.target.value)}/>
            </label>
            <label>Email
            <input type='email' placeholder='Enter Your Email Here' required value={email}
            onChange={e => setEmail(e.target.value)}/>
            <input type='submit' value='Submit'/>
            </label>
        </form>
            </div>
        </div>
    )
}