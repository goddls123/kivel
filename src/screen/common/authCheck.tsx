import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { USER_LOGIN } from '../../connection/queries';
import { logInWithKakao, logInWithNaver } from '../login/service/loginService';
import { Button } from './components/Button';
import { MAIN_COLOR } from './constants';

interface authCheckProps {
	navigation: any;

}

export function authCheck(props : authCheckProps) {
	    // splash
		const [login, {data, error, loading}] = useMutation(USER_LOGIN)
		const [loginState, setLoginState] = React.useState<any>('Register')
		const [rendering, setRendering] = React.useState<boolean>(false)
		async function getLoginInfo(){
			const token = await AsyncStorage.getItem('ACT');
			const platform = await AsyncStorage.getItem('platform')
	
			if(platform == 'K'){
				logInWithKakao()
				.then(() => login().then(response => console.log(response)))
				.catch(e => {
					if(e.message == 'Network request failed'){
						return 'Register'
					}}
				)
			}
			if(platform == undefined){
				setRendering(true)
			}
		}
		React.useEffect(() => {
			async function getLoginInfo(){
				const token = await AsyncStorage.getItem('ACT');
				const platform = await AsyncStorage.getItem('platform')
		
				if(platform == 'K'){
					logInWithKakao()
					.then(() => login()
								.then(response => props.navigation.navigate('Home'))
								.catch(e => props.navigation.navigate('Register')))
					.catch(e => 
						props.navigation.navigate('Register')
					)
				}
				else if(platform == 'N'){
					logInWithNaver()
				}
				else{
					props.navigation.navigate('Register')
				}
			}
			getLoginInfo()
		},[])
		
		
		return (
			<SafeAreaView style={{flex : 1 ,justifyContent : 'center'}}>
				<ActivityIndicator size="large"></ActivityIndicator>
			</SafeAreaView>
		);
}
const styles = StyleSheet.create({})