import { View,Text } from 'react-native';
import React, { Component } from "react";

class HomeScreen extends Component {
    render() {
       
        return (
            <View style={{flex:1,flexDirection: 'column',alignItems:'center',justifyContent:'center',backgroundColor:'#009192'}}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export default HomeScreen;
