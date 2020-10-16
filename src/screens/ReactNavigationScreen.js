// @flow
import * as React from 'react';
import {View, Platform} from 'react-native';
import {Icon} from '../components';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {createAppContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MainScreen from './MainScreen';
// import { DummyScreen } from "./DummyScreen";
import TilesScreen from './TilesScreen';
import {DetailScreen} from './DetailScreen';
import {PagerScreen} from './PagerScreen';
import {CardScreen} from './CardScreen';
import {TestsScreen} from './TestsScreen';
import {TestScreen} from './TestScreen';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import Details from './Details';
import CheckOut from './CheckOut/index';
import OrderHistory from './OrderHistory/index';
import {fadeIn, fromRight} from '../transitions';
import {Colors} from '../themes'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import productsReducer from '../store/data.reducer';
const rootReducer = combineReducers({
  products: productsReducer,
})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const screens = {
  Tiles: TilesScreen,
  Detail: DetailScreen,
  Details:Details,
  
  Cart:CartScreen,
  Pager: PagerScreen,
  Card: CardScreen,
  CheckOut:CheckOut,
  OrderHistory:OrderHistory,
  Tests: TestsScreen,
  Test: TestScreen,
};

function isTabBarVisible(navigation: any): boolean {
  const currentRoute =
    navigation.state.routes[navigation.state.routes.length - 1];
  switch (currentRoute.routeName) {
    case 'Card':
    case 'Detail':
    case 'Pager':
      return false;
    default:
      return true;
  }
}

const stackNavigator = createSharedElementStackNavigator(
  createStackNavigator,
  {
    Home: HomeScreen,
    ...screens,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    //transitionConfig: () => fadeIn(5000),
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" size={18} color={tintColor} />
      ),
      tabBarVisible: isTabBarVisible(navigation),
    }),
    transitionConfig: Platform.OS === 'android' ? () => fromRight() : undefined,
  }
);

const modalNavigator = createSharedElementStackNavigator(
  createStackNavigator,
  {
    Modal: MainScreen,
    ...screens,
  },
  {
    initialRouteName: 'Modal',
    mode: 'modal',
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Modal',
      tabBarIcon: ({tintColor}) => (
        <Icon name="popup" size={18} color={tintColor} />
      ),
      tabBarVisible: isTabBarVisible(navigation),
    }),
  }
);

const fadeNavigator = createSharedElementStackNavigator(
  createStackNavigator,
  {
    Mart: MainScreen,
    ...screens,
  },
  {
    initialRouteName: 'Mart',
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Mart',
      tabBarIcon: ({tintColor}) => (
        <Icon name="price-tag" size={18} color={tintColor} />
      ),
      tabBarVisible: isTabBarVisible(navigation),
    }),
    transitionConfig: () => fadeIn(0, true),
  }
);

export const tabNavigator = createBottomTabNavigator({
  stack: stackNavigator,
 
  fade: fadeNavigator,
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarOptions: {
      style: {
        backgroundColor: Colors.themeColor,
       },
      activeTintColor: Colors.silver,
      inactiveTintColor: Colors.steel,
      
    },

  })});

const AppContainer = createAppContainer(tabNavigator);

type PropsType = {};

export class ReactNavigationScreen extends React.Component<PropsType> {
  render() {
    return (
      <Provider store={store}>
      <View
        style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}>
        <AppContainer />
      </View>
      </Provider>
    );
  }
}
