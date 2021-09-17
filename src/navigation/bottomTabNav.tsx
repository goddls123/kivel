import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { home } from './home';





const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();


export default function bottomTabNav() {
    return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={home}/>

	  </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
	bottomTabStyle : {
		position : 'absolute',
		bottom : '2%',
		left : '5%',
		right : '5%',
		borderRadius : 15,
		height : '10%',
		shadowColor : '#7F5DF0',
		shadowOffset:{
			width : 0,
			height: 10,
		},
		shadowOpacity : 0.25,
		shadowRadius : 3.5,
		elevation : 5
	}
	
})


