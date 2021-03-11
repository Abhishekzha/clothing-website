import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {addItem, clearItemFromCart,removeItemFromCart} from '../../redux/cart/cart.actions'; 

const CheckOutItem=({cartItem,clearItem,removeItem,addItem})=>{
   const {imageUrl,name,price,quantity}=cartItem
   return(
    <div className='checkout-item'>
    <div className='image-container'>
    <img src={imageUrl} alt='item'/>
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
    <div onClick={()=>removeItem(cartItem)} className='arrow'>&#10094;</div>
    <span className='value'>{quantity}</span>
    <div onClick={()=>addItem(cartItem)} className='arrow'>&#10095;</div>
    </span>
    <span className='price'>${price}</span>
    <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
    </div>
)
   }

const mapDispatchToProps=dispatch=>({
    clearItem:item=>dispatch(clearItemFromCart(item)),
    removeItem:item=>dispatch(removeItemFromCart(item)),
    addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CheckOutItem);