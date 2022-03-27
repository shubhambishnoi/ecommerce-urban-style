import React from 'react'
import {Link} from "react-router-dom"

export function Navigation() {
  return (
    <div>
        <header className="header-main flex flex-y-ctr">
        <Link to="/"><h2 className="header-brand-title">Urban Style</h2></Link>
        <input className="header-search" type="text" placeholder="Search"/>
        <div className="header-right flex flex-y-ctr">
            <Link to="/login"><button className="header-login-btn">Login</button></Link>
            <div className="mail-badge header-icon-p">
                <Link to="/wishlist"><i className="fa-regular fa-heart header-icon"></i></Link>
                <span className="badge">0</span>
            </div>
            <div className="mail-badge header-icon-p">
                <Link to="/cart"><i className="fa-solid fa-cart-arrow-down header-icon"></i></Link>
                <span className="badge">0</span>
            </div>
            <Link to="/login"><i className="fa-solid fa-arrow-right-from-bracket header-icon"></i></Link>
        </div>
    </header>
    </div>
  )
}