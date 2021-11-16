import React from 'react'
import { View, StyleSheet, ViewStyle, Text, TouchableOpacity, Animated } from 'react-native';
import { schedule } from '../../../types/calendarTypes';
import { parsedScheduleType } from '../../../types/types';
import { getDateYMD, getDayKorean } from '../../common/service/dateService';


interface ScheduleCardProps {
	style? : ViewStyle
	height : number
	width : number
	data : parsedScheduleType
}

export function ScheduleCard(props : ScheduleCardProps) {
		const CARD_HEIGHT 	= props.height
		const CARD_WIDTH 	= props.width

		const [isTodaySchedule,setIsTodaySchedule] = React.useState<boolean>((props.data.date == getDateYMD(new Date(),'-')))
		//Todo 
		//치료사 영역별 치료영역 색깔 변경
		// 
		return (
			<View style={[{height : props.height , width : props.width}, props.style ,styles.container] }>
				<View style={styles.innerContainer}>

					{/* 오늘 스케줄은 옆에 주황줄 */}
					{isTodaySchedule 
					?	<View style={{ width : CARD_WIDTH * 0.02 , backgroundColor : '#ff8a5c'}} />
					:	<View style={{ width : CARD_WIDTH * 0.02 }} />
					}
					
					<View style={{ width : CARD_WIDTH ,  marginLeft : CARD_WIDTH * 0.09}} >
						<View style={{height : CARD_HEIGHT * 0.20, justifyContent : 'flex-end', paddingBottom : 5}}>
							{isTodaySchedule 
							? <Text style={{fontSize : 14, color : '#ff8a5c'}}>오늘</Text> 
							: <Text style={{fontSize : 14 }}>{getDateYMD(new Date(props.data.date),'.') + '(' + getDayKorean(new Date(props.data.date).getDay()) + ')'}</Text>
							}
						</View>
						{
							props.data.theraphistId
							? <View style={{height : CARD_HEIGHT * 0.25, flexDirection : 'row'}}>
								{/* 이미지 들어갈 공간 */}
								<View style={[{height : CARD_HEIGHT * 0.25, width : CARD_HEIGHT * 0.25},styles.imageContainer]}>

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
							: null
						}

						<View style={{flex : 1, justifyContent : 'space-between', paddingTop : CARD_HEIGHT * 0.08, paddingBottom : CARD_HEIGHT * 0.11}}>
							
							<View style={{flexDirection : 'row'}}>
								<Text style={[styles.grayTextStyle,{width : CARD_HEIGHT * 0.33, }]}>과목</Text>
								<Text style={styles.textStyle}>{props.data.title}</Text>
							</View>
							
							<View style={{ flexDirection : 'row'}}>
								<Text style={[styles.grayTextStyle,{width : CARD_HEIGHT * 0.33, }]}>시간</Text>
								<Text style={styles.textStyle}>{props.data.startTime.substr(0,5)} - {props.data.endTime.substr(0,5)}</Text>
							</View>
							
							
							<View style={{ flexDirection : 'row'}}>
								<Text style={[styles.grayTextStyle,{width : CARD_HEIGHT * 0.33, }]}>장소</Text>
								<Text style={styles.textStyle}>{props.data.location}</Text>
							</View>
							
						</View>
					</View>
				</View>



			</View>

			
		);
}
const styles = StyleSheet.create({
	container : {borderWidth : 1, borderColor : "#d5d5d5", overflow : 'hidden', borderRadius : 10},
	innerContainer : {flex : 1, flexDirection : 'row'},
	textContainer : {
		flex : 1,
		justifyContent: 'center',
		alignItems : 'center',
		borderWidth : 1,
		borderRadius : 10,
	},
	imageContainer : {borderRadius : 100, backgroundColor : 'green',overflow : 'hidden'},
	nameContainer : {marginLeft : '8%'},
	badge : { alignItems : 'flex-start' , justifyContent : 'center', marginVertical : 3},
	badgeText : {fontSize : 12, paddingHorizontal : 8, paddingVertical : 3, borderRadius :5 , textAlign : 'center'},
	textStyle : {fontSize : 16, color : 'black'},
	grayTextStyle : {fontSize : 14, color : "#aaaaaa"},
})