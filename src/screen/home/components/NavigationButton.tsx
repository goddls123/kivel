import React from 'react'
import { View, StyleSheet, Image, ViewStyle, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface NavigationButtonProps {
	width : number,
	height : number,
	style? : ViewStyle,
	buttonName? : string
	onPress?() : void
}

export function NavigationButton(props : NavigationButtonProps) {


		return (
			<TouchableOpacity 
			style={[{ height : props.width, width : props.height }, styles.buttonContainer]}
			onPress={props.onPress}
			>
				
					<Image 
					source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIecAKcGp6Qu9y1PTuNjYSRL4dAChUHDAPQ&usqp=CAU"}}
					style={{width : '80%' , height: '80%'}}
					resizeMode='contain'
					/>
				
				<Text>{props.buttonName || "웨베베베베"}</Text>

				
			</TouchableOpacity>
		);
}
const styles = StyleSheet.create({
	buttonContainer :{
		justifyContent : 'center',
		alignItems : 'center',
	}
})