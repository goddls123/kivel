import React from 'react';
import {View, StyleSheet, ViewStyle, Text, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH} from '../../common/constants';

interface VanishTextInputProps {
	style?: ViewStyle;
	textInputStyle? : ViewStyle;
	headerText: string;
	placeholder : string;
	value : string | undefined;
	setValue(value : string) : void
}

export function VanishTextInput(props: VanishTextInputProps) {
	const [noCheck, setNoCheck] = React.useState<boolean>(false)
	
	return (
		<View style={props.style}>
			<Text style={styles.headerText}>{props.headerText}</Text>
			<TextInput
				placeholder={props.placeholder}
				style={[styles.textInputStyle,props.textInputStyle]}
				value={props.value}
				onChangeText={(text) => {props.setValue(text)}}
			></TextInput>
			{
				!noCheck ?
				<TouchableOpacity 
				style={styles.buttonStyle}
				onPress={() => {
					setNoCheck(true)
					props.setValue('없음')
				}}
				>
					<Text style={styles.textStyle}> 없음 </Text>
				</TouchableOpacity>
				: null
			}
			
		</View>
	);
}
const styles = StyleSheet.create({
	headerText: {
		fontSize: 20,
		color: '#111111',
		fontWeight: '500',
		marginBottom: SIZE_HEIGHT * 0.02,
	},
	textInputStyle : {
		borderBottomWidth : 1,
		borderBottomColor : '#ededed',
		marginBottom : SIZE_HEIGHT * 0.02,
	},
	buttonStyle : {
		width : SIZE_WIDTH * 0.12,
		height : SIZE_HEIGHT * 0.04,
		marginBottom : GLOBAL_MARGIN_VERTICAL,
		backgroundColor : "#fdeae2",
		borderRadius : 5,
		justifyContent : 'center',
		alignItems : 'center'
	},
	textStyle : {
		fontSize : 14,
		fontWeight : '500',
		color : MAIN_COLOR,
	}
});
