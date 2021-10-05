import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import { schedule } from '../../../types/calendarTypes';


interface ScheduleModalViewProps {
	modalVisible : boolean
	setModalVisible(visible :boolean) : void
	data : schedule | undefined
}

export function ScheduleModalView(props : ScheduleModalViewProps) {
		return (
			<Modal
				isVisible={props.modalVisible}
				backdropOpacity={0.2}
				onBackdropPress={() => props.setModalVisible(false)}
			>
				<View style={styles.modalContainer}>
				<Text>{props.data?.schedule_date}</Text>
				<Text>{props.data?.title}</Text>
				<Text>{props.data?.start_time} ~ {props.data?.end_time}</Text>
				<Text>{props.data?.theraphist_name}</Text>
				<Text>{props.data?.location}</Text>
				<Text>{props.data?.memo}</Text>
				</View>
		 	</Modal>
		);
}
const styles = StyleSheet.create({
	modalContainer : {
		backgroundColor : 'white',
		justifyContent : 'center',
		alignItems : 'center',
	}
})