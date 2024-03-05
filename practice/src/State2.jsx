import React, { useState } from 'react'

const State2 = () => {
    const[count,setCount]=useState(0);

  return (
    <div>
      <p>You have clicked {count} times</p>
      <p>You have clicked {count%2==0 ? 'even' :'odd'} times</p>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default State2
