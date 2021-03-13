import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeChekoutButton=({price})=>{
    const stripePrice=price * 100;
    const publishablekey='pk_test_51HzezTAA6pakPglxZpcSdJQ27NPdex4pCewNTLxMwx6YehKnHIFCY6pT7XJ5x1nGbhBk6qasdgSH4jAX2hqrkMdo00NezURDMM'
    const onToken=token=>{
        console.log(token);
        alert("Payment Successful")
    }
    return(
        <StripeCheckout
        name="CLOTHING-WEBSITE"
        description={`Your total amount is $${price}`}
        image='https://svgshare.com/i/CUz.svg'
        label='PAY NOW'
        panelLabel='PAY NOW'
        amount={stripePrice}
        stripeKey={publishablekey}
        billingAddress
        shippingAddress
        token={onToken}
        />
    )
}
export default StripeChekoutButton;