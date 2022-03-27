import React from 'react'
import "./signup.css"
import {Link} from "react-router-dom"
export function Signup() {
  return (
    <div>
      <div className="main-ct">
        <div className="signup-ct flex">
            <h2>Signup</h2>
            <span>
                <label for="signup-email">Email Address</label>
                <input type="text" placeholder="xyz@gmail.com" id="signup-email" />
            </span>
            <span>
                <label for="signup-fn">First Name</label>
                <input type="text" placeholder="john" id="signup-fn"/>
            </span>
            <span>
                <label for="signup-ln">Last Name</label>
                <input type="text" placeholder="smith" id="signup-ln"/>
            </span>
            <span className="pwd">
                <label for="signup-pwd">Password</label>
                <input type="password" placeholder="********" id="signup-pwd"/>
                <i className="fa-solid fa-eye"></i>
            </span>
            <span className="pwd">
                <label for="signup-c-pwd">Confirm Password</label>
                <input type="password" placeholder="********" id="signup-c-pwd"/>
                <i className="fa-solid fa-eye"></i>
            </span>

            <div><input type="checkbox" id="signup-accept"/> <label required for="signup-accept">I accept all Terms &
                    Conditions</label></div>
            <Link to="/product-listing" className="signup-c-a"><button>Create New Account</button></Link>
            <Link to="/login"><span className="signup-already">Already have an account</span></Link>
        </div>

    </div>
    </div>
  )
}
