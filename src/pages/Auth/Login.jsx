import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"
export function Login() {
  return (
    <div>
      <div className="main-ct">
        <div className="login-ct flex">
            <h2>Login</h2>
            <span>
                <label htmlFor="login-email">Email Address</label>
                <input type="text" placeholder="xyz@gmail.com" id="login-email" />
            </span>
            <span className="pwd">
                <label htmlFor="login-pwd">Password</label>
                <input type="password" placeholder="********" id="login-pwd" />
                <i className="fa-solid fa-eye"></i>
                <span className="forgot">Forgot your password?</span>
            </span>

            <div><input type="checkbox" id="remember"/> <label htmlFor="remember">Remember me</label></div>
            <Link to="/product-listing" className="login-a"><button>Login</button></Link>
            <Link to="/signup"><span className="goto-signup">Create new account</span></Link>
        </div>
    </div>
    </div>
  )
}