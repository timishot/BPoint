import React, { Component } from 'react'
import './CartTable.css'
import children from "../asset/Children.jpg"

export default class CartTable extends Component {
  render() {
    return (
      <>

        <section id="cart" class="section-p1">
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
                <tr>
                    <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    <td><img src={children} alt="" /></td>
                    <td>Think and grow rich</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1" /></td>
                    <td>$118.19</td>
                </tr>
                <tr>
                    <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    <td><img src={children}  alt="" /></td>
                    <td>Think and grow rich</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1" /></td>
                    <td>$118.19</td>
                </tr>
                <tr>
                    <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    <td><img src={children}  alt="" /></td>
                    <td>Think and grow rich</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1" /></td>
                    <td>$118.19</td>
                </tr>
            </tbody>
        </table>
    </section>
    <section id="cart-add" class="section-p1 section-m1">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter Your Coupon" />
                <button class="normal">Apply</button>
            </div>
        </div>

        <div id="subtotal">
            <h3>cart Totals</h3>
            <table>
                <tr>
                    <td>Cart Subtotal</td>
                    <td>$ 335</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>$ 335</strong></td>
                </tr>
            </table>
            <button class="normal">Proceed to checkout</button>
        </div>
    </section>
      </>
    )
  }
}
