import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import { homeTab } from '../screen/home/homeTab';
import topTabNav from './topTabNav';
import { aa } from '../screen/chat/aa';
import { chatTab } from '../screen/chat/chatTab';
import { myPage } from '../screen/myPage/myPage';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();


export default function bottomTabNav() {
    return (
		<Tab.Navigator>
			<Tab.Screen name="홈" component={homeTab}	options={{headerShown : false}} />
			<Tab.Screen name="채팅" component={chatTab} options={{headerShown : false}} />
			<Tab.Screen name="기록" component={topTabNav} options={{headerShown : false}} />
			<Tab.Screen name="마이페이지" component={myPage} options={{headerShown : false}} />
	  	</Tab.Navigator>
    )
}



