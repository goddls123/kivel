import React from 'react'
import { View, StyleSheet, ViewStyle, Text, Image } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL } from '../../common/constants';
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from '../../common/divider';
interface TheraPhistCardProps {
	style? : ViewStyle
	height : number
	width : number
	image? : string
}

export function TheraPhistCard(props : TheraPhistCardProps) {
		const CARD_HEIGHT = props.height
		const CARD_WIDTH = props.width
		
		return (
			<View style={[props.style, {height : CARD_HEIGHT, width : CARD_WIDTH, paddingHorizontal : GLOBAL_MARGIN_HORIZON}]}>
				<View style={{ marginTop : CARD_HEIGHT * 0.14, marginBottom : 10, flexDirection : 'row'}}>
					{
						props.image
						? 	<Image style={[styles.imageStyle,{width : CARD_WIDTH * 0.17, height : CARD_WIDTH * 0.17}]} 
							source={{uri : props.image}}></Image> 	
						: 
						<View style={[styles.imageStyle,{width : CARD_WIDTH * 0.17, height : CARD_WIDTH * 0.17}]}>
							<Icon name="person-outline" style={styles.iconStyle}></Icon>
						</View>
					}
					<View style={{width : CARD_WIDTH * 0.6, marginLeft : 10}}>
						<View style={{flexDirection : 'row'}}>
							<Text style={[styles.badgeText,{color : "#0168b3", backgroundColor : "#e7eff7"}]}>운동치료</Text>
							<Text style={[styles.badgeText,{color : "#ff9300", backgroundColor : "#fff5de"}]}>돌폼프로그램</Text>
						</View>

						<Text style={styles.theraphistName}>김초롱 치료사</Text>
						<Text style={styles.theraphistDetail}>종로구 해바라기센터, 혜화복지관</Text>
					</View>
					<TouchableOpacity>
						<Image
						resizeMode='cover'
						style={{width : CARD_WIDTH * 0.1, height : CARD_WIDTH * 0.1, top : -6}} 
						source={require('../../../assets/icons/ic_chat_40.png')}></Image>
					</TouchableOpacity>
				</View>
				<Divider height={2} color={'#ededed'}></Divider>
				
				<Text style={styles.theraphistComment}>천고마비의 계절 홧팅 ^_^</Text>
			</View>
		);
}
const styles = StyleSheet.create({
	imageStyle : {backgroundColor : '#f4f4f4',  alignItems : 'center', justifyContent : 'center', borderRadius : 100},
	iconStyle : {fontSize: 30, color : 'gray'},
	badge : { alignItems : 'flex-start' , justifyContent : 'center', marginVertical : 3 },
	badgeText : {fontSize : 12, fontWeight : 'bold', paddingHorizontal : 8, paddingVertical : 3, borderRadius :5 , textAlign : 'center', marginRight : 10},
	theraphistName : {color : 'black', fontSize: 18, marginTop : 10, fontWeight : '600'},
	theraphistDetail : {color : '#707070', fontSize : 14, marginTop : 5},
	theraphistComment : {color : '#aaaaaa', fontSize : 14, marginTop : 10},
})