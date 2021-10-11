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
	style? : ViewStyle
}

export function SliderView(props : SliderViewProps) {

  return (
	<View style={[props.style,{backgroundColor : 'white'}]}>
		{/* <View style={{flex : 1}}> */}
			<Text style={{fontSize : 20, color : '#111111', fontWeight : '500' , marginBottom : SIZE_HEIGHT * 0.02}}>{props.headerText || "아이에게 간식은"}</Text>
			
			<Slider
			containerStyle={{height : SIZE_HEIGHT * 0.07}}
			minimumValue={0}
			maximumValue={4}
			value={2}
			minimumTrackTintColor='#ffe3d8'
			thumbStyle={{height : SIZE_HEIGHT * 0.05 , width : SIZE_HEIGHT * 0.05 , borderWidth : 4, borderColor : '#ff8a5c', borderRadius : 100, backgroundColor : 'white'}}
			trackStyle={{height : 15 ,  backgroundColor: "#ffe3d8", borderRadius : 15}}
			step={1}
			/>
		{/* </View> */}
		
		<View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
			<View style={{justifyContent : 'flex-start'}}>
				{
					props.contentLeft?.map((text) => {
						return (
							<Text style={{fontSize : 15, color : '#707070'}}>
								{text}
							</Text>
						)
					})
				}
			</View>
			<View style={{justifyContent : 'flex-end'}}>
				{
					props.contentRight?.map((text) => {
						return (
							<Text style={{fontSize : 15, color : '#707070'}}>
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
const styles = StyleSheet.create({});
