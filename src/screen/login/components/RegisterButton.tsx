import React from 'react'
import { View, StyleSheet, ViewStyle, TouchableOpacity, Text } from 'react-native';
import { SIZE_HEIGHT } from '../../common/constants';

interface RegisterButtonProps {
	style? : ViewStyle
	text : string
	textColor : string
	onPress?() : void
}

export function RegisterButton(props : RegisterButtonProps) {
		return (
			<TouchableOpacity onPress={props.onPress}
				style={[styles.buttonStyle,props.style]}
			>
				<Text style={[styles.textStyle,{color : props.textColor}]}>{props.text}</Text>
			</TouchableOpacity>
		);
}
const styles = StyleSheet.create({
  buttonStyle: {
	justifyContent : 'center',
    width: '100%',
	borderWidth : 1,
	borderColor : "#ff8a5c",
    borderRadius: 24,
    height: SIZE_HEIGHT * 0.07,
	marginBottom : 10
  },
  textStyle: {
    fontFamily: 'Pretendard',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: 'center',
  },
});