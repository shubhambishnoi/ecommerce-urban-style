import React from "react";
import "./wishlist.css"
export function Wishlist() {
  return (
    <div>
      <div className="wishlist-ct flex">
        <h3 className="align-c">My Wishlist</h3>

        <div className="card-v-h flex flex-y-ctr">
          <div className="card-v flex">
            <img
              className="card-im"
              src="/assets/wishlist-1.jpeg"
              alt="image"
              width="250"
              height="250"
            />
            <i className="fa-solid fa-heart wishlist-heart-f"></i>
            <div className="card-title name clr-w">Men's T Shirt</div>
            <div className="card-title price clr-w">
              ₹500 <span className="price strike">₹1000</span>
            </div>
            <div className="cart-btn card-title clr-w" id="btn-b">
              Go to Cart
            </div>
          </div>

          <div className="card-v flex">
            <img
              className="card-im"
              src="/assets/wishlist-4.jpeg"
              alt="image"
              width="250"
              height="250"
            />
            <i className="fa-solid fa-heart wishlist-heart-f"></i>
            <div className="card-title name">Men's Suit</div>
            <div className="card-title price">
              ₹3500 <span className="price strike">₹5000</span>
            </div>
            <div className="cart-btn card-title" id="btn-b">
              Go to Cart
            </div>
          </div>

          <div className="card-v flex">
            <img
              className="card-im"
              src="/assets/wishlist-2.jpeg"
              alt="image"
              width="250"
              height="250"
            />
            <i className="fa-solid fa-heart wishlist-heart-f"></i>
            <div className="card-title name clr-w">Men's T Shirt</div>
            <div className="card-title price clr-w">
              ₹600 <span className="price strike">₹1000</span>
            </div>
            <div className="cart-btn card-title clr-w" id="btn-b">
              Go to Cart
            </div>
          </div>

          <div className="card-v flex">
            <img
              className="card-im"
              src="/assets/wishlist-3.jpeg"
              alt="image"
              width="250"
              height="250"
            />
            <i className="fa-solid fa-heart wishlist-heart-f"></i>
            <div className="card-title name clr-w">Men's Suit</div>
            <div className="card-title price clr-w">
              ₹1500 <span className="price strike">₹3000</span>
            </div>
            <div className="cart-btn card-title clr-w" id="btn-b">
              Go to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
