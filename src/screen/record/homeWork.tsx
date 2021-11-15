import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import Modal from 'react-native-modal'
import { SIZE_WIDTH } from '../common/constants';
import { stackInterface } from '../../types/navigationParam';
import { StackNavigationProp } from '@react-navigation/stack';

interface homeWorkProps {
	navigation: StackNavigationProp<stackInterface>;
}

export function homeWork(props : homeWorkProps) {
		return (
			<SafeAreaView style={styles.container}>
				
				<View  style={{position : 'absolute', elevation : 2, bottom : 20, left : SIZE_WIDTH * 0.375 , width : SIZE_WIDTH * 0.25, borderRadius : 25, borderWidth :1, borderColor : 'black', backgroundColor : 'white', padding : 10}}>
				<TouchableOpacity style={{ flexDirection : 'row'}} onPress={() => props.navigation.navigate('AddHomeWork')}>
					<Image style={{height : 24, width : 24, }} source={require('../../assets/icons/ic_write_24.png')}></Image>
					<Text style={{fontSize : 20,}}> 작성 </Text>
				</TouchableOpacity>
				</View>
			
				{/* <Modal isVisible={modalVisible} style={{margin : 0, justifyContent : 'flex-end'}}
				onBackdropPress={() => setModalVisible(false)}>
					<RecordDetailModal
					setModalVisible={setModalVisible}
					data={modalItem} />
				</Modal> */}
			</SafeAreaView>
		);
}
const styles = StyleSheet.create({
	container: {flex: 1, backgroundColor: 'white'},
})