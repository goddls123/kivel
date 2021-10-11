import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import { homeTab } from '../screen/home/homeTab';
import topTabNav from './topTabNav';
import { aa } from '../screen/chat/aa';
import { chatTab } from '../screen/chat/chatTab';
import { chattest1 } from '../screen/chat/chattest1';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();


export default function bottomTabNav() {
    return (
		<Tab.Navigator>
			<Tab.Screen name="홈" component={homeTab}	options={{headerShown : false}} />
			<Tab.Screen name="채팅" component={chatTab} options={{headerShown : false}} />
			<Tab.Screen name="기록" component={topTabNav} options={{headerShown : false}} />
			<Tab.Screen name="커뮤니티" component={chattest1} options={{headerShown : false}} />
	  	</Tab.Navigator>
    )
}



