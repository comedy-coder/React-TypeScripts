import React from 'react'
import { useState, useEffect, useRef } from 'react';
export const Mutalref = () => {
    const [timer,setTimer] = useState(0);
    const interValRef = useRef<number|null>(null)
    const stopTimer = () => {
        if(interValRef.current)
        window.clearInterval(interValRef.current)
    }
    useEffect(()=> {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }

        
    })
  return (
    <div>Hook - {timer}
    <button onClick={()=>{stopTimer()}} > Stoptimer </button>
    </div>
  )
}

