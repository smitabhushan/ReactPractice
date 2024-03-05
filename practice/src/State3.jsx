import React, { useState } from 'react'

const State3 = () => {
    const[formData,setFormData]=useState({
        username:"",
        password:""
    })
    const[isSubmit,setIsSubmit]=useState(false);

    const handleChange=(e)=>{
     setFormData({
        ...formData,
        [e.target.id]:e.target.value 
     })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsSubmit(true);
        
    }

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <label>
         username:
        <input type='text' id='username' onChange={handleChange} value={formData.username} />
        </label>
        <br/>
        <label>
            Password:
        <input type='password' id='password' onChange={handleChange} value={formData.password}/>
        </label>
        <br/>
        <button>Submit</button>
      </form>
      <p>{isSubmit && formData.username}</p>
      <p>{isSubmit && formData.password}</p>
    </div>
  )
}

export default State3
