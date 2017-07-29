import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class goshala1 extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<View style={styles.logoContainer}>
      		<Image style={styles.logo} source={require('../images/cowlogo.jpg')} />

      		<Text style={styles.title}>Welcome to Gopal Goshala</Text>
      	</View>
      	<View>
      		<Text style={styles.subtitle}>Powered by Gopal Goshala</Text>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: { 
	  	backgroundColor: '#2c3e50', 
	  	flex: 1, 
	  	justifyContent: 'center', 
	  	alignItems: 'center'
	},
	logoContainer: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 100,
		height: 100
	},
	title: {
		color: 'white',
		marginTop: 10,
		textAlign: 'center',
		opacity: 0.9
	},
	subtitle: {
		color: 'white',
		fontWeight: '200',
		opacity: 0.3
	}
});