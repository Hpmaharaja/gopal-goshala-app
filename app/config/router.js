import React from 'react';
import { TabNavigator } from 'react-navigation';

import home from '../components/Home/home';
import about from '../components/About/about';
import donate from '../components/Donate/donate';

export const Tabs = TabNavigator ({
	Home: {
		screen: home
	},
	About: {
		screen: about
	},
	Donate: {
		screen: donate
	}
});