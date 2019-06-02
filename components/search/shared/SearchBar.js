import React from 'react';
import { View, TextInput } from 'react-native';

export default function SearchBar ({ onQueryChange }) {
  return (
    <View style={styles.search}>
      <TextInput
        onChangeText={onQueryChange}
        placeholder="Type to search"
        style={styles.input}
      />
    </View>
  )
}

const styles = {
  search: {
    padding: 12,
  },
  input: {
    padding: 12,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#dadada'
  }
}