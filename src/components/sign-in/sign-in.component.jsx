import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils.js';
import {auth} from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:"",
            password:""
        }
    }
        handleSubmit=async event=>{
            event.preventDefault();
            const {email,password}=this.state;
            try{
                await auth.signInWithEmailAndPassword(email,password);
                this.setState({email:'',password:''});
            }catch(error){
                console.log("Error signin in",error);
            }
           
        }
        handleChange=event=>{
           const {name,value}=event.target;
           this.setState({[name]:value});
        }


    render(){
        return(
          <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with email and password</span>
          <form onSubmit={this.handleSubmit}>
          <FormInput type='email' value={this.state.email} name='email' handleChange={this.handleChange} label='Email' required />
          <FormInput type='password' value={this.state.password} name='password' handleChange={this.handleChange} label='Password' required />
          <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
          </form>
          </div>
        )
    }
}
export default SignIn;