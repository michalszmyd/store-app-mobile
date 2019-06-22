import React from 'react';
import { View } from 'react-native';
import FlashMessage from './FlashMessage';
import AppContext from '../../contexts/AppContext';

export default class FlashMessages extends React.Component {
  static contextType = AppContext;

  render () {
    const { flashMessages } = this.context;

    return (
      <View style={styles.container}>
        { flashMessages.map((message) => (
          <FlashMessage key={message.id} {...message} />
        )) }
      </View>
    )
  }
}

const styles = {
  container: {
    backgroundColor: 'rgba(0,0,0,1)'
  }
}
