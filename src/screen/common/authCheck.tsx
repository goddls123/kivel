import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { USER_LOGIN } from '../../connection/queries';
import { logInWithKakao } from '../login/service/loginService';
import { Button } from './components/Button';
import { MAIN_COLOR } from './constants';

interface authCheckProps {
	navigation: any;

}

export function authCheck(props : authCheckProps) {
	    // splash
		const [login, {data, error, loading}] = useMutation(USER_LOGIN)
		
	
		// async function loginCheck() {
		// 	const token = await AsyncStorage.getItem('ACT');
		// 	const platform = await AsyncStorage.getItem('platform');
			

		// 	if(token && platform == 'K'){
		// 		logInWithKakao()
		// 		.then(() => login()
		// 					.then(response => {
								
		// 					}).catch(() => {
		// 						console.log('오ㅑㅐ?')
		// 						result = false
		// 					})
		// 		)
		// 		.catch(() => {
		// 			console.log('대체애??')
		// 			result = false
		// 		})
		// 	}
		// 	else {
		// 		console.log('설마 여기??')
		// 		result = false
		// 	}
		// 	console.log('그니깐 이게더 빠른거네 ㅋㅋ')
		// 	return result
		// }
		
		React.useEffect(() => {
			// loginCheck().then(console.log)
				// loginCheck().then(result => {
				// 	props.navigation.navigate(result? 'Home' : 'Register')
				// })
		},[])


		return (
			<SafeAreaView style={{flex : 1 ,justifyContent : 'center'}}>
				<ActivityIndicator size="large"></ActivityIndicator>

				<Button text={"aa"} textColor="black" style={{backgroundColor : MAIN_COLOR}} onPress={() =>props.navigation.navigate('Home')}></Button>
				<Button text={"aa"} textColor="black" style={{backgroundColor : MAIN_COLOR}} onPress={() =>props.navigation.navigate('Register')}></Button>

			</SafeAreaView>
		);
}
const styles = StyleSheet.create({})