import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import LinearGradient from 'react-native-linear-gradient';
import AuthenticateService from '../services/AuthenticateService';
import UsersService from '../services/UsersService';
import FlashMessage from '../components/shared/FlashMessage';
import FlashModel from '../models/FlashModel';
import { AsyncStorage } from 'react-native';

class LoginScreen extends React.Component {
  state = {
    flashMessages: []
  }

  onLoginSubmit = (params) => {
    this.usersService
        .login(params)
        .then((user) => {
          AsyncStorage.setItem('user', JSON.stringify(user));
          this.pushFlashMessage({ title: user.email, description: user.token, type: 'success' });
          const previousScreen = this.props.navigation.state.params.previousScreen;

          if (previousScreen) {
            if (Array.isArray(previousScreen)) {
              this.props.navigation.replace(...previousScreen)
            } else {
              this.props.navigation.replace(previousScreen)
            }
          }
        })
        .catch(() => {
          this.pushFlashMessage({ title: 'Error', description: 'Can\'t login', type: 'danger' });
        });
  }

  componentDidMount () {
    AuthenticateService.csrfToken().then((token) => {
      this.usersService = new UsersService({ csrfToken: token });
    });
  }

  onSuccessLogin = (token) => {
    AsyncStorage.setItem('authenticateToken', token);
  }

  pushFlashMessage = (message) => {
    const flash = new FlashModel(message);
    const id = flash.id;

    this.setState({
      flashMessages: this.state.flashMessages.concat([flash])
    }, () => {
      setTimeout(() => {
        let messages = this.state.flashMessages.filter((message) => (message.id !== id));
        this.setState({ flashMessages: messages });
      }, 2500)
    })
  }

  render () {
    const { flashMessages } = this.state;

    return (
      <LinearGradient
        style={styles.main}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: -1 }}
        colors={['#ffecd2', '#fcb69f']}
        >
        { flashMessages.map((flash) => (
          <FlashMessage {...flash} key={flash.id} />
        )) }
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
