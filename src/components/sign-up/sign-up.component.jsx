import React from 'react'

import FormInput from '../form-input/form-input.component';
import CurtomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class SignUp extends React.Component {
  constructor(){
    super();
  
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword){
      alert('passwords do not match!');
      return
    }

    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, {displayName});

    } catch(error){
      console.error(error)
    }

    this.setState( { displayName: '',
                      email: '',
                      password: '',
                      confirmPassword: '' })
  }

  handleChange = evt => {
    const {name, value} = evt.target;

    this.setState( { [name]: value })
  }

  render(){
    const { displayName, email, password, confirmPassword } = this.state
    return(
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            type='text' 
            name='displayName' 
            value={displayName} 
            onChange={this.handleChange} 
            label='Display Name'
            required >
          </FormInput>

          <FormInput 
            type='email' 
            name='email' 
            value={email} 
            onChange={this.handleChange} 
            label='Email'
            required >
          </FormInput>

          <FormInput 
            type='password' 
            name='password' 
            value={password} 
            onChange={this.handleChange} 
            label='password'
            required >
          </FormInput>

          <FormInput 
            type='password' 
            name='confirmPassword' 
            value={confirmPassword} 
            onChange={this.handleChange} 
            label='Confirm Password'
            required >
          </FormInput>

          <CurtomButton type='submit'>SIGN UP</CurtomButton>
        </form>
      </div>
    )
  }

}

export default SignUp