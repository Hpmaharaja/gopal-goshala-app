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

// // Import the react-native-sound module
import Sound from 'react-native-sound';

var whoosh = new Sound('choti_gaya.mp3', Sound.MAIN_BUNDLE, (error) => {
	  if (error) {
		    console.log('failed to load the sound', error);
		    return;
		  } 
		  // loaded successfully
		  console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
	});

export default class goshala1 extends Component {
	componentWillMount() {
	}

	componentDidMount() {

  	// Play the sound with an onEnd callback
  	setTimeout(function(){
  		whoosh.play((success) => {
		  if (success) {
		    console.log('successfully finished playing');
		  } else {
		    console.log('playback failed due to audio decoding errors');
		  }
		});
  	}, 10000);
  }

  render() {
    return (
      <Tabs />
    );
  }
}

AppRegistry.registerComponent('goshala1', () => goshala1);
