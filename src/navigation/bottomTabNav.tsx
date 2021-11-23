import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import { homeTab } from '../screen/home/homeTab';
import topTabNav from './topTabNav';
import { aa } from '../screen/chat/aa';
import { chatTab } from '../screen/chat/chatTab';
import { myPage } from '../screen/myPage/myPage';
import { recordTab } from '../screen/record/recordTab';
import Icon from 'react-native-vector-icons/Ionicons'
import { MAIN_COLOR } from '../screen/common/constants';

const Tab = createMaterialBottomTabNavigator();


export default function bottomTabNav() {
    return (
		<Tab.Navigator barStyle={{ backgroundColor: 'white' }}>

			<Tab.Screen 
			name="홈" 
			component={homeTab}	
			options={{
				tabBarIcon : ({ focused }) => 
				<Icon name="home-outline" style={{fontSize : 25, color : focused ? MAIN_COLOR : '#d5d5d5'}} />
			}} />

			<Tab.Screen name="채팅" component={chatTab} 
			options={{
				tabBarIcon : ({ focused }) => 
				<Icon name="chatbubbles-outline" style={{fontSize : 25, color : focused ? MAIN_COLOR : '#d5d5d5'}} />
			}} />
			
			<Tab.Screen 
			name="기록하기" 
			component={recordTab} 
			options={{
				tabBarIcon : ({ focused }) => 
				<Icon name="reader-outline" style={{fontSize : 25, color : focused ? MAIN_COLOR : '#d5d5d5'}} />
			}} />

			<Tab.Screen 
			name="마이페이지"
			component={myPage} 
			options={{
				tabBarIcon : ({ focused }) => 
				<Icon name="heart-outline" style={{fontSize : 25, color : focused ? MAIN_COLOR : '#d5d5d5'}} />
			}} />

	  	</Tab.Navigator>
    )
}
