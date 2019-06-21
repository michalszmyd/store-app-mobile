import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import LinearGradient from 'react-native-linear-gradient';
import AuthenticateService from '../services/AuthenticateService';
import UsersService from '../services/UsersService';
import AppContext from '../contexts/AppContext';
import { AsyncStorage } from 'react-native';

class LoginScreen extends React.Component {
  static contextType = AppContext;

  componentDidMount () {
    this.navigationWillFocusListener = this.props.navigation.addListener('willFocus', () => {
      AsyncStorage.getItem('user').then((user) => {
        if (user) this.replaceWithPreviousScreen();
      })
    });

    AuthenticateService.csrfToken().then((token) => {
      this.usersService = new UsersService({ csrfToken: token });
    });
  }

  componentWillUnmount () {
    this.navigationWillFocusListener.remove();
  }

  onLoginSubmit = (params) => {
    this.usersService
        .login(params)
        .then((user) => {
          AsyncStorage.setItem('user', JSON.stringify(user));
          this.context.pushFlashMessage({ title: 'Login', description: 'Correctly logged in', type: 'success' });
          this.replaceWithPreviousScreen();
        })
        .catch(() => {
          this.context.pushFlashMessage({ title: 'Error', description: 'Can\'t login', type: 'danger' });
        });
  }

  replaceWithPreviousScreen = () => {
    const previousScreen = this.props.navigation.state.params.previousScreen;

    if (previousScreen) {
      if (Array.isArray(previousScreen)) {
        this.props.navigation.replace(...previousScreen)
      } else {
        this.props.navigation.replace(previousScreen)
      }
    }
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
