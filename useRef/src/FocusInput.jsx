import React from 'react'
import { useRef } from 'react'



const FocusInput = () => {
    const inputRef = useRef(null)
    const focus = () => {
    
    inputRef.current.focus();
    inputRef.current.value = "Hi Manoj!";
}

  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={()=>focus()}>Focus</button>
    </div>
  )
}

export default FocusInput