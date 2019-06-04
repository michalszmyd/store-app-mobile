import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import LinearGradient from 'react-native-linear-gradient';
import AuthenticateService from '../services/AuthenticateService';
import UsersService from '../services/UsersService';

class LoginScreen extends React.Component {
  onLoginSubmit = (params) => {
    this.usersService.login(params);
  }

  componentDidMount () {
    AuthenticateService.csrfToken().then((token) => {
      this.usersService = new UsersService(token);
    })
  }

  render () {
    return (
      <LinearGradient
        style={styles.main}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: -1 }}
        colors={['#ffecd2', '#fcb69f']}
        >
        <LoginForm onSubmit={this.onLoginSubmit} />
      </LinearGradient>
    )
  }
}

const styles = {
  main: {
    justifyContent: 'center',
    flex: 1
  }
}

export default LoginScreen;