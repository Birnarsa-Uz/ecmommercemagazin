import React from 'react'


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="xcls">
          <h1>Exclusive</h1>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className="sendmail">
            <input type="text" />
          </div>
        </div>
        <div className="support">
          <h1>Support</h1>
          <div className="subtitles">
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        {}
        <div className="account">
          <h1>Account</h1>
          <div className="subtitles">
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>
        <div className="quick-link">
          <h1>Quick Link</h1>
          <div className="subtitles">
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer