import React from 'react'
import { View, StyleSheet, ViewStyle, Text, TouchableOpacity } from 'react-native';
import { schedule } from '../../../types/calendarTypes';


interface ScheduleCardProps {
	style : ViewStyle
	// data? : schedule | any
}

export function ScheduleCard(props : ScheduleCardProps) {


		const CARD_HEIGHT = props.style.height
		const CARD_WIDTH = props.style.width

		return (
			<View style={[props.style,{borderWidth : 1, borderColor : "#ededed"}]}>
				<View style={{flex : 1, flexDirection : 'row'}}>

					{/* 오늘 스케줄은 옆에 주황줄 */}
					<View style={{ width : CARD_WIDTH * 0.02 }} />
					<View style={{ width : '98%',  marginLeft : '9%'}} >
						<View style={{height : '22%'}}>

						</View>
						<View style={{height : '25%', flexDirection : 'row'}}>
							{/* 이미지 들어갈 공간 */}
							<View style={{height : '100%', width : '22%', borderRadius : 100, backgroundColor : 'yellow',overflow : 'hidden' }}>

							</View>
							{/* 이름 */}
							<View style={{marginLeft : '8%'}} >
								<View style={{ justifyContent : 'center', marginVertical : 3}}>
									<Text style={{color : "#01b399", fontSize : 12, backgroundColor : "#e7f7f6", textAlign : 'center'}}>언어치료</Text>
								</View>
								<View>
									<Text>김초롱 치료사</Text>
								</View>
							</View>

						</View>
					</View>
					
				</View>



			</View>

			
		);
}
const styles = StyleSheet.create({
	textContainer : {
		flex : 1,
		justifyContent: 'center',
		alignItems : 'center',
		borderWidth : 1,
		borderRadius : 10,
	}
})