import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class CategoryPanel extends React.Component {
  randomizeColorSet = () => {
    const length = gradientSetup.length;
    const index = Math.floor(Math.random() * length);

    return gradientSetup[index];
  }

  onCategorySelect = () => {
    this.props.onCategorySelect(this.props.id);
  }

  render () {
    const { name } = this.props;

    return (
      <View onPress={this.onCategorySelect}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: -1 }}
          colors={this.randomizeColorSet()}
          style={styles.board}>
          <Text onPress={this.onCategorySelect} style={styles.name}>{name}</Text>
        </LinearGradient>
      </View>
    )
  }
}

const gradientSetup = [
  ['#ffecd2', '#fcb69f'],
  ['#84fab0', '#8fd3f4'],
  ['#a6c0fe', '#f68084'],
  ['#5ee7df', '#b490ca'],
  ['#d299c2', '#fef9d7'],
  ['#cd9cf2', '#f6f3ff'],
  ['#9795f0', '#fbc8d4']
]

const styles = {
  board: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    width: '80%',
    height: 120,
    flex: 1,
    flexDirection: 'row-reverse'
  },
  name: {
    color: '#eaeaea',
    textShadowColor: '#585858',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    fontSize: 19
  }
}

export default CategoryPanel;