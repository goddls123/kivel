import React from 'react'
import { View, StyleSheet, Image, ViewStyle, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface NavigationButtonProps {
	style? : ViewStyle
	imageStyle? : ViewStyle
	buttonName? : string
	onPress?() : void
}

export function NavigationButton(props : NavigationButtonProps) {


		return (
			<View style={[props.style,styles.container]}>
				<TouchableOpacity style={[props.imageStyle,styles.buttonContainer]} onPress={props.onPress}>
					
				</TouchableOpacity>
				<Text style={styles.textStyle}>{props.buttonName || "웨베베베베"}</Text>
			</View>
		);
}
const styles = StyleSheet.create({
	container : {
		alignItems : 'center',
		justifyContent : 'flex-end'
	},
	textStyle:{
		fontSize : 15
	},
	buttonContainer :{
		justifyContent : 'center',
		alignItems : 'center',
		marginBottom : 10,
	}
})