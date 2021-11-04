import React from 'react'
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, SIZE_WIDTH } from '../common/constants';
import { TheraPhistCard } from './components/TheraPhistCard';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';
import { RouteProp } from '@react-navigation/core';

interface theraphistManageProps {
	navigation: StackNavigationProp<stackInterface>;
    route: RouteProp<stackInterface>;
}

export function theraphistManage(props : theraphistManageProps) {
		return (
			<View style={{flex :1, backgroundColor :'white'}}>
				
				
				<View style={{flex : 1, justifyContent : 'center', backgroundColor : 'white', alignItems : 'center'}}>
					<Image style={{ height : SIZE_WIDTH * 0.2, width : SIZE_WIDTH * 0.2 }} source={require('../../assets/icons/ic_empty_56.png')} />
					<Text style={{color : '#aaaaaa', marginTop : 10, fontSize : 16}}>첫 치료사를 등록해보세요</Text>
				</View>
			{/* <ScrollView style={{paddingHorizontal : GLOBAL_MARGIN_HORIZON , paddingTop : 20, marginBottom : GLOBAL_MARGIN_VERTICAL}}
			showsVerticalScrollIndicator={false}>
				<TheraPhistCard
				style={styles.cardStyle}
				width={(SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2)}
				height={(SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2) * 0.5}
				></TheraPhistCard>

				<TheraPhistCard
				style={styles.cardStyle}
				width={(SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2)}
				height={(SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2) * 0.5}
				></TheraPhistCard>

				<TheraPhistCard
				style={styles.cardStyle}
				width={(SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2)}
				height={(SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2) * 0.5}
				></TheraPhistCard>

				<TheraPhistCard
				style={styles.cardStyle}
				width={(SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2)}
				height={(SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2) * 0.5}
				></TheraPhistCard>

				<TheraPhistCard
				style={styles.cardStyle}
				width={(SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2)}
				height={(SIZE_WIDTH - GLOBAL_MARGIN_HORIZON * 2) * 0.5}
				></TheraPhistCard>
			</ScrollView> */}

			<ActionButton buttonColor={'black'}>
					<ActionButton.Item buttonColor='#9b59b6' title="초대코드 보내기" onPress={() =>props.navigation.navigate('InviteTheraphist')}>
						<Icon name="mail-open-outline" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#3498db' title="초대코드 입력하기" onPress={() => {}}>
						<Icon name="person-add-outline" style={styles.actionButtonIcon} />
					</ActionButton.Item>
			</ActionButton>
				
			</View>
		);
}
const styles = StyleSheet.create({
	cardStyle : {
		borderRadius : 8 ,
		borderWidth : 1,
		borderColor : '#ededed',
		backgroundColor : 'white',
		marginBottom : GLOBAL_MARGIN_HORIZON,
		elevation : 3,
	},
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	  },
})