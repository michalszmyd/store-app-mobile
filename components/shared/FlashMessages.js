import React from 'react';
import { View, FlatList } from 'react-native';
import FlashMessage from './FlashMessage';

export default function FlashMessages ({ messages }) {
  return (
    <View style={styles.container}>
      { messages.map((message) => (
        <FlashMessage key={message.id} {...message} />
      )) }
    </View>
  )
}

const styles = {
  container: {
    marginTop: 25,
    backgroundColor: 'rgba(0,0,0,1)'
  }
}
