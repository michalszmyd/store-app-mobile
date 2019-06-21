import React from 'react';
import { View } from 'react-native';
import FlashMessage from './FlashMessage';

export default function FlashMessages ({ messages }) {
  return (
    <View>
      { messages.map((message) => (
        <FlashMessage key={message.id} {...message} />
      )) }
    </View>
  )
}
