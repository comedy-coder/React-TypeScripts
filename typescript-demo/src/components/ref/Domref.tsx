import React, { useEffect, useRef } from 'react'

const Domref = () => {
    const headerRef = useRef<HTMLInputElement>(null!)

  useEffect(()=>{
      headerRef.current.focus()
  },[])
  return (
    <input ref={headerRef} /> 
  )
}

export default Domref