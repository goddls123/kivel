import React from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';
import Draggable from 'react-native-draggable';
import { SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';

interface SliderViewProps {
	headerText : string
}

export function SliderView(props: SliderViewProps) {
  return (
	<View style={{height : 300, backgroundColor : 'red'}}>
		<View style={{flex : 1 , backgroundColor : 'yellow'}}>
		
			<Text style={{fontSize : 20, color : 'black', fontWeight : 'bold'}}>{props.headerText || "아이에게 간식은"} </Text>
			
			<Divider height={SIZE_HEIGHT * 0.04} color="white" />
			<View style={{height : SIZE_HEIGHT * 0.02, flexDirection : 'row' ,}}>

				<View style={{flex : 1, marginHorizontal : 2, backgroundColor : "#ffe3d8" , borderTopLeftRadius : 5, borderBottomLeftRadius : 5}} />
				<View style={{flex : 1, marginHorizontal : 2, backgroundColor : "#ffe3d8" }} />
				<View style={{flex : 1, marginHorizontal : 2, backgroundColor : "#ffe3d8" }} />
				<View style={{flex : 1, marginHorizontal : 2, backgroundColor : "#ffe3d8" , borderTopRightRadius : 5, borderBottomRightRadius : 5}} />
					
				
				<Draggable
					x={SIZE_WIDTH * 0.5 - 20}
					y={SIZE_HEIGHT * 0.01 - 20}
					minY={-10}
					maxY={-10}
				>
					<View style={{height : 40, width : 40, borderWidth : 4, borderColor : '#ff8a5c', borderRadius : 100, backgroundColor : 'white'}} />
				</Draggable>
			</View>
		
		</View> 
	</View>
  );
}
const styles = StyleSheet.create({});
