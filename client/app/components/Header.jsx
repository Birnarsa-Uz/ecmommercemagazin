"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from "../images/Logo.svg"
import search from "../images/Search.svg"
import wishlist from "../images/wishlist.svg"
import cart from "../images/Cart.svg"
import Link from 'next/link'

const Header = () => {
  const [isLogged, setLogged] = useState(false)
  useEffect(() => {
    const isHave = localStorage.getItem("isUserHave") === "true"
    console.log(isHave)
    setLogged((p) => p = isHave)
  }, [])
  
  return (
    <header className="container">
      <Image src={logo} alt='qordoq'/>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="">Contact</Link></li>
          <li><Link href="">About</Link></li>
          {!isLogged && <li><Link href="/signup">Sign up</Link></li>}
        </ul>
      </nav>
      <div className="user-actions">
        <div className="search-form">
          <input type="text" placeholder='What are you looking for?'/>
          <Image src={search} alt='qordoq'/>
        </div>
        <span>
          <div className="wishlist action-icon">
            <p className='count'>2</p>
            <Image src={wishlist} alt='qordoq'/>
          </div>
          <div className="cart action-icon">
            <p className='count'>9</p>
            <Image src={cart} alt='qordoq'/>
          </div>
          {
            isLogged ? <div className="profile action-icon">
              <Image src={cart} alt='qordoq'/>
            </div> : null
          }
          
        </span>
      </div>
    </header>
  )
}

export default Header