import React, { useState } from 'react'

const State = () => {
    const[click,setClick]=useState([]);
    const handleClick=()=>{
       setClick([
        ...click,
        {
            id:click.length,
           value:Math.random() *10,
          
        }
       ])
    }
  return (
   
    <div>
        <ul>
           {click.map((item)=>(
              <li key={item.id}>
                    {item.value}
              </li>
           ))}
        </ul>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default State
