/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Tabs } from './app/config/router';

export default class goshala1 extends Component {
  render() {
    return (
      <Tabs />
    );
  }
}

AppRegistry.registerComponent('goshala1', () => goshala1);
