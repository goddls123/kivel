import React from 'react';
import {View, StyleSheet, Alert, Text, useWindowDimensions} from 'react-native';
import Draggable from 'react-native-draggable';
<<<<<<< HEAD
import { Button } from '../../common/components/Button';
import { GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
=======
import { MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
>>>>>>> ce3cf4e0ba8c2c53453463786cdae33a9f18b72f
import { Divider } from '../../common/divider';
import {Slider} from '@miblanchard/react-native-slider';


// interface SliderViewProps {
// 	headerText : string
// }

export function SliderView() {
	// const [value, setValue] = React.useState<number>(SIZE_WIDTH * 0.5 - 20)
	const QUARTER_WIDTH = Math.round(SIZE_WIDTH / 4)
  return (
	<View style={{height : 300, backgroundColor : 'white'}}>
		{/* <View style={{flex : 1 , backgroundColor : 'yellow'}}>
		
			<Text style={{fontSize : 20, color : 'black', fontWeight : 'bold'}}>{props.headerText || "아이에게 간식은"} </Text>
			
			<Divider height={SIZE_HEIGHT * 0.04} color="white" />
			<View style={{height : SIZE_HEIGHT * 0.02, flexDirection : 'row' ,}}>

				<View style={{flex : 1, marginHorizontal : 2, backgroundColor : "#ffe3d8" , borderTopLeftRadius : 15, borderBottomLeftRadius : 15}} />
				<View style={{flex : 1, marginHorizontal : 2, backgroundColor : "#ffe3d8" }} />
				<View style={{flex : 1, marginHorizontal : 2, backgroundColor : "#ffe3d8" }} />
				<View style={{flex : 1, marginHorizontal : 2, backgroundColor : "#ffe3d8" , borderTopRightRadius : 15, borderBottomRightRadius : 15}} />
					
				
				<Draggable
					x={value}
					y={SIZE_HEIGHT * 0.01 - 20}
					minY={-10}
<<<<<<< HEAD
					maxY={-10}			
					minX={GLOBAL_MARGIN_HORIZON}
					maxX={SIZE_WIDTH - GLOBAL_MARGIN_HORIZON}
					onDragRelease={(event, gestureState) => {		
						if(Math.round(gestureState.moveX/ QUARTER_WIDTH) == 0){
							setValue(0)
						}
						else if(Math.round(gestureState.moveX/ QUARTER_WIDTH) == 1){
							setValue(103-20)
						}
						else if(Math.round(gestureState.moveX/ QUARTER_WIDTH) == 2){
							setValue(206-20)
						}
						else if(Math.round(gestureState.moveX/ QUARTER_WIDTH) == 3){
							setValue(309-20)
						}
						else if(Math.round(gestureState.moveX/ QUARTER_WIDTH) == 4){
							setValue(411-20)
						}
					}}>
					<View style={{height : 40, width : 40, borderWidth : 4, borderColor : '#ff8a5c', borderRadius : 100, backgroundColor : 'white'}} />
=======
					maxY={-10}
				>
					<View style={{height : 40, width : 40, borderWidth : 4, borderColor : MAIN_COLOR, borderRadius : 100, backgroundColor : 'white'}} />
>>>>>>> ce3cf4e0ba8c2c53453463786cdae33a9f18b72f
				</Draggable>
				
				
			</View>
			<Button text={"0"} onPress={() => setValue(0)} textColor={'black'}></Button>
			<Button text={"103"} onPress={() => setValue(103-20)} textColor={'black'}></Button>
			<Button text={"206"} onPress={() => setValue(206-20)} textColor={'black'}></Button>
			<Button text={"309"} onPress={() => setValue(309-20)} textColor={'black'}></Button>
		</View>  */}

		<View>
		<Slider
		  minimumValue={0}
		  maximumValue={10}
		  minimumTrackTintColor='white'
		  maximumTrackTintColor="white"
		  thumbStyle={{height : 40, width : 40, borderWidth : 4, borderColor : '#ff8a5c', borderRadius : 100, backgroundColor : 'white'}}
		  trackStyle={{height : 20 ,  backgroundColor: "#ffe3d8", borderRadius : 15}}
		  step={1}
		/>
		</View>
		
					
	</View>
  );
}
const styles = StyleSheet.create({});
