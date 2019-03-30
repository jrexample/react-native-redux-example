import React, { PureComponent } from 'react';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import AppNavigator from './navigators/AppNavigator';
import store from './store';
import { addListener } from './utils/redux';

class AppNav extends PureComponent {
  constructor(props) {
    super(props);
    this.onBackPress = this.onBackPress.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress() {
    const { dispatch, nav } = this.props;
    dispatch(NavigationActions.back());
    return nav !== this.props.nav;
  }

  render() {
    return (
      <AppNavigator navigation={
        addNavigationHelpers({
          dispatch: store.dispatch,
          state: this.props.nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = (state => ({
  nav: state.nav,
}));

AppNav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.objectOf(PropTypes.any).isRequired,
};

const AppWithInternalState = connect(mapStateToProps)(AppNav);

const App = () => (
  <Provider store={store}>
    <AppWithInternalState />
  </Provider>
);

export default App;
