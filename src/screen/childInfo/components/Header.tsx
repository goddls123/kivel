import React from 'react'
import { View, StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, SIZE_WIDTH } from '../../common/constants';

interface HeaderProps {

}

export function Header(props : HeaderProps) {
		return (
			<SafeAreaView style={{height: SIZE_WIDTH * 0.35, backgroundColor : 'white', justifyContent : 'center'}}>
				<View style={{marginHorizontal : GLOBAL_MARGIN_HORIZON, flexDirection : 'row',alignItems : 'center'}}>
					<Image 
					style={{height : SIZE_WIDTH * 0.25, width : SIZE_WIDTH * 0.25 }} 
					source={require('../../../assets/icons/ic_profile.png')}></Image>
					<View style={{flex : 1, marginLeft : 20 }}>
						<Text style={{fontWeight : '800', fontSize : 22, color : 'black', marginBottom : 5}}>김키블</Text>
						<Text style={{fontWeight : '400', fontSize : 16, color : '#909090', marginBottom : 5 }}>여/ 만 1세</Text>
						<Text style={{fontWeight : '400', fontSize : 16, color : '#909090'}}>72cm / 9.9kg / 35주 3일</Text>
					</View>
				</View>
			</SafeAreaView>
		);
}
const styles = StyleSheet.create({})