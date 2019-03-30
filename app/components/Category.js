import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 1,
    marginLeft: 1,
    marginRight: 1,
    padding: 15,
  },
  text: {
    color: 'black',
  },
});

const Category = (props => (
  <TouchableNativeFeedback onPress={props.pressHandler}>
    <View style={styles.container}>
      <Text style={styles.text}>Judul Lagu Berawal Dari Huruf {props.children}</Text>
    </View>
  </TouchableNativeFeedback>
));

Category.propTypes = {
  children: PropTypes.string.isRequired,
  pressHandler: PropTypes.func.isRequired,
};

export default Category;
