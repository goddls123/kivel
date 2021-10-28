import React from 'react'
import { View, StyleSheet, TouchableOpacity, ViewStyle, Text, ImageBackgroundBase, ImageBackground } from 'react-native';

interface ResultSheetCardProps {
	style? : ViewStyle
	title? : string
	institution? : string
	date? : string
	url? : string
}

export function ResultSheetCard(props : ResultSheetCardProps) {
		return (
			<ImageBackground style={[props.style,styles.container]} source={{uri : 'https://t1.daumcdn.net/cfile/tistory/99A77E355A4C3F9F29'}} resizeMode='cover' >
			<View 
			style={styles.touchableOpacityStyle}>
				
				<View style={{width: '70%'}}>
					<Text style={[styles.textStyle, {marginBottom : 20}]}> 한국 영유아 발달 선별 검사 </Text>
					<Text style={styles.textStyle}> 서울대학교 병원 </Text>
					<Text style={styles.textStyle}> 21.02.03 </Text>

				</View>
				

			</View>
			</ImageBackground>
		);
}
const styles = StyleSheet.create({
	container: {alignItems : 'center', justifyContent : 'center'},
	touchableOpacityStyle : {alignItems : 'center', justifyContent : 'center', width : '100%' , height : '100%', backgroundColor: "rgba(17, 17, 17, 0.4)", borderRadius : 5,},
	textStyle : {fontSize: 18, color : 'white', fontWeight : 'bold', textAlign : 'center'},
})