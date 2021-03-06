import React from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';                                                                                                                                                                                                                                                                                                                                         

const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
           <Logo/>
        </Link>
        <div className='options'>
        <CartIcon/>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
            currentUser ? 
            <div className='profile'>
            <div  className='option sign-out'  onClick={()=>auth.signOut()}>SIGN OUT</div>
            {currentUser.photoURL ?
            <img className='profile-pic' src={currentUser.photoURL} alt='profile'/>
            : <img className='profile-pic unknown-pic'
             src={`https://robohash.org/${currentUser.uid}`}
             alt='profile'/>}
            </div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        
        </div>
        {
            hidden ? null :<CartDropdown/>
        }
        
        </div>
)

const mapStateToProps=({user:{currentUser}, cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);