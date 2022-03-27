import React from 'react'
import "./cart.css"
export function Cart() {
  return (
    <div>
      <div className="cart-main">
        <h3 className="align-c">My Cart(2)</h3>
        <div className="cart-ct flex">
            <div className="c-cards flex">
                <div className="card-h flex">
                    <img className="card-im" src="/assets/jeans.jpeg" alt="image" width="250"
                        height="300"/>
                    <hr/>
                    <div className="h-item flex">
                        <div className="card-title name">Men's Jeans</div>
                        <span className="card-title price">₹500 <span className="price strike">₹1000</span></span>
                        <div className="card-title price discount">50% off</div>
                        <div className="qty">Quantity <span><i className="fa-solid fa-circle-minus"></i></span><input
                                type="text" className="qty-present" value="1" /><span><i
                                    className="fa-solid fa-circle-plus"></i></span></div>
                        <div className="cart-btn card-title" id="btn-b">Remove from Cart</div>
                        <div className="cart-btn card-title" id="cart-w">Move to wishlist</div>
                    </div>
                </div>

                <div className="card-h flex">
                    <img className="card-im" src="/assets/suit.jpeg" alt="image" width="250"
                        height="300"/>
                    <hr/>
                    <div className="h-item flex">
                        <div className="card-title name">Men's Suit</div>
                        <span className="card-title price">₹2500 <span className="price strike">₹4000</span></span>
                        <div className="card-title price discount">20% off</div>
                        <div className="qty">Quantity <span><i className="fa-solid fa-circle-minus"></i></span><input
                                type="text" className="qty-present" value="1"/><span><i
                                    className="fa-solid fa-circle-plus"></i></span></div>
                        <div className="cart-btn card-title" id="btn-b">Remove from Cart</div>
                        <div className="cart-btn card-title" id="cart-w">Move to wishlist</div>
                    </div>
                </div>
            </div>

            <div className="cart-price flex">
                <h3>PRICE DETAILS</h3>
                <hr/>
                <div className="price-sub flex">
                    <span>Price (2 items)</span>
                    <span>₹8000</span>
                </div>

                <div className="price-sub flex sub-discount">
                    <span>Discount</span>
                    <span className="discount">₹1000</span>
                </div>

                <div className="price-sub flex">
                    <span>Delivery Charges</span>
                    <span>₹100</span>
                </div>
                <hr/>

                <div className="price-sub flex">
                    <h3>Total</h3>
                    <h3>₹7100</h3>
                </div>
                <hr/><br/>
                <div>You will save ₹1000 on this order</div><br/>

                <button className="place-order">Place your order</button>
            </div>
        </div>
    </div>
    </div>
  )
}