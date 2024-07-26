import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginBgContainer,
  LoginContainer,
  LoginImage,
  LoginFormContainer,
  LoginGreeting,
  FormLabel,
  InputElement,
  LoginButton,
  ErrorText,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    userIdInputValue: '',
    pinInputValue: '',
    isFailure: false,
    errorMessage: '',
  }

  onChangeUserId = event => {
    this.setState({userIdInputValue: event.target.value})
  }

  onChangePin = event => {
    this.setState({pinInputValue: event.target.value})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({
      isFailure: true,
      errorMessage: errorMsg,
    })
  }

  onLogin = async event => {
    event.preventDefault()

    const {userIdInputValue, pinInputValue} = this.state
    const userDetails = {user_id: userIdInputValue, pin: pinInputValue}
    const url = 'https://apis.ccbp.in/ebank/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const {userIdInputValue, pinInputValue, isFailure, errorMessage} = this.state // prettier-ignore
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginBgContainer>
        <LoginContainer>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginFormContainer onSubmit={this.onLogin}>
            <LoginGreeting>Welcome Back!</LoginGreeting>
            <FormLabel htmlFor="userId">User ID</FormLabel>
            <InputElement
              type="text"
              id="userId"
              placeholder="Enter User ID"
              value={userIdInputValue}
              onChange={this.onChangeUserId}
            />
            <FormLabel htmlFor="pin">PIN</FormLabel>
            <InputElement
              type="password"
              id="pin"
              placeholder="Enter PIN"
              value={pinInputValue}
              onChange={this.onChangePin}
            />
            <LoginButton type="submit">Login</LoginButton>
            {isFailure && <ErrorText>{errorMessage}</ErrorText>}
          </LoginFormContainer>
        </LoginContainer>
      </LoginBgContainer>
    )
  }
}

export default LoginForm
