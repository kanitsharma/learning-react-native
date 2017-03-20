
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  DrawerLayoutAndroid,
  StatusBar,
  Navigator,TouchableHighlight,nativeImageSource
} from 'react-native';

export default class Component2 extends Component {

  constructor(props) {
      super(props);
      this.state = {
        shidden : false
      }
  }
    render() {
        return (
          <View>

            <StatusBar
              backgroundColor="rgba(0,0,255,0.6)"
              barStyle="light-content"
              hidden = {this.props.sbstate}
            />

            <ToolbarAndroid
                title = 'Toolbar'
                titleColor='white'
                style = {{ height: 56,backgroundColor: 'blue'}}
            />

          </View>

        );
    }

}

AppRegistry.registerComponent('Component2', () => Component2);
