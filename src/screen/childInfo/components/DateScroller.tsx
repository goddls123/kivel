import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';


interface DateScrollerProps {
	setDate(value : Date) : void
	date : Date
	setModalVisible(value : boolean) : void
}

export function DateScroller(props : DateScrollerProps) {
		
	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				
				<Text style={styles.headerText}>출생일을 알려주세요</Text>
				
				<DatePicker 
				style={styles.datePickerStyle} 
				date={props.date} 
				onDateChange={(newDate : Date) => props.setDate(newDate)} mode={'date'} 
				/>
				
				<View style={styles.buttonContainer}>
					<TouchableOpacity 
						style={styles.cancelButton} 
						onPress={() => props.setModalVisible(false)}>
						<Text style={styles.cancelText}>취소</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={styles.acceptButton} 
						onPress={() => props.setModalVisible(false)}>
						<Text style={styles.acceptText}>적용</Text>
					</TouchableOpacity>
				</View>
				
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container : {height : SIZE_HEIGHT * 0.45 , alignItems : 'center', justifyContent :'center', borderRadius : 15, backgroundColor : 'white'},
	innerContainer : {marginHorizontal : SIZE_WIDTH * 0.1, padding : SIZE_HEIGHT * 0.02},
	headerText : {fontSize: 17, fontWeight: "500", alignSelf : 'center', marginBottom : SIZE_HEIGHT * 0.04, color : '#111111'},
	datePickerStyle : {backgroundColor : 'white', height : SIZE_HEIGHT * 0.24},
	buttonContainer : {height : SIZE_HEIGHT * 0.1, width : '50%' , alignSelf : 'center' , flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'},
	cancelButton : { width : SIZE_WIDTH * 0.30 , height : SIZE_HEIGHT * 0.06, alignItems : 'center', justifyContent : 'center'},
	cancelText : {fontSize : 25, fontWeight: "500", color: "#aaaaaa"},
	acceptButton : { width : SIZE_WIDTH * 0.30 , height : SIZE_HEIGHT * 0.06, alignItems : 'center', justifyContent : 'center', borderRadius : 24, backgroundColor : "#ff8a5c"},
	acceptText : {fontSize : 25, fontWeight: "500", color: "white"},




})