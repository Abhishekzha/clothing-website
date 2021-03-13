import React from 'react';
import './checkout-page.styles.scss';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import {connect} from 'react-redux';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import StripeChekoutButton from '../../components/stripe-checkout/stripe-checkout.component';

const CheckOutPage=({cartItems,total})=>(
       <div className='checkout-page'>
       <div className='checkout-header'>
       <div className='header-block'>
       <span>Product</span>
       </div>
       <div className='header-block'>
       <span>Description</span>
       </div>
       <div className='header-block'>
       <span>Quantity</span>
       </div>
       <div className='header-block'>
       <span>Price</span>
       </div>
       <div className='header-block'>
       <span>Remove</span>
       </div>
       </div>
       {
          cartItems.map(cartItem=>(
                 <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
          ))
       }
       <div className='total'>
       <span>TOTAL: ${total}</span>
       </div>
       <div className='payment-warning'>
       **This is the test mode of stripe payment method**
       <br/>
       Card No-4242 4242 4242 4242 Date:Any future date. CVV-123
       </div>
       <StripeChekoutButton price={total}/>
       </div>

)
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckOutPage);