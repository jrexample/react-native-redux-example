import React, { Component } from 'react';
import { View } from 'react-native';
import Category from '../../containers/Category';

class Online extends Component {
  static navigationOptions = {
    title: 'Kategori',
  };

  render() {
    return (
      <View>
        <Category />
      </View>
    );
  }
}

export default Online;
