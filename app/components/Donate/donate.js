import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Linking
} from 'react-native';

export default class goshala1 extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<View style={styles.header}>
      		<Text style={styles.headerText}>Gopal Goshala</Text>
      	</View>
      	<View style={styles.logoContainer}>
      		<Image style={styles.logo} source={require('../../images/donate.jpg')} />
      		<Text style={styles.title}>We are helping cows by providing a home for them, growing grass for them, 
      		and providing water for them via water fountains. You can also help cows by doing the same in your own 
      		Town/City or you could support our work and we will be able to help more cows with your funding. 
      		The choice is yours, everything we have is by the grace of Lord Krishna. 
      		We should do something to help His cows, our mothers. This is for our own good and for the good of others and the whole planet.</Text>

      		<Text style={styles.action}>Let us know how you want to help. With your help, more cows can be helped.</Text>

      		<View style={styles.donateButton}>
	      		<Button
				  onPress={(event) => {
		            Linking.openURL('http://gopalgoshala.org');
				  }}
				  title="Donate"
				  color="#3498db"
				  accessibilityLabel="Donate Today"
				/>
			</View>
      	</View>

      	<View>
      		<Text style={styles.subtitle}>Powered by Gopal Goshala</Text>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	header: {
		alignSelf: 'stretch',
		height: 20,
		backgroundColor: '#8e44ad',
		justifyContent: 'center'
	},
	headerText: {
		color: 'white',
		justifyContent: 'center',
		textAlign: 'center'
	},
	container: { 
	  	backgroundColor: '#2c3e50', 
	  	flex: 1, 
	  	justifyContent: 'center', 
	  	alignItems: 'center'
	},
	logoContainer: {
		alignItems: 'center',
		flex: 1
	},
	logo: {
		alignSelf: 'stretch',
		height: 300
	},
	title: {
		color: 'white',
		marginTop: 10,
		fontSize: 15,
		textAlign: 'center',
		opacity: 0.9
	},
	action: {
		color: 'white',
		marginTop: 10,
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'center',
		opacity: 0.9
	},
	donateButton: {
		marginTop: 10,
		width: 250
	},
	subtitle: {
		color: 'white',
		fontWeight: '200',
		opacity: 0.4
	}
});