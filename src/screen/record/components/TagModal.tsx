import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, TextInput} from 'react-native';
import { MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { tagType } from '../../../types/types';
interface TagModalProps {
	setModalVisible(value : boolean) : void
	data? : tagType[]
	setData(value : tagType[]) : void
}

export function TagModal(props: TagModalProps) {

	const [tag, setTag] = React.useState<tagType>()

	function onPressHandler(){
		if(tag){
			if(props.data){
				props.setData([...props.data,tag])
			} else {
				props.setData([tag])
			}
			props.setModalVisible(false)
		}
		
	}
	return (
		<View style={styles.container}>

			<TextInput
			value={tag?.tag}
			onChangeText={(text)=>setTag({tag : text})}
			placeholder="#태그를 입력해주세요"
			placeholderTextColor="#d5d5d5"
			style={styles.textInput}></TextInput>
			
			<View style={{height : SIZE_WIDTH * 0.15}} />

			<View style={styles.buttonContainer}>
				<TouchableOpacity 
					style={styles.cancelButton} 
					onPress={() => props.setModalVisible(false)}>
					<Text style={styles.cancelText}>취소</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.acceptButton} 
					onPress={() => onPressHandler()}>
					<Text style={styles.acceptText}>적용</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container : {
		alignSelf: 'center',
		width: SIZE_WIDTH * 0.8,
		backgroundColor: 'white',
		borderRadius : 15,
		padding: 15,
	},
	textInput : {
		justifyContent: 'flex-end',
		borderWidth: 2,
		borderColor: '#ededed',
		borderRadius: 8,
		marginTop : 20,
		paddingLeft : 15
	  },
	closeIcon : {
		color : 'black', 
		fontSize: 20,
	},
	buttonContainer : {height : SIZE_HEIGHT * 0.1, alignSelf : 'center' , flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'},
	cancelButton : { width : SIZE_WIDTH * 0.30 , height : SIZE_HEIGHT * 0.06, alignItems : 'center', justifyContent : 'center'},
	cancelText : {fontSize : 20, fontWeight: "500", color: "#aaaaaa"},
	acceptButton : { width : SIZE_WIDTH * 0.30 , height : SIZE_HEIGHT * 0.06, alignItems : 'center', justifyContent : 'center', borderRadius : 24, backgroundColor : MAIN_COLOR},
	acceptText : {fontSize : 20, fontWeight: "500", color: "white"},

});
