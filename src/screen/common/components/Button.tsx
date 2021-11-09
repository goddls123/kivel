import React from 'react'
import { View, StyleSheet, ViewStyle, TouchableOpacity, Text } from 'react-native';
import { SIZE_HEIGHT } from '../constants';

interface ButtonProps {
	style? : ViewStyle
	text : string
	textColor : string
	onPress?() : void
	disable? : boolean
}

export function Button(props : ButtonProps) {
		return (

			<TouchableOpacity onPress={props.onPress}
				style={[styles.buttonStyle,props.style]}
				disabled={props.disable}>

				<Text style={[styles.textStyle,{color : props.textColor}]}>{props.text}</Text>
			</TouchableOpacity>
		);
}
const styles = StyleSheet.create({
  buttonStyle: {
	justifyContent : 'center',
    width: '100%',
    borderRadius: 24,
    height: SIZE_HEIGHT * 0.07,
	marginBottom : 10
  },
  textStyle: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: 'center',
  },
});
