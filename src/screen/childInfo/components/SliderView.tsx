import React from 'react';
import {View, StyleSheet, Alert, Text, useWindowDimensions, ViewStyle} from 'react-native';
import Draggable from 'react-native-draggable';
import { MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';
import {Slider} from '@miblanchard/react-native-slider';


interface SliderViewProps {
	headerText : string
	contentLeft : string[]
	contentRight : string[]
	value : number | number[]
	setValue(value : number) : void
	style? : ViewStyle
}

export function SliderView(props : SliderViewProps) {

  return (
	<View style={[props.style]}>

			<Text style={styles.headerText}>{props.headerText}</Text>
			
			<Slider
			containerStyle={styles.sliderContainer}
			minimumValue={0}
			maximumValue={4}
			value={props.value}
			minimumTrackTintColor='#ffe3d8'
			thumbStyle={styles.sliderThumbStyle}
			trackStyle={styles.sliderTrackStyle}
			step={1}
			onSlidingComplete={(value : any) => props.setValue(value)}
			/>
		{/* </View> */}
		
		<View style={styles.textContainer}>
			<View style={{justifyContent : 'flex-start'}}>
				{
					props.contentLeft?.map((text, idx) => {
						return (
							<Text key={idx} style={styles.textStyle}>
								{text}
							</Text>
						)
					})
				}
			</View>
			<View style={{justifyContent : 'flex-end'}}>
				{
					props.contentRight?.map((text, idx) => {
						return (
							<Text key={idx} style={styles.textStyle}>
								{text}
							</Text>
						)
					})
				}
			</View>
		</View>					
	</View>
  );
}
const styles = StyleSheet.create({
	headerText : {fontSize : 20, color : '#111111', fontWeight : '500' , marginBottom : SIZE_HEIGHT * 0.02},
	sliderContainer : {height : SIZE_HEIGHT * 0.07},
	sliderThumbStyle : {height : SIZE_HEIGHT * 0.05 , width : SIZE_HEIGHT * 0.05 , borderWidth : 4, borderColor : '#ff8a5c', borderRadius : 100, backgroundColor : 'white'},
	sliderTrackStyle : {height : 15 ,  backgroundColor: "#ffe3d8", borderRadius : 15},
	textContainer : {flexDirection : 'row', justifyContent : 'space-between'},
	textStyle : {fontSize : 15, color : '#707070'},


});
