import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { DarkTheme } from '@react-navigation/native';
import { home } from './home';





const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();


export default function bottomTabNav() {
    return (
		<Tab.Navigator
			// tabBarOptions={{
			// 	showLabel : false,
			// 	style: {...styles.bottomTabStyle}
			// }}
			
			// labeled={false}
			// sceneAnimationEnabled={false}
			// activeColor="#e91e63"
			// inactiveColor="#95a5a6"
			// barStyle={{       
			// 	backgroundColor: 'white',
			// 	// position: 'absolute',
			// 	// overflow: 'visible',
			// 	// borderTopLeftRadius: 30,
			// 	// borderTopRightRadius: 30,
			// 	// height : '10%'
			// }}
		>
			<Tab.Screen name="Home" component={home}
				options={{
					tabBarIcon : ({focused}) => (
						<View style={{alignItems : 'center', justifyContent : 'center',}}>
							{/* <Image
								source={require('../assets/icons/home.png')}
								resizeMode='contain'
								style={{width : 25, height : 25, tintColor : focused ? '#e32f45' : '#748c94'}}
							/>	 */}
							{/* {console.log("Tabnav : ", focused)} */}
						</View>
					)
				}}
				/>
			<Tab.Screen name="Home2" component={home} 
							options={{
								tabBarIcon : ({focused}) => (
									<View style={{alignItems : 'center', justifyContent : 'center',}}>
										<Image
											source={require('../assets/icons/home.png')}
											resizeMode='contain'
											style={{width : 25, height : 25, tintColor : focused ? '#e32f45' : '#748c94'}}
										/>
									</View>
								)
							}}/>
			<Tab.Screen name="Home3" component={home} 
				options={{
					tabBarIcon : ({focused}) => (
						<View style={{alignItems : 'center', justifyContent : 'center',}}>
							<Image
								source={require('../assets/icons/home.png')}
								resizeMode='contain'
								style={{width : 25, height : 25, tintColor : focused ? '#e32f45' : '#748c94'}}
							/>
						</View>
					)
				}}
				/>
			<Tab.Screen name="Home4" component={home} 
				options={{
					tabBarIcon : ({focused}) => (
						<View style={{alignItems : 'center', justifyContent : 'center',}}>
							<Image
								source={require('../assets/icons/home.png')}
								resizeMode='contain'
								style={{width : 25, height : 25, tintColor : focused ? '#e32f45' : '#748c94'}}
							/>
						</View>
					)
				}}
				/>
			<Tab.Screen name="Home5" component={home} 
				options={{
					tabBarIcon : ({focused}) => (
						<View style={{alignItems : 'center', justifyContent : 'center',}}>
							<Image
								source={require('../assets/icons/home.png')}
								resizeMode='contain'
								style={{width : 25, height : 25, tintColor : focused ? '#e32f45' : '#748c94'}}
							/>
						</View>
					)
				}}
				/>

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


