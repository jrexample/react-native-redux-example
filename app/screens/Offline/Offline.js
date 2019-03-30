import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Offline extends Component {
  static navigationOptions = {
    title: 'Offline',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Offline</Text>
      </View>
    );
  }
}

export default Offline;
