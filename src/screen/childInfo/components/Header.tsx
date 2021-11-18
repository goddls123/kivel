import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';
import { childInfo } from '../../../types/types';
import { GLOBAL_MARGIN_HORIZON, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';

interface HeaderProps {
	data? : childInfo
}

export function Header(props : HeaderProps) {
	const navigation = useNavigation()
	const renderName = () => {
		if(props.data){
			return props.data.name
		}
		return null
	}
	const renderSex = () => {
		if(props.data){
			if(props.data.sex == 'W'){
				return '여'
			}
			else{
				return '남'
			}
		}
	}
	const renderAge = () => {
		if(props.data){
			let date = new Date()

			let age = (date.getTime() - new Date(props.data.birthDate).getTime()) / 1000 / 60 / 60 / 24;
			return Math.round(age/365)
		}
	}
	const renderMoreInfo = () => {
		if(props.data){
			let height = props.data.height + 'cm'
			let kg = props.data.weight + 'kg'
			let birthWeekNum = props.data.birthWeekNum + '주'
			let birthDayNum = props.data.birthDayNum + '일'
			return height + ' / ' + kg + ' / ' + birthWeekNum + ' ' + birthDayNum
		}
	}

	return (
		<SafeAreaView style={{height: SIZE_WIDTH * 0.35, backgroundColor : 'white', justifyContent : 'space-between'}}>
			<View style={{marginHorizontal : GLOBAL_MARGIN_HORIZON, paddingTop : SIZE_WIDTH * 0.05, flexDirection : 'row', alignItems : 'center'}}>
				<Image 
				style={{height : SIZE_WIDTH * 0.25, width : SIZE_WIDTH * 0.25 }} 
				source={require('../../../assets/icons/ic_profile.png')}></Image>
				<View style={{flex : 1, marginLeft : 20 }}>
					{
						props.data
						?	
						<>
						<Text style={{fontWeight : '800', fontSize : 22, color : 'black', marginBottom : 5}}>{renderName()}</Text>
						<Text style={{fontWeight : '400', fontSize : 16, color : '#909090', marginBottom : 5 }}>{renderSex()} / 만 {renderAge()}세</Text>
						<Text style={{fontWeight : '400', fontSize : 16, color : '#909090'}}>{renderMoreInfo()}</Text>
						</>
						:
						<TouchableOpacity onPress={() => navigation.navigate('EnterChildInfo')}>
						<Text style={styles.babyInfo}>
							아이정보를 등록해주세요!
						</Text>
						</TouchableOpacity>
					}
					
				</View>
			</View>
			<Divider height={1} color={'#ededed'} ></Divider>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	babyInfo : {
		color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
	}
})