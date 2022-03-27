import React from 'react'
import {Link} from "react-router-dom"
export function LandingPage() {
    return (
        <div>
            <div className="main-ct flex">
                <div className="category-ct flex flex-y-ctr">
                    <div className="card-bd">
                        <img className="card-im" src="/assets/jeans.jpeg" alt="image" width="300" height="350" />
                        <div className="overlay-txt">Jeans</div>
                    </div>

                    <div className="card-bd">
                        <img className="card-im" src="/assets/t-shirt.jpeg" alt="image" width="300" height="350" />
                        <div className="overlay-txt">T-Shirts</div>
                    </div>

                    <div className="card-bd">
                        <img className="card-im" src="/assets/suit.jpeg" alt="image" width="300" height="350" />
                        <div className="overlay-txt">Suits</div>
                    </div>
                </div>
                <Link to="/product-listing"><button className="shop-now-btn">Shop now</button></Link>
            </div>
        </div>
    )
}