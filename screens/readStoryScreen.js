import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Read Story</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
