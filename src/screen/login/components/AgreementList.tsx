import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MAIN_COLOR, SIZE_HEIGHT } from '../../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
interface agreementListProps {
	text : string
	onPress(value : boolean) : void
	state : boolean
	navigation?() : void
}

export function AgreementList(props : agreementListProps) {
	return (
		<View style={styles.container}>
			<View style={styles.checkWithText}>
				
				<TouchableOpacity style={styles.checkButton} onPress={() => props.onPress(!props.state)}>
					<Icon name="checkmark" style={[styles.checkStyle,{color : props.state ? MAIN_COLOR : "#d5d5d5" }]} />
				</TouchableOpacity>
				<Text style={styles.textStyle}> {props.text} </Text>
				<Text style={styles.textStyle}> {props.state} </Text>
			</View>

			<TouchableOpacity style={styles.rightArrowContainer}>
				<Icon name="checkmark" style={styles.checkStyle} />
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
		justifyContent : 'space-between'
    },
	checkWithText : {
		flexDirection : 'row',
		alignItems : 'center'
	},
	checkButton :{
		height: SIZE_HEIGHT * 0.04,
        width: SIZE_HEIGHT * 0.04,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
		marginRight : 5
	},
	checkStyle :{
		fontSize: 30,
        fontWeight: 'bold',
	},
	textStyle :{
		fontFamily: 'Pretendard',
        fontSize: 17,
        color: '#707070',
        fontWeight: 'bold',
        fontStyle: 'normal',
	},
	rightArrowContainer :{alignContent : 'flex-end'},
})