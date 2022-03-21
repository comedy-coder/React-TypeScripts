import React from 'react'
type GreetProps = {
    name : string
    messageCount ?: number
    isLoggedIn : boolean

}

export const Greet = (props : GreetProps) =>
{   const {messageCount = 0} = props
        return (
            <div > 
                <h2>
                    {
                        props.isLoggedIn ? `Welcome ${props.name} to Alts! Bạn có ${messageCount} tin nhắn chưa đọc`
                        : "Welcome người lạ"
                    }
                </h2>
             </div>
        )
}
