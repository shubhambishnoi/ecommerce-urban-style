import "./App.css";
import { LandingPage, ProductListing, Cart, Wishlist, Login, Signup } from "./pages";
import {Routes, Route} from "react-router-dom";
import {Navigation} from "./components/"
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/product-listing" element={<ProductListing/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
