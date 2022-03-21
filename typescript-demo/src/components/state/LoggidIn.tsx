import { useState } from "react"


export const LoggedIn = () => {
    const [isLoggedIn , setLoggidIn] = useState(false);
    const handleLogin = () => {
        setLoggidIn(true)
    }
    const handleLogout = () =>{
        setLoggidIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout} >Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'} </div>
        </div>
    )
}
