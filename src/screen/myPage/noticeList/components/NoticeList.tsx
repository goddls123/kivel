import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stackInterface } from '../../../../types/navigationParam';
import { noticeType } from '../../../../types/types';
import { GLOBAL_MARGIN_HORIZON, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../../common/constants';
import { getDateYMD } from '../../../common/service/dateService';

interface noticeListProps {
	data : noticeType
}

export function NoticeList(props : noticeListProps) {
		return (
			<View style={styles.container}>
				<Text style={styles.text1}>{props.data.title}</Text>
				<Text style={styles.text2}>{props.data.nickName}  <Text style={styles.text3}>|  {getDateYMD(props.data.date,'.')}</Text></Text>
			</View>
		);
}
const styles = StyleSheet.create({
	container : {marginHorizontal : GLOBAL_MARGIN_HORIZON, height : SIZE_WIDTH * 0.25, justifyContent : 'center', borderBottomWidth : 1, borderBottomColor : '#ededed'},
	text1 : {fontSize : 16, color : 'black' , marginBottom : 10},
	text2 : {fontSize : 16, color : MAIN_COLOR},
	text3 : {fontSize : 16, color : 'black'},


})