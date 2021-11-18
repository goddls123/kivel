import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface serverProblemProps {

}

export function serverProblem(props : serverProblemProps) {
		return (
			<SafeAreaView style={{flex : 1 , justifyContent : 'center', alignItems : 'center'}}>
				<Text style={{fontSize : 20, fontFamily : 'Cafe24Ssurround', color : 'red'}}>서버 장애로 일시적으로 이용하실 수 없습니다.</Text>
			</SafeAreaView>
		);
}
const styles = StyleSheet.create({})