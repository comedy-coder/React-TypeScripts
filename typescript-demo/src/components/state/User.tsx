import { useState } from "react"

type AuthUser ={
    name : string
    email : string
}
export const User = () => {
    const [user,setUser] = useState<AuthUser>({} as AuthUser);
    const handleUserLogin = () =>{
        setUser({
            name : 'Thành Đạt',
            email :'thanhdat.ngo1407@gmail.com'
        })
    }
   
    return (
        <div className="">
            <button onClick={handleUserLogin}>Login</button>
            
            <div className="">User name is {user.name}</div>
            <div className="">Email address is {user.email}</div>
        </div>
    )
}