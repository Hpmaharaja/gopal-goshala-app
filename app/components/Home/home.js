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
      	<View style={styles.header}>
      		<Text style={styles.headerText}>Gopal Goshala</Text>
      	</View>
      	<View style={styles.logoContainer}>
      		<Image style={styles.logo} source={require('../../images/cowlogo.jpg')} />
      		<Text style={styles.title}>The Cow is the most important living being for human beings. 
      		The body can be maintained by any kind of foodstuff, but Cow’s milk is particularly essential 
      		for developing the finer tissues of the human brain so that one can understand the intricacies of transcendental knowledge. 
      		Civilized men live on foodstuffs comprising fruits, vegetables, grains, sugar, and milk.
      		The Bull helps on the farm to plough the land in the agricultural process of producing grains etc., 
      		and thus in one sense the Bull is the father of humankind, whereas the Cow is the Mother, for she supplies milk to humans. 
      		The kind hearted humans will appreciate and give all protection to the Bulls and Cows.</Text>
      		<Text style={styles.action}>Help your mother, who provides you with milk and related
      		products (cheese, ice cream, kurd etc..) daily, the cow</Text>
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
	subtitle: {
		color: 'white',
		fontWeight: '200',
		opacity: 0.4
	}
});