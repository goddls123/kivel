import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Modal from 'react-native-modal';
import { assertScalarType } from 'graphql';



interface chatSendedProps {
        mine : boolean
        image? : any
        text : string
		setModalData(value : string) : any
}

export function ChatBox(props : chatSendedProps) {

	

	return (
		<View style={[
			styles.message, 
			props.mine ? styles.message_sended : styles.message_received
		]}>
			<TouchableOpacity
				activeOpacity={0.8}
				style={[styles.cloud,
						{
							backgroundColor : props.mine ? '#dddddd' : '#007aff'
						}]}
				delayLongPress={5000}
				onLongPress = {() => {
					props.setModalData(props.text)
				}}
			>	
				{
					props.image 
					?
						<Image
							style={{alignSelf : props.mine ? 'flex-start' : 'flex-end'}}
							borderRadius={10}
							source={props.image}
						/>
					: null
				}
				{
					props.text
					?
						<Text
						style={[styles.text,{color : props.mine? 'black' : 'white'}]}>{props.text}</Text>
					: null
				}
			
			</TouchableOpacity>
				
		</View>
	);
}
const styles = StyleSheet.create({
	message : {
		flexDirection : 'row',
		marginVertical : moderateScale(7,2)
	},
		message_received : {
		marginLeft : 20,

	},
	message_sended : {
		alignSelf : 'flex-end',
		marginRight : 29

	},
	cloud :{
		maxWidth : moderateScale(250),
		paddingHorizontal : moderateScale(10,2),
		paddingTop : moderateScale(5,2),
		paddingBottom : moderateScale(7,2),
		borderRadius : 20

	},
	text:{
		paddingTop : 3,
		fontSize : 17,
		lineHeight : 22,
	}
})