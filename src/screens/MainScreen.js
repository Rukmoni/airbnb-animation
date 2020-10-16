// @flow
import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Router,  Colors, Heading3} from '../components';
import TilesScreen from './TilesScreen';

import {CardScreen} from './CardScreen';

import {fadeIn, fromRight} from '../transitions';
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: Platform.select({
    ios: {
      flex: 1,
      backgroundColor: Colors.empty,
    },
    android: {
      flex: 1,
    },
  }),
  back: {
    color: Colors.blue,
    marginLeft: 20,
  },
});

type PropsType = {
  navigation?: any,
  footer?: any,
};

  class MainScreen extends React.Component<PropsType> {
  static navigationOptions = {
    title: 'React Navigation',
    headerLeft: () => (
      <TouchableOpacity onPress={() => Router.pop()}>
        <Heading3 style={styles.back}>Back</Heading3>
      </TouchableOpacity>
    ),
  };

  render() {
    
   const {footer,navigation}=this.props
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" animated />
      
       
         
      <TilesScreen
          type="card"
          title="Mart"
          transitionConfig={fadeIn(0, true)}
          DetailComponent={CardScreen}
         rootNavigation={navigation}
        />
       
      
    
        
      
      </View>
    );
  }


}
function bindAction(dispatch) {
  return {
  };
}

function mapStateToProps(state) {
  const { products } = state
 
  return products;
 
} 

export default connect(mapStateToProps, bindAction)(MainScreen);
//export default MainScreen;