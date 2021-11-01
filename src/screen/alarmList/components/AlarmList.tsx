import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, MAIN_COLOR, SIZE_WIDTH } from '../../common/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
interface alarmListProps {
	title : string
	date : Date
}

export function AlarmList(props : alarmListProps) {
		return (
			<View style={{ marginHorizontal : GLOBAL_MARGIN_HORIZON ,justifyContent : 'center', height : SIZE_WIDTH * 0.2 }}>
				<View style={{flexDirection : 'row'}}>
					<Icon name='bell' style={{fontSize : 20, color : 'white', backgroundColor : MAIN_COLOR ,padding : 10, borderRadius : 100, marginRight: 10}}></Icon>
					<View>
						<Text style={styles.textStyle}>{props.title}</Text>
						<Text>{props.date.toString()}</Text>
					</View>
				</View>
					
                
			</View>
		);
}
const styles = StyleSheet.create({
	textStyle : {
		fontSize: 14,
		fontWeight : '500',
		color : 'black'
	}
})