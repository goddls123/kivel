import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { SIZE_HEIGHT } from '../../common/constants';
import { Divider } from '../../common/divider'
interface chatListViewProps {

}

export function ChatListView(props : chatListViewProps) {
		return (
			<View style={styles.container}>
				<View style={styles.innerContainer}>
					<View style={{flex : 2, justifyContent : 'center', alignItems : 'center'}}>
						<Image 
						source={require('../../../assets/icons/egg.png')}
						style={{height :SIZE_HEIGHT * 0.05, width : SIZE_HEIGHT * 0.05, borderRadius : 100}}
						></Image>
					</View>
					<View style={{flex : 8}}>
						<Text style={{fontWeight : 'bold'}}>치료사 이름 들어갈 곳</Text>
						<Text>마지막 채팅내용 들어갈 곳</Text>
					</View>
				</View>
				
			</View>
			
			
		);
}
const styles = StyleSheet.create({
	container : {
		backgroundColor : 'white',
		height : SIZE_HEIGHT * 0.1,
		justifyContent : 'center',
		borderBottomWidth : 2,
		borderBottomColor : '#F6DCD7'
	},
	innerContainer : {
		flexDirection : 'row'
	}
})