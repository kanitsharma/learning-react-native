import React, { Component } from 'react';
import Component1  from './app/components/component1/component1';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class rn1 extends Component {
  constructor (){
    super();
    this.state = {
      name : "component1"
    }
  }
  render() {
    return (
        <Component1 />
    );
  }
}

AppRegistry.registerComponent('rn1', () => rn1);
