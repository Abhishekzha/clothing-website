import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header=({currentUser})=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
           <Logo/>
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
            currentUser ? 
            <div className='profile'>
            <Link className='option'  onClick={()=>auth.signOut()}>SIGN OUT</Link>
            <img className='profile-pic' src={currentUser.photoURL} alt='profile'/>
            </div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        </div>
    </div>
)

export default Header;