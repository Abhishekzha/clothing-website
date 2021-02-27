import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }
    handleSubmit=async event=>{
       event.preventDefault();
       const {displayName,email,password,confirmPassword}=this.state;
       if(password !== confirmPassword){
           alert('Password did not match')
           return;
       }
       try{
         const {user}=await auth.createUserWithEmailAndPassword(email,password);
         await createUserProfileDocument(user,{displayName});
         this.setState({
             displayName:"",
             email:"",
             password:"",
             confirmPassword:""
         })
         
       }catch(error){
           console.log("error signin up",error)
       }

    }

    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
        }
    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
           <div className='sign-up'>
           <h1 className='title'>Don't have an account?</h1>
           <span>Sign up with email and password</span>
           <form onSubmit={this.handleSubmit}>
           <FormInput type='text' value={displayName} name='displayName' required label='Name' handleChange={this.handleChange} />
           <FormInput type='email' value={email} name='email' required label='Email' handleChange={this.handleChange} />
           <FormInput type='password' value={password} name='password' required label='Password' handleChange={this.handleChange} />
           <FormInput type='password' value={confirmPassword} name='confirmPassword' required label='Confirm Password' handleChange={this.handleChange} />
           <CustomButton type='submit'>Sign up</CustomButton>
           </form>
           </div>
        )
    }
}

export default SignUp;