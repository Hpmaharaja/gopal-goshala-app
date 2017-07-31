import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
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
      		<Image style={styles.logo} source={require('../../images/about.jpg')} />

      		<ScrollView>
	      		<Text style={styles.title}>Gopal Goshala was setup in March 2016 to provide a home for cows, and grass for cows outside the Goshala. 
	      		We have also placed more than 23 water fountains for cows to drink water from in and around the Vallabh Vidhya Nagar and Karamsad areas.
	      		</Text>

	      		<Text style={styles.title}>
				The size of the Goshala farm is 51.5 gunthas or 1.287 acres.
				</Text>

				<Text style={styles.title}>
				The inspiration for opening the Goshala was developed by listening to many pure devotees of Lord Krishna, 
				including His Divine Grace Swami Srila Prahbupada, Gopalmani Maharaj, Devkinandan Maharaj, Rajendra Das and others.
				</Text>

	      		<Text style={styles.action}>We hope that others will also setup their own Goshala or support others with Goshalas. 
	      		There are millions of cows waiting for devotees of Lord Krishna to wake up and do something practical to help and protect them. Please do some cow sewa in your own Town/City according to the best of your capacity and abilities. 
	      		Be miserly with yourself but don’t be miserly with others, especially with our mothers, the cows.</Text>
	      	</ScrollView>
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
		backgroundColor: '#2c3e50',
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