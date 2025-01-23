"use client"
import React, { useRef } from 'react'

const Today = () => {
    const userRef = useRef(null)
    const scrollRight = () => {
        userRef.current.scrollTo({
            left: userRef.current.scrollLeft + 150,
            behavior: 'smooth'
        })
    }
    const scrollLeft = () => {
        userRef.current?.scrollTo({
            left: userRef.current.scrollLeft - 150,
            behavior: 'smooth'
        })
    }
  return (
    <div className='container today'>
          <div className="info-main">
              <div className="info-text-main">
                  <div className="title">
                      <span>
                          <span title='Salom' content='Salo'/>
                          <h3>Today's</h3>
                      </span>
                      <h1>Flash Sales</h1>
                  </div>
                  <div className="date">
                      <div>
                          <div className="days">
                          <p>Days</p>
                          <h1>03</h1>
                      </div>
                      <div className="colon">
                        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#E07575"/>
                        <circle cx="2" cy="14" r="2" fill="#E07575"/>
                        </svg>
                      </div>
                      
                      <div className="hours">
                          <p>Hours</p>
                          <h1>23</h1>
                      </div>
                      <div className="colon">
                      <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#E07575"/>
                        <circle cx="2" cy="14" r="2" fill="#E07575"/>
                      </svg>
                      </div>
                      <div className="mins">
                          <p>Minutes</p>
                          <h1>19</h1>
                      </div>
                      <div className="colon">
                        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#E07575"/>
                            <circle cx="2" cy="14" r="2" fill="#E07575"/>
                        </svg>
                      </div>
                      <div className="seconds">
                          <p>Seconds</p>
                          <h1>56</h1>
                      </div>
                      </div>
                      
                  </div>
              </div>
              <div className="scroll">
                  <button onClick={scrollLeft}>&#129120;</button>
                  <button onClick={scrollRight}>&#129122;</button>
              </div>
          </div>
          <div className="products" ref={userRef} style={{height: "auto",zIndex: 9, whiteSpace: "nowrap", overflowX: "hidden"}}>
              <div style={{display: "block"}}>dsadenim omnis atque corrupti, cumque repudiandae voluptatem voluptatum in quos sint numquam. Laborum, repellat provident optio ut ab voluptate tenetur, ipsa voluptatibus rerum nemo officia hic harum, voluptatum nesciunt qui.</div> 
          </div>
    </div>
  )
}

export default Today