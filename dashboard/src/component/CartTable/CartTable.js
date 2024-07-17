import React, { Component } from 'react'
import { connect } from 'react-redux';
import './CartTable.css'

import { addToCart, removeFromCart, updateCartQuantity } from '../../actions/cartActions';


const CartTable = ({ cartItems, removeFromCart, updateCartQuantity }) => {
    const handleRemoveFromCart = (book) => {
      removeFromCart(book);
    };
  
    const handleQuantityChange = (book, quantity) => {
        const parsedQuantity = parseInt(quantity, 10);
        if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
          updateCartQuantity(book, parsedQuantity);
        }
      };
  
    return (
      <>
        {cartItems.length > 0 ? ( 
          <>
            <section id="cart" className="section-p1">
            <table width="100%">
              <thead>
                <tr>
                  <td>Remove</td>
                  <td>Image</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td><button onClick={() => handleRemoveFromCart(item)}><i className="far fa-times-circle"></i></button></td>
                    <td><img src={item.bookImage} alt="" /></td>
                    <td>{item.bookTitle}</td>
                    <td>${item.price}</td>
                    <td><input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item, e.target.value)} /></td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
            <section id="cart-add" className="section-p1 section-m1">
              <div id="coupon">
                <h3>Apply Coupon</h3>
                <div>
                  <input type="text" placeholder="Enter Your Coupon" />
                  <button className="normal">Apply</button>
                </div>
              </div>
      
              <div id="subtotal">
                <h3>Cart Totals</h3>
                <table>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</strong></td>
                  </tr>
                </table>
                <button className="normal">Proceed to checkout</button>
              </div>
            </section>
          </>
           ): (
            <div className='No_item'>
              <h1>No item in Cart</h1>
            </div>
           )}

      </>
    );
  };
  
  const mapStateToProps = (state) => ({
    cartItems: state.cartReducer.get('cartItems').toJS(),
  });
  
  const mapDispatchToProps = {
    removeFromCart,
    updateCartQuantity,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartTable);



