import React from 'react';
import { View, Text } from 'react-native';

class FlashMessage extends React.Component {
  render () {
    const { title, description, type } = this.props;

    return (
      <View style={{ backgroundColor: typeEnum[type], ...styles.body }}>
        <Text>{title}: {description}</Text>
      </View>
    )
  }
}

const typeEnum = {
  danger: '#990000',
  warning: '#770088',
  success: '#009900'
}

const styles = {
  body: {
    width: '100%',
    padding: 15,
    alignItems: 'center'
  }
}

export default FlashMessage;