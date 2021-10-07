import React from 'react'
import { View, StyleSheet, ViewStyle, TouchableOpacity, Text, Image } from 'react-native';
import { SIZE_HEIGHT } from '../../common/constants';

interface SocialLoginButtonProps {
	platform : 'naver' | 'kakao'
	onPress?() : void
}

export function SocialLoginButton(props : SocialLoginButtonProps) {
		return (
			<TouchableOpacity onPress={props.onPress}
				style={[styles.buttonStyle,{
					backgroundColor : props.platform === 'kakao' ? '#fee500' : '#1ec800'
				}]}
			>
				{
				props.platform === 'kakao' ?
					<Image source={require('../../../assets/icons/kakao.png')} resizeMode='center' ></Image>
				:	null
				}
				
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
    fontFamily: 'Pretendard',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: 'center',
  },
});