import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import { schedule } from '../../../types/calendarTypes';
import { Button } from '../../common/components/Button';
import { GLOBAL_MARGIN_HORIZON, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';


interface ScheduleModalViewProps {
	setModalView(value : boolean) : void
}

export function ScheduleModalView(props : ScheduleModalViewProps) {
		return (
				<View style={styles.modalContainer}>
					<View style={styles.headerContainer}>
						<View style={styles.headerLeftSpace} />
						<View style={styles.headerTextContainer}>
							<Text style={styles.headerText}>오늘</Text>
						</View>
						<View style={styles.headerRightSpace} />
					</View>


					<View style={[{flex : 1},styles.mainContainer]}>
						<Text style={styles.grayText}>과목</Text>
						<Text style={styles.blackText}>계절_언어치료</Text>
					</View>
					<View style={[{flex : 1},styles.mainContainer]}>
						<Text style={styles.grayText}>일시</Text>
						<Text style={styles.blackText}>2020.10.07(목)</Text>
						<Text style={styles.blackText}>09:00 - 15:00 / 매주 화요일</Text>
					</View>
					<View style={[{flex : 1},styles.mainContainer]}>
						<Text style={styles.grayText}>치료사</Text>
						<Text style={styles.blackText}>김초롱 치료사</Text>
					</View>
					<View style={[{flex : 1},styles.mainContainer]}>
						<Text style={styles.grayText}>장소</Text>
						<Text style={styles.blackText}>은평구 복지센터 3층 솔방울 교실</Text>
					</View>
					<View style={{flex : 2 , flexDirection :'row', alignItems : 'flex-end', paddingBottom : '10%'}}>
						<View style={{flex : 1, marginLeft : '12%', marginRight : '3%' }}>
							<Button text={'수정'} textColor={'#707070'} style={{backgroundColor : '#ededed', borderRadius : 50}}></Button>
						</View>
						<View style={{flex : 1, marginRight : '12%', marginLeft : '3%'}}>
							<Button text={'확인'} textColor={'white'} style={{backgroundColor : MAIN_COLOR, borderRadius : 50}}
							onPress={() => props.setModalView(false)}
							></Button>
						</View>
					</View>
				</View>

		);
}
const styles = StyleSheet.create({
	modalContainer : {
		backgroundColor : 'white',
		height : SIZE_HEIGHT * 0.6,
		borderRadius : 16,
	},
	headerContainer : {height : SIZE_HEIGHT * 0.08 , flexDirection : 'row'},
	headerLeftSpace : {width : SIZE_WIDTH * 0.12, borderBottomWidth : 2, borderBottomColor : '#ededed'},
	headerRightSpace : { flex : 1, borderBottomWidth : 2, borderBottomColor : '#ededed'},
	headerTextContainer : {
		borderBottomWidth : 3,
		borderBottomColor : MAIN_COLOR,
		width : '15%',
		justifyContent : 'flex-end',
		alignItems : 'center',
		paddingBottom : SIZE_HEIGHT * 0.01,
	},
	headerText : { 
		color : MAIN_COLOR, 
		fontSize : 18,
	},
	mainContainer : {marginLeft : '12%', justifyContent : 'flex-end'},
	grayText : {fontSize : 15, fontWeight : '500', color : '#707070'},
	blackText: {fontSize : 18, fontWeight : 'bold', color : 'black'},
})