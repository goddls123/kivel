import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal'
import { Button } from '../../common/components/Button';
import { GLOBAL_MARGIN_HORIZON, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';

interface ChildInfoAlarmModalProps {

}

export function ChildInfoAlarmModal(props: ChildInfoAlarmModalProps) {
    return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<Text style={styles.headerText}>우리 키블이의 정보 입력이</Text>
				<Text style={styles.headerText}>완료 되지 않았어요!</Text>
				
				<Text style={styles.smallText}>다시 등록하러 가볼까요?</Text>
				<Button 
				text={'등록하러 가기'} 
				textColor={'white'}
				style={{backgroundColor : MAIN_COLOR}}
				></Button>
			</View>
		</View>
    );
}
const styles = StyleSheet.create({
	container : {
		flex : 1,
		justifyContent : 'flex-end',
	},
	innerContainer : {
		height : SIZE_HEIGHT * 0.36,
		width : SIZE_WIDTH,
		backgroundColor : 'white',
		paddingHorizontal : SIZE_WIDTH * 0.24,
		paddingVertical : '16%',
		borderTopLeftRadius : 20,
		borderTopRightRadius :20,
		alignItems : 'center'
	},
	headerText : {
		fontSize : 18,
		color : '#111111'
	},
	smallText : {
		fontSize : 15,
		color : '#aaaaaa',
		margin : '10%'
	}
});
