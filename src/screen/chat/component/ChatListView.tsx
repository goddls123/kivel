import React from 'react'
import { View, StyleSheet } from 'react-native';
import { SIZE_HEIGHT } from '../../common/constants';

interface chatListViewProps {

}

export function ChatListView(props : chatListViewProps) {
		return (
			<View style={styles.container}>
				<View style={styles.innerContainer}>
					<View style={{flex : 1}}>

					</View>
					<View style={{flex : 6}}>

					</View>
				</View>
				
			</View>
		);
}
const styles = StyleSheet.create({
	container : {
		backgroundColor : 'white',
		height : SIZE_HEIGHT * 0.1,
	},
	innerContainer : {
		flexDirection : 'row'
	}
})