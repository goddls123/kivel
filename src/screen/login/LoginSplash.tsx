import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { stackInterface } from '../../types/navigationParam';
import { GLOBAL_MARGIN_HORIZON, MAIN_COLOR } from '../common/constants';
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
				<View style={styles.innerContainer}>
					<Divider height={"36%"} color="white"/>
					<View style={{flexDirection : 'row'}}>
					<Text style={[styles.boldText, {color : MAIN_COLOR}]}>회원가입</Text>
					<Text style={styles.boldText}>이 완료되었습니다!</Text>
					</View>
					
					<Divider height={"4%"} />
					<Text style={styles.text}>서비스 이용을 위해</Text>
					<Text style={styles.text}>우리아이 정보를 입력해주세요 :)</Text>
				</View>
			</SafeAreaView>
		);
}
const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : 'white',

	},
	innerContainer :{
		flex : 1,
		marginHorizontal : GLOBAL_MARGIN_HORIZON,
		alignItems : 'center',
	},
	boldText : {
		fontSize: 26,
		color : 'black',
		fontFamily : "Cafe24Ssurround",
	},
	text : {
		fontFamily : 'Pretendard-Medium',
		fontSize : 18,
		color : "#707070"
	}

})