// @flow
import * as React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {Router, ListItem} from './components';
import {MainScreen} from './screens';
import {ReactNavigationScreen} from './screens/ReactNavigationScreen';

StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor('transparent');

export class App extends React.Component<{}> {
  render() {
    return (
      
      <Router
        initialNode={
          <ReactNavigationScreen />
            }
          
      />
    );
  }
}
