import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { TextInput,View, StyleSheet, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { diary } from '../../types/DiaryTypes';
import { stackInterface } from '../../types/navigationParam';
import { SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import { Divider } from '../common/divider';
import { dummyData } from '../test/testData';
import { DiaryListView } from './component/DiaryListView';
// import {  } from 'react-native-gesture-handler';


interface diaryTabProps {
	navigation : StackNavigationProp<stackInterface,'Diary'>;
	route : RouteProp<stackInterface,'Diary'>;
}

export function diaryTab( props : diaryTabProps) {

		const diaryList : diary[]= dummyData;

		return (
			<View style={styles.container}>
				<View style={{alignItems : 'center', margin : 15}}>
				<TextInput style={{marginTop : 15, borderWidth : 1, borderRadius : 5, borderColor : "#E16F55", height : 40, width : SIZE_WIDTH * 0.5}}></TextInput>	
				<TextInput style={{marginTop : 15, borderWidth : 1, borderRadius : 5, borderColor : "#E16F55", height : 40, width : SIZE_WIDTH * 0.5}}></TextInput>	
				</View>

				<Divider height={2} color="#E5E5E5" />

				<View style={{flex : 1}}>
					<FlatList data={diaryList} renderItem={({item, index} : {item : diary, index : number})=>{
						return (
							<DiaryListView
								item={item}
								navigation={props.navigation}
							></DiaryListView>
						)
					}}
					/>
				</View>
			</View>
		);
}
const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : 'white'
	},


})