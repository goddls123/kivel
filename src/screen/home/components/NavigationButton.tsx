import React from 'react'
import { View, StyleSheet, Image, ViewStyle, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface NavigationButtonProps {
	style? : ViewStyle
	imageStyle? : ViewStyle
	buttonName? : string
	onPress?() : void
	imageType : 'note' | 'homeWork' | 'trouble'
}

export function NavigationButton(props : NavigationButtonProps) {

		function showImage(imageType : string) {
			if(imageType == 'note')
				return <Image style={{width : '70%', height : '70%'}} source={require('../../../assets/icons/ic_growth.png')} />
			else if(imageType =='homeWork')
				return <Image style={{width : '70%', height : '70%'}} source={require('../../../assets/icons/ic_mission.png')} />
			else if(imageType =='trouble')
				return <Image style={{width : '70%', height : '70%'}} source={require('../../../assets/icons/ic_trouble.png')} />
		}

		return (
			<View style={[props.style,styles.container]}>
				<TouchableOpacity style={[props.imageStyle,styles.buttonContainer]} onPress={props.onPress}>
					{showImage(props.imageType)}
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