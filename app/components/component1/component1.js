import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  DrawerLayoutAndroid,
  StatusBar,
  Navigator,TouchableHighlight
} from 'react-native';
import Component2 from '../component2/component2'

export default class Component1 extends Component {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
        this.state = {
          skhidden : false
        }
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
      var navigationView =(

        <View style={{flex: 1, backgroundColor: '#fff'}}>
             <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Drawer</Text>
        </View>
      );
        return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        onDrawerOpen = {() => {
          this.setState({ skhidden : true })
          console.log(this.state.skhidden);
      }}
        onDrawerClose = { () => {this.setState({skhidden : false});console.log(this.state.skhidden);}  }
        renderNavigationView={() => navigationView}
        >

            <Component2 sbstate = {this.state.skhidden}/>

      </DrawerLayoutAndroid>

        );
    }
}

AppRegistry.registerComponent('Component1', () => Component1);
