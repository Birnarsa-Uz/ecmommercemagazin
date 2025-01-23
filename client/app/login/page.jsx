"use client"

import React from 'react'
import Image from 'next/image'
import "./login.css"
import SideImage from "../images/SideImage.svg"

const Login = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        password: ""
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const send = async () => {
        const { name, password } = formData
        try {
            await fetch('http://localhost:8080/user',
            {
            method: "POST",
            body: JSON.stringify({ name, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        } catch (e) {
            console.log(e)
        }
        
        
    }

    return (
      <div className='container login-page'>
          <div className="sideimage">
              <Image src={SideImage} alt='not found'/>
          </div>
          <div className="right-side">
              <div className="info">
                  <div className="info-text">
                      <h1>Login in to Exclusive</h1>
                      <p >Enter your details below</p>
                  </div>
                  <div className="fields">
                    <input type="email" placeholder='Email or Phone Number' name='name' onChange={handleChange} />
                    <input type="password" placeholder='Password' name='password' onChange={handleChange} />
                  </div>
              </div>
              <div className="actions">
                  <button onClick={send}>Log in</button>
                  <p>Forgot password?</p>
              </div>
          </div>
    </div>
  )
}

export default Login