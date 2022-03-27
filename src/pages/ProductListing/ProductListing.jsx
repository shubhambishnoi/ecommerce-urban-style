import React from 'react'
import "./product-listing.css"
export function ProductListing() {
return (
<div>
  <div className="p-main-ct flex">
    <div className="sidebar flex">
      <div className="sub-div flex">
        <h3>Filters</h3>
        <span className="underline">Clear</span>
      </div><br/>

      <h3>Price</h3>
      <div className="sub-div flex">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <input type="range" name="r-input" className="slider" min="0" max="100"/><br/>

      <h3>Category</h3>
      <div>
        <input type="checkbox" id="jeans"/>{" "}
        <label for="jeans">Jeans</label>
      </div>

      <div>
        <input type="checkbox" id="t-shirt"/>{" "}
        <label for="t-shirt">T shirts</label>
      </div>

      <div>
        <input type="checkbox" id="suit"/>{" "}
        <label for="suit">Suits</label>
      </div><br/>

      <h3>Ratings</h3>

      <div>
        <input name="ratings" type="checkbox" id="r-4"/>{" "}
        <label for="r-4">4 Stars & above</label>
      </div>

      <div>
        <input name="ratings" type="checkbox" id="r-3"/>{" "}
        <label for="r-3">3 Stars & above</label>
      </div>

      <div>
        <input name="ratings" type="checkbox" id="r-2"/>{" "}
        <label for="r-2">2 Stars & above</label>
      </div>

      <div>
        <input name="ratings" type="checkbox" id="r-1"/>{" "}
        <label for="r-1">1 Stars & above</label>
      </div><br/>

      <h3>Sort by</h3>

      <div>
        <input name="sort" type="radio" id="l-h"/>{" "}
        <label for="l-h">Price - Low to High</label>
      </div>

      <div>
        <input name="sort" type="radio" id="h-l"/>{" "}
        <label for="h-l">Price - High to Low</label>
      </div>
    </div>

    <div className="p-c-wrapper flex">
      <div>
        <h3>Showing All Products</h3>
        <span> (showing 6 products)</span>
      </div>
      <div className="products-ct flex">

        <div className="card-v flex">
          <img className="card-im" src="/assets/wishlist-1.jpeg" alt="image" width="250" height="250"/>
          <i className="fa-solid fa-heart filled-heart-f"></i>
          <div className="card-title name">Men's T Shirt</div>
          <div className="card-title price">₹500 <span className="price strike">₹1000</span></div>
          <div className="cart-btn card-title" id="btn-b">Go to Cart</div>
        </div>

        <div className="card-v flex">
          <img className="card-im" src="/assets/wishlist-1.jpeg" alt="image" width="250" height="250"/>
          <i className="fa-regular fa-heart empty-heart-f"></i>
          <div className="card-title name">Men's T Shirt</div>
          <div className="card-title price">₹500 <span className="price strike">₹1000</span></div>
          <div className="cart-btn card-title">Add to Cart</div>
        </div>

        <div className="card-v flex">
          <img className="card-im" src="/assets/wishlist-1.jpeg" alt="image" width="250" height="250"/>
          <i className="fa-regular fa-heart empty-heart-f"></i>
          <div className="card-title name">Men's T Shirt</div>
          <div className="card-title price">₹500 <span className="price strike">₹1000</span></div>
          <div className="cart-btn card-title">Add to Cart</div>
        </div>

        <div className="card-v flex">
          <img className="card-im" src="/assets/wishlist-1.jpeg" alt="image" width="250" height="250"/>
          <i className="fa-regular fa-heart empty-heart-f"></i>
          <div className="card-title name">Men's T Shirt</div>
          <div className="card-title price">₹500 <span className="price strike">₹1000</span></div>
          <div className="cart-btn card-title">Add to Cart</div>
        </div>

        <div className="card-v flex">
          <img className="card-im" src="/assets/wishlist-1.jpeg" alt="image" width="250" height="250"/>
          <i className="fa-regular fa-heart empty-heart-f"></i>
          <div className="card-title name">Men's T Shirt</div>
          <div className="card-title price">₹500 <span className="price strike">₹1000</span></div>
          <div className="cart-btn card-title">Add to Cart</div>
        </div>

        <div className="card-v flex">
          <img className="card-im" src="/assets/wishlist-1.jpeg" alt="image" width="250" height="250"/>
          <i className="fa-regular fa-heart empty-heart-f"></i>
          <div className="card-title name">Men's T Shirt</div>
          <div className="card-title price">₹500 <span className="price strike">₹1000</span></div>
          <div className="cart-btn card-title">Add to Cart</div>
        </div>
      </div>
    </div>
  </div>

</div>
)
}