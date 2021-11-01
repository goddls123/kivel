import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Text } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';
import Icon from 'react-native-vector-icons/Ionicons'
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../../types/navigationParam';
import { RouteProp } from '@react-navigation/native';
import { getDateYMD } from '../../common/service/dateService';

interface noticeDetailProps {
	navigation: StackNavigationProp<stackInterface>;
    route: RouteProp<stackInterface,'NoticeDetail'>;
}

export function noticeDetail(props : noticeDetailProps) {
		return (
			<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>
				<Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
				<View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
				<TouchableOpacity
					onPress={() => props.navigation.goBack()}>
					<Icon name="arrow-back" style={{fontSize: 30, color : 'black'}}></Icon>
				</TouchableOpacity>
				</View>
				<View style={styles.headerTextContainer}>
					<Text style={styles.headerTextStyle}>{props.route.params.title}</Text>
					<Text style={{fontSize : 14, color : MAIN_COLOR}}>{props.route.params.nickName}  <Text style={{fontSize : 14, color : 'black'}}> l    {getDateYMD(props.route.params.date,'.')}</Text></Text>
				</View>
				
				<Divider height={1} color='#d5d5d5'></Divider>

				<ScrollView>
					<Text style={{fontSize: 16, fontWeight: "500", color : 'black', marginTop : GLOBAL_MARGIN_VERTICAL}}>{props.route.params.content}</Text>
				</ScrollView>
				
				
			</View>
		
    


				

			
			

		
		</SafeAreaView>
		);
}
const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#ffffff',
		},
		innerContainer: {
			marginHorizontal: SIZE_WIDTH * 0.05,
		},
		headerTextContainer: {
			marginTop: SIZE_HEIGHT * 0.03,
			marginBottom: GLOBAL_MARGIN_VERTICAL,
		},
		headerTextStyle: {
			fontFamily: 'Pretendard',
			fontSize: 18,
			fontWeight: 'bold',
			color: '#111111',
			marginBottom : 10,
		},

})