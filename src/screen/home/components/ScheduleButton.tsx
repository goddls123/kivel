import React from 'react'
import { View, StyleSheet, ViewStyle, Text, TouchableOpacity } from 'react-native';
import { schedule } from '../../../types/calendarTypes';


interface scheduleButtonProps {
	style : ViewStyle
	data? : schedule | any
}

export function ScheduleButton(props : scheduleButtonProps) {


		function changeDateFormat(){

		}

		return (
			<View
				style={props.style}
			>
				<Text>{props.data.scheduleData.schedule_date || "오늘" }</Text>
				<View style={styles.textContainer}>
					<Text>{props.data.scheduleData.title || "허버"}</Text>
					<Text>{props.data.scheduleData.start_time || "허버"} ~ {props.data.scheduleData.end_time}</Text>
					
					<Text>{props.data.scheduleData.theraphist_name || "김키블 "} 치료사</Text>
				</View>
			</View>

			
		);
}
const styles = StyleSheet.create({
	textContainer : {
		flex : 1,
		justifyContent: 'center',
		alignItems : 'center',
		borderWidth : 1,
		borderRadius : 10,
	}
})