import AppNavigator from '../navigators/AppNavigator';

const initialState = {
  index: 0,
  routes: [
    { key: 'Home', routeName: 'Home' },
  ],
};

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navReducer;
