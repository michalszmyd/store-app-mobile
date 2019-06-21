import React from 'react';
import { Text, Animated } from 'react-native';

class FlashMessage extends React.Component {
  state = {
    slide: new Animated.Value(-25)
  }

  componentDidMount () {
    Animated.timing(
      this.state.slide,
      {
        toValue: 0,
        duration: 100
      }
    ).start();

    setTimeout(() => {
      Animated.timing(
        this.state.slide,
        {
          toValue: -125,
          duration: 100
        }
      ).start();
    }, 2400)
  }

  render () {
    const { title, description, type } = this.props;
    const { slide } = this.state;

    return (
      <Animated.View style={{ backgroundColor: typeEnum[type], ...styles.body, marginTop: slide }}>
        <Text style={{ textAlign: 'center' }}>{title}: {description}</Text>
      </Animated.View>
    )
  }
}

const typeEnum = {
  danger: '#FF937D',
  warning: '#EBD06C',
  success: '#7AF078'
}

const styles = {
  body: {
    width: '100%',
    padding: 12,
    justifyContent:  'center'
  },
}

export default FlashMessage;
