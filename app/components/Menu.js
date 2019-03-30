import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: '33.3%',
    height: 150,
  },
  item: {
    padding: 15,
  },
});

const Menu = (props => (
  <View style={styles.container}>
    <View style={styles.item}>
      <Button title={props.title} onPress={props.pressHandler} />
    </View>
  </View>
));

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  pressHandler: PropTypes.func.isRequired,
};

export default Menu;
