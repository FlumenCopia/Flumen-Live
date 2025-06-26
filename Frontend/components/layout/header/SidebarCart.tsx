"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cartItemsData } from "@/public/data/cart-items";


const SidebarCart = ({ isCartOpen, setIsCartOpen }: any) => {
  const [cartItems, setCartItems] = useState(cartItemsData);

  const increaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity < 100
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <div
        className={"sidebar-cart" + (isCartOpen ? " sidebar-cart-active" : " ")}
      >
        <div className="sidebar-cart__inner">
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            <i className="bi bi-x-lg close-icon"></i>
          </button>

          {/*
          <h2>
            Shopping Bag
            <span className="count-item">{cartItems.length}</span>
          </h2>
          */}
          {/* Form */}
          <div className="cart-items">
            
            
            
          <form className="newsletterform">
          <div className="row">
    <div className="col">
    <h2>Enquire Now</h2>
    <p style={{color:'#b1b0b6', fontSize:'15px',textAlign:'center'}}>Get in touch with us to learn more about how
       our services can benefit your business..!!! </p>
   
      <input type="text" className="form-control mt-5" placeholder="Full name"/>
    </div>
    
  </div>
  <div className="form-row" style={{ marginTop: '15px' }}>
    <div className="form-group col">
     
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
    </div>
  </div>
  
  <div className="form-row" style={{ marginTop: '15px' }}>
    <div className="form-group col">
      
      <input type="tel" className="form-control" id="inputPhn" placeholder="Phone" />
    </div>
  </div>
  
  <div className="form-row">
    <div className="form-group col">
      <label htmlFor="inputState" className="form-title">Which service do you want?</label>
      <select id="inputState" className="form-control">
        <option value="option1">Choose...</option>
        <option>Digital Marketing</option>
        <option>Web Develeopment</option>
        <option>Branding</option>
        <option>Graphic Design</option>
        <option>Video Production</option>
       
      
      </select>
    </div>
  </div>

  <div style={{display:'flex', justifyContent:'center'}}>
  <button type="submit" className="contact-button mt-4"><b>Submit</b></button>
  </div>
</form>

          </div>

         {/*
          <div
            className="empty-cart"
            style={{ display: cartItemsData.length > 0 ? "none" : "block" }}
          >
            <h5>Your cart is empty</h5>
            <a href="shop">Add Products</a>
          </div>
          <div className="totals">
            <div className="subtotal">
              <span className="label">Subtotal:</span>
              <span className="amount ">
                $
                <span className="total-price">
                  {calculateTotalPrice().toFixed(2)}
                </span>
              </span>
            </div>
          </div>
          <div className="action-buttons">
            <Link
              className="view-cart-button"
              href="cart"
              aria-label="go to cart"
            >
              Cart
            </a>
            <Link
              className="checkout-button"
              href="checkout"
              aria-label="go to checkout"
            >
              Checkout
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          */}
        </div>
      </div>
      <div
        className={
          "cart-backdrop" + (isCartOpen ? " cart-backdrop-active" : " ")
        }
        onClick={() => setIsCartOpen(false)}
      ></div>
    </>
  );
};

export default SidebarCart;





