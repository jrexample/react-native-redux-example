import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Menu from '../components/Menu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

class Home extends Component {
  static navigationOptions = {
    title: 'Example',
  };

  constructor(props) {
    super(props);

    this.online = this.online.bind(this);
    this.offline = this.offline.bind(this);
  }

  online() {
    this.props.navigation.navigate('Online');
  }

  offline() {
    this.props.navigation.navigate('Offline');
  }

  render() {
    return (
      <View style={styles.container}>
        <Menu title="Online" pressHandler={this.online} />
        <Menu title="Offline" pressHandler={this.offline} />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;
