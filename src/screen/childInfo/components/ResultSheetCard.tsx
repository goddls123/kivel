import React from 'react'
import { View, StyleSheet, TouchableOpacity, ViewStyle, Text, ImageBackgroundBase, ImageBackground } from 'react-native';
import ImageModal from 'react-native-image-modal';
import { screeningResult } from '../../../types/screeningResultEnroll';
import { getDateYMD } from '../../common/service/dateService';

interface ResultSheetCardProps {
	style? : ViewStyle
	screeningData : screeningResult
}

export function ResultSheetCard(props : ResultSheetCardProps) {
		return (
			<ImageBackground style={[props.style,styles.container]} source={{uri : 'https://t1.daumcdn.net/cfile/tistory/99A77E355A4C3F9F29'}} resizeMode='cover' >
			<View style={styles.touchableOpacityStyle}>
				<View style={{width: '70%'}}>
					<Text style={[styles.textStyle, {marginBottom : 20}]}> { props.screeningData.screeningName } </Text>
					<Text style={styles.textStyle}> {props.screeningData.screeningInstitution} </Text>
					<Text style={styles.textStyle}> {getDateYMD(props.screeningData.screeningDate,'-')} </Text>
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