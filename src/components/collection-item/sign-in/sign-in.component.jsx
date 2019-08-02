import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../../form-input/form-input.component';
import CustomButton from '../../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit')
  }

  handleChange = (evt) => {
    const {value, name } = evt.target
    this.setState(({ [name] : value }))
  }

  render() {
    return (
      <div>
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form action="" onSubmit={this.handleSubmit}>
            <FormInput type="email" name="email" id="enail" value={this.state.email} required handleChange={this.handleChange} label='email' />
            <FormInput type="password" name="password" id="password" value={this.state.password} required handleChange={this.handleChange} label='password'/>

            <CustomButton type="submit">SIGN IN </CustomButton>
          </form>
        </div>
      </div>
    )
  }
}

export default SignIn