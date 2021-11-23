import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
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

		return (
			<SafeAreaView style={{flex : 1 ,justifyContent : 'center'}}>
				<ActivityIndicator size="large"></ActivityIndicator>

				<Button text={"aa"} textColor="black" style={{backgroundColor : MAIN_COLOR}} onPress={() =>props.navigation.navigate('Home')}></Button>
				<Button text={"aa"} textColor="black" style={{backgroundColor : MAIN_COLOR}} onPress={() =>props.navigation.navigate('Register')}></Button>

			</SafeAreaView>
		);
}
const styles = StyleSheet.create({})