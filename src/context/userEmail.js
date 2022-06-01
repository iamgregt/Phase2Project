import React, {createContext, useState} from 'react'

const UserEmail = createContext()

function UserEmailProvider({children}) {

    const[email, setEmail] = useState('')
    const value = [email, setEmail]

    return(
        <UserEmail.Provider value={value}>{children}</UserEmail.Provider>
    )
}

export {UserEmail, UserEmailProvider}