"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import SideImage from "../images/SideImage.svg"
import "./signup.css"
import Link from 'next/link'
import icon from "../images/Icon-Google.svg"
import { useRouter } from 'next/navigation'
// import { useSession, signOut, } from 'next-auth/react'

const Signup = () => {
    const router = useRouter()
    // const { data: session } = useSession()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const enter = async () => {
        try {
            localStorage.setItem("isUserHave", true)
        } catch (e) {
            console.log(e)
        }
        
    }

    const kirish = async () => { 
        // try {
        //     if (formData.email === "" || formData.name === "" || formData.password === "") {
        //         alert("Bosh joylarni toldiring")
        //     } else {
        //         const dt = await fetch("http://127.0.0.1:8000/token")
        //         const res = await dt.json()
        //         const token = res.token
        //         console.log(token)
        //         const response = await fetch("http://127.0.0.1:8000/signup", {
        //             method: "POST",
        //             body: JSON.stringify({
        //                 name: formData.name,
        //                 email: formData.email,
        //                 password: formData.password,
        //             }),
        //             headers: {
        //                 "Content-Type": 'application/json',
        //                 "X-CSRF-Token": token
        //             }
        //         }
        //     )
            
        //     const data = await response.json()
            
        //     localStorage.setItem("isUserHave", "true")
        //     console.log(data.status)
        //     // console.log(data.user)
        //     router.push("/")
        //     alert("yuborildi")
        //     }
          
        // } catch (e) {
        //     alert("Xatolik yuz berdi")
        //     console.log(e)
        // }
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const out = () => {
        signOut()
        window.localStorage.setItem("isUserHave", false)
    }
    // session ? <div className="container">
    //     <button onClick={out}>chiqish</button>
    // </div> : 
    return (<>
        <title>App</title>
        <div className = "signup container" >
            <div className="sideimage">
            <Image src={SideImage} alt='not found'/>
        </div>
          <div className="right-side">
              <div className="info">
                  <h1>Create an account</h1>
                  <p>Enter your details below</p>
              </div>
              <div className="actions">
                  <form className="fields" action="http://localhost:8888/signup">
                        <input type="text" name='name' placeholder='Name' onChange={handleChange}/>
                      <input type="email" name='email' placeholder='Email or Phone Number' onChange={handleChange}/>
                      <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
                    </form>
                  <div className="submits">
                      <button type='submit' onClick={() => kirish()}>Create Account</button>
                      <div className="with-g">
                            <button onClick={() => enter()}><Image src={ icon} alt="google"/> Sign up with Google</button>
                            <div className="login">
                                 Already have account? <Link href={"/login"}>Log in</Link>
                            </div>
                      </div>
                  </div>
              </div>
        </div>
    </div ></>)
      
}

export default Signup