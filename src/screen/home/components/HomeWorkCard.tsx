import React from 'react'
import { View, StyleSheet, ViewStyle, Text } from 'react-native';

interface HomeWorkCardProps {
	style? : ViewStyle
	height : number,
	width : number,
}

export function HomeWorkCard(props : HomeWorkCardProps) {
		const CARD_HEIGHT = props.height
		const CARD_WIDTH = props.width
		
		return (
			<View style={[props.style, { height : props.height , width : props.width, borderWidth : 1, borderRadius : 10, borderColor : '#ededed', overflow : 'hidden', marginRight : 10}]}>
				<View style={styles.innerContainer}>
					<View style={{height : CARD_HEIGHT * 0.3, alignItems : 'flex-start', justifyContent : 'flex-end'}}>
						<Text style={[styles.badgeText,{color : "#0168b3", backgroundColor : "#e7eff7"}]}>운동치료</Text>
					</View>
					<View style={{height : CARD_HEIGHT * 0.7}}>
						<Text style={{fontSize : 16 , color : 'black', marginTop : CARD_HEIGHT * 0.05}}>뒷꿈치 들고 걷기</Text>
						<Text style={{fontSize : 16 , color : 'black', marginTop : CARD_HEIGHT * 0.05}}>매일 3회</Text>
						<Text style={{fontSize : 16 , color : '#d5d5d5', marginTop : CARD_HEIGHT * 0.05}}>김초롱 치료사</Text>
					</View>

				</View>
				
			</View>
		);
}
const styles = StyleSheet.create({
	innerContainer : {
		marginLeft : '10%',
	},
	badge : { alignItems : 'flex-start' , justifyContent : 'center', marginVertical : 3 },
	badgeText : {fontSize : 12, fontWeight : 'bold', paddingHorizontal : 8, paddingVertical : 3, borderRadius :5 , textAlign : 'center'},
})