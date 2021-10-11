import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { stackInterface } from '../../types/navigationParam';
import { Divider } from '../common/divider';

interface LoginSplashProps {
	navigation: StackNavigationProp<stackInterface, 'LoginSplash'>;
}

export function LoginSplash(props : LoginSplashProps) {
		
		React.useEffect(() => {
		setTimeout(() => {
			props.navigation.navigate('EnterChildInfo')
		}, 2000);
		}, []);

		return (
			<SafeAreaView style={styles.container}>
				<Divider height={"36%"} />
				<Text style={styles.boldText}>회원가입이 완료되었습니다!</Text>
				<Divider height={"4%"} />
				<Text style={styles.text}>서비스 이용을 위해</Text>
				<Text style={styles.text}>우리아이 정보를 입력해주세요 :)</Text>
			</SafeAreaView>
		);
}
const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : 'white',
		alignItems : 'center',
	},
	boldText : {
		fontSize: 28,
		fontWeight: "bold",
		color : 'black'
	},
	text : {
		fontSize : 18,
		fontWeight : "500",
		color : "#707070"
	}

})