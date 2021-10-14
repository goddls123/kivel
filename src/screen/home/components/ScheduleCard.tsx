import React from 'react'
import { View, StyleSheet, ViewStyle, Text, TouchableOpacity, Animated } from 'react-native';
import { schedule } from '../../../types/calendarTypes';


interface ScheduleCardProps {
	style? : ViewStyle
	height : number
	width : number
	// data? : schedule | any
}

export function ScheduleCard(props : ScheduleCardProps) {
		const CARD_HEIGHT 	= props.height
		const CARD_WIDTH 	= props.width

		//Todo 
		//치료사 영역별 치료영역 색깔 변경
		// 
		return (
			<View style={[{height : props.height , width : props.width}, props.style ,styles.container] }>
				<View style={styles.innerContainer}>

					{/* 오늘 스케줄은 옆에 주황줄 */}
					<View style={{ width : CARD_WIDTH * 0.02 , backgroundColor : '#ff8a5c'}} />
					
					<View style={{ width : CARD_WIDTH ,  marginLeft : CARD_WIDTH * 0.09}} >
						<View style={{height : CARD_HEIGHT * 0.22}}>

						</View>
						<View style={{height : CARD_HEIGHT * 0.25, flexDirection : 'row'}}>
							{/* 이미지 들어갈 공간 */}
							<View style={styles.imageContainer}>

							</View>
							{/* 이름 */}
							<View style={styles.nameContainer} >
								<View style={styles.badge}>
									<Text style={[styles.badgeText,{color : "#01b399", backgroundColor : "#e7f7f6"}]}>언어치료</Text>
								</View>
								<View>
									<Text style={styles.textStyle}>김초롱 치료사</Text>
								</View>
							</View>
						</View>

						<View style={{flex : 1, justifyContent : 'center'}}>
							
							<View style={{flexDirection : 'row'}}>
								<Text style={{width : CARD_HEIGHT * 0.32, fontSize : 14, color : "#aaaaaa"}}>과목</Text>
								<Text style={styles.textStyle}>계절_언어치료</Text>
							</View>
							
							
							<View style={{ flexDirection : 'row'}}>
								<Text style={{width : CARD_HEIGHT * 0.32, fontSize : 14, color : "#aaaaaa"}}>시간</Text>
								<Text style={styles.textStyle}>09:00 - 15:00</Text>
							</View>
							
							
							<View style={{ flexDirection : 'row'}}>
								<Text style={{width : CARD_HEIGHT * 0.32, fontSize : 14, color : "#aaaaaa"}}>장소</Text>
								<Text style={styles.textStyle}>와이아동발달센터</Text>
							</View>
							
						</View>
					</View>
				</View>



			</View>

			
		);
}
const styles = StyleSheet.create({
	container : {borderWidth : 1, borderColor : "#ededed", overflow : 'hidden', borderRadius : 10},
	innerContainer : {flex : 1, flexDirection : 'row'},
	textContainer : {
		flex : 1,
		justifyContent: 'center',
		alignItems : 'center',
		borderWidth : 1,
		borderRadius : 10,
	},
	imageContainer : {height : '100%', width : '22%', borderRadius : 100, backgroundColor : 'yellow',overflow : 'hidden' },
	nameContainer : {marginLeft : '8%'},
	badge : { alignItems : 'flex-start' , justifyContent : 'center', marginVertical : 3},
	badgeText : {fontSize : 12, paddingHorizontal : 8, paddingVertical : 3, borderRadius :5 , textAlign : 'center'},
	textStyle : {fontSize : 16, color : 'black'},
})