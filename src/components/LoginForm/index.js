import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  AppContainer,
  ContentContainer,
  NxtImage,
  LoginFormContainer,
  InputFieldContainer,
  InputLabel,
  InputBox,
  CheckBoxContainer,
  Checkbox,
  CheckboxLabel,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showErrorMsg: false,
    showPassword: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {
      usernameInput,
      passwordInput,
      showPassword,
      showErrorMsg,
      errorMsg,
    } = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <AppContainer>
        <ContentContainer>
          <NxtImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LoginFormContainer onSubmit={this.onClickLogin}>
            <InputFieldContainer>
              <InputLabel htmlFor="username">USERNAME</InputLabel>
              <InputBox
                id="username"
                placeholder="Username"
                type="text"
                value={usernameInput}
                onChange={this.onChangeUserInput}
              />
            </InputFieldContainer>
            <InputFieldContainer>
              <InputLabel htmlFor="password">PASSWORD</InputLabel>
              <InputBox
                id="password"
                placeholder="Password"
                type={inputType}
                value={passwordInput}
                onChange={this.onChangePasswordInput}
              />
            </InputFieldContainer>
            <CheckBoxContainer>
              <Checkbox
                type="checkbox"
                id="checkbox"
                onChange={this.onChangeShowPassword}
              />
              <CheckboxLabel htmlFor="checkbox">Show Password</CheckboxLabel>
            </CheckBoxContainer>
            <LoginBtn type="submit">Login</LoginBtn>
            {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </LoginFormContainer>
        </ContentContainer>
      </AppContainer>
    )
  }
}
export default LoginForm
