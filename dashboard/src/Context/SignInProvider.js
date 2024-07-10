import React, {createContext, useContext, useState} from 'react'


export const AppContext = createContext();


const SignInProvider = ({ children }) => {
    const [showSignIn, setShowSignIn] = useState(false)
    const [showCreateAccount, setShowCreateAccount]  = useState(false)
    const toggleSignIn =() => {
        setShowSignIn(prevState => !prevState);
    }

    const toggleCreateAccount = ()=>{
        setShowCreateAccount(prevState => !prevState);
    }

    return (
        <AppContext.Provider value={{ showSignIn,  showCreateAccount, toggleSignIn, toggleCreateAccount}}>
            {children}
        </AppContext.Provider>
    )
}

export default SignInProvider;