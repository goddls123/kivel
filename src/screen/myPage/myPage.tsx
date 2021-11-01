import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stackInterface } from '../../types/navigationParam';
import { Header } from '../childInfo/components/Header';
import { GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import { Divider } from '../common/divider';

interface myPageProps {
	navigation: StackNavigationProp<stackInterface>;
    route: RouteProp<stackInterface>;
}

export function myPage(props : myPageProps) {
		return (
			<SafeAreaView style={{backgroundColor : 'white', flex : 1}}>
				<Header></Header>
				<View style={{marginHorizontal : GLOBAL_MARGIN_HORIZON}}>

					<View style={styles.itemContainer}>
						<TouchableOpacity style={styles.touchItemContainer} onPress={() => props.navigation.navigate('Question')}>
						<Image style={styles.imageStyle} source={require('../../assets/icons/ic_contact_24.png')} />
						<Text style={styles.textStyle}>  문의하기</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.itemContainer}>
						<TouchableOpacity style={styles.touchItemContainer} onPress={()=> props.navigation.navigate('Notice')}>
						<Image style={styles.imageStyle} source={require('../../assets/icons/ic_notice_24.png')} />
						<Text style={styles.textStyle}>  공지사항</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.itemContainer}>
						<TouchableOpacity style={styles.touchItemContainer}>
						<Image style={styles.imageStyle} source={require('../../assets/icons/ic_logout_24.png')} />
						<Text style={styles.textStyle}>  로그아웃</Text>
						</TouchableOpacity>
					</View>

					<View style={{height : SIZE_WIDTH * 0.1 , justifyContent : 'center'}}>
					<Divider height={1} color={'#ededed'} />
					</View>
					
					<View style={styles.itemContainer}>
						<TouchableOpacity style={styles.touchItemContainer}>
							<Text style={styles.textStyle}>개인정보 처리방침</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.itemContainer}>
						<TouchableOpacity style={styles.touchItemContainer}>
							<Text style={styles.textStyle}> 이용약관</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.itemContainer}>
						<TouchableOpacity style={styles.touchItemContainer}>
							<Text style={styles.textStyle}>정보 동의 설정</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.itemContainer}>
						<TouchableOpacity style={styles.touchItemContainer}>
							<Text style={styles.textStyle}>회원탈퇴</Text>
						</TouchableOpacity>
					</View>
					
				</View>
			</SafeAreaView>
		);
}
const styles = StyleSheet.create({
	itemContainer : {height : SIZE_WIDTH * 0.15 , justifyContent : 'center'},
	touchItemContainer : {flexDirection : 'row', alignItems : 'center'},
	textStyle : {fontSize :18, color : 'black'},
	imageStyle : {height : SIZE_WIDTH * 0.06 , width : SIZE_WIDTH * 0.06 },
})