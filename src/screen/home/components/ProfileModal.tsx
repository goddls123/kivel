import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, PermissionsAndroid, Platform } from 'react-native';
import ImagePicker, {openCamera} from 'react-native-image-crop-picker';
import { SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';
import { cameraOpen, imagePickOne } from '../../common/service/cameraServices';

interface ProfileModalProps {

}

export function ProfileModal(props : ProfileModalProps) {
	
	const image = []

		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.touchableStyle}
				onPress={() => cameraOpen()}>
					<Text style={styles.textStyle}>사진촬영</Text>
				</TouchableOpacity>
				<Divider height={1} color="#d5d5d5" />
				<TouchableOpacity style={styles.touchableStyle}
				onPress={() => imagePickOne()}>
					<Text style={styles.textStyle}>앨범에서 선택하기</Text>
				</TouchableOpacity>
				<Divider height={1} color="#ededed" />
				<TouchableOpacity style={styles.touchableStyle}>
					<Text style={styles.textStyle}>기본 이미지로 설정</Text>
				</TouchableOpacity>
			</View>
		);
}
const styles = StyleSheet.create({
	container : {justifyContent : 'center', alignItems : 'center', backgroundColor : 'white', borderRadius : 15, height: SIZE_WIDTH * 0.4, overflow : 'hidden'},
	touchableStyle : {flex : 1, justifyContent : 'center', borderBottomWidth : 1 , borderBottomColor : '#ededed', width : '100%'},
	textStyle : {fontSize : 18 , color : 'black', textAlign : 'center'},
})