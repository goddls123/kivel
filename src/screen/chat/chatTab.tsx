import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SIZE_HEIGHT } from '../common/constants';
import { ChatListView } from './component/ChatListView'



interface chatTabProps {

}
const data = [1,2,3,4,5,6,7,8,0]
export function chatTab(props : chatTabProps) {
		return (
			<View style={styles.container}> 
				<View style={styles.headerContainer}>
					<Icon style={styles.iconStyle} name="search-outline" />
					<Icon style={styles.iconStyle} name="person-add-outline" />
				</View>

				<View style={styles.adsContainer} >
					
				</View>
				
				<View style={{flex : 1}}>
					<FlatList 
					data={data} 
					renderItem={({item}) => 
						<ChatListView/>
					}
					></FlatList>
				</View>
			</View>
		);
}
const styles = StyleSheet.create({
	container : {
		flex : 1, backgroundColor :'white'
	},
	headerContainer : {
		height : SIZE_HEIGHT * 0.1 , alignItems : 'center', justifyContent : 'flex-end', flexDirection : 'row'
	},
	iconStyle : {
		fontSize: 30,
		fontWeight : 'bold',
		marginRight : 15,
	},
	adsContainer : {
		height : SIZE_HEIGHT * 0.13,
		backgroundColor : '#C4C4C4'
	}

})