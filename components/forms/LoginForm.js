import React from 'react';
import { View, Button, Text, TextInput, KeyboardAvoidingView } from 'react-native';

class LoginForm extends React.Component {
  state = {
    login: '',
    password: ''
  }

  onSubmit = () => {
    const { login, password } = this.state;

    this.props.onSubmit({ login: login, password: password });
  }

  onChangeLogin = (value) => {
    this.setState({
      login: value
    })
  }

  onChangePassword = (value) => {
    this.setState({
      password: value
    })
  }

  render () {
    const { login, password } = this.state;

    return (
      <KeyboardAvoidingView style={styles.main} behavior="padding" enabled>
        <View>
          <Text style={styles.header}>Log in</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={this.onChangeLogin}
          value={login}
          autoCompleteType="off"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={this.onChangePassword}
          value={password}
          autoCompleteType="password"
          secureTextEntry={true}
        />
        <View style={styles.buttonView}>
          <Button
            title="Log in"
            onPress={this.onSubmit}
            color="#0c0c0c"
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = {
  header: {
    fontSize: 24
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 12,
    marginTop: 15,
    fontSize: 15,
    width: '80%',
    borderColor: '#ababab',
    backgroundColor: '#fafafa'
  },
  buttonView: {
    marginTop: 12,
    borderWidth: 0.5,
    borderColor: '#1c1c1c',
    backgroundColor: 'rgba(255,255,255,0)',
    width: '80%'
  }
}

export default LoginForm;