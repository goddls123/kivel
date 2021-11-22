import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import ImageModal from 'react-native-image-modal';
// import { View } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { developmentRecordType } from '../../../types/types';
import { getKoreanDay } from '../../calendar/service/calendarService';
import { Button } from '../../common/components/Button';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';
import { getDateYMD } from '../../common/service/dateService';


interface RecordDetailModalProps {
	data : developmentRecordType
	setModalVisible(value : boolean) : void
}

export function RecordDetailModal(props : RecordDetailModalProps) {
	
	const navigation = useNavigation()
	function renderTopIcon() {
		let image : any
		if(props.data.kind == '발달기록')
			image = require('../../../assets/icons/ic_develop_40.png')
		else if(props.data.kind == '문제행동')
			image = require('../../../assets/icons/ic_behavior_40.png')
		else if(props.data.kind == '메모')
			image = require('../../../assets/icons/ic_memo_40.png')

		return (
			<View style={styles.topImageContainer}>
				<Image style={styles.topImage} source={image}></Image>
			</View>
		)
	}

	function renderImage() {
		let viewArr : Element[] = []
		
		props.data.image?.map((item : string, id : number) => {
			viewArr.push( 
				<ImageModal 
				key={id} 
				resizeMode='contain'
				style={{backgroundColor : '#ededed', borderRadius : 10, height : SIZE_WIDTH * 0.2 , width : SIZE_WIDTH * 0.2, marginRight : 10 }} 
				source={{uri : item}}></ImageModal>
			)
		})
		
		return viewArr
	}

	function renderContent() {
		
		let dateFormat = getDateYMD(currentDate,'.') + ' (' + getKoreanDay(currentDate.getDay()) +')' 
		
		let hour = currentDate.getHours().toString()
		if(hour.length == 1) 
			hour = '0' + hour
		
		let minute = currentDate.getMinutes().toString()
		if(minute.length == 1) 
			minute = '0' + minute
		
		let timeFormat = hour + ' : ' + minute
					
		
		if(props.data.kind == '발달기록'){
			return(
				<View>
					<Text style={styles.contentHeaderText}>발생일시</Text>
					<View style={{flexDirection : 'row'}}>
						<Text style={styles.contentText}>{dateFormat}  |  {timeFormat}</Text>
						{props.data.emergency? <Text style={styles.badgeText}>긴급</Text> : null}
					</View>
					<Text style={styles.contentHeaderText}>문제내역 및 영역</Text>
					<Text style={styles.contentText}>
						{props.data.title} | <Text style={{fontSize :12,color : '#aaaaaa'}}>{props.data.problem}
					</Text></Text>
					
					<Text style={styles.contentHeaderText}>공유한 치료사</Text>
					<Text style={styles.contentText}></Text>

					<Text style={styles.contentHeaderText}>남긴 내용</Text>
					<Text style={styles.contentText}>{props.data.detail}</Text>

					<Text style={styles.contentHeaderText}>첨부파일</Text>
					<View style={{flexDirection : 'row'}}>
					{ renderImage() }
					</View>
					
				</View>
			)
		}
		else if(props.data.kind == '문제행동'){
			return(
				<View>
					<Text style={styles.contentHeaderText}>발생일시</Text>
					<View style={{flexDirection : 'row'}}>
					<Text style={styles.contentText}>{dateFormat} | {timeFormat}</Text>
						{props.data.emergency? <Text style={styles.badgeText}>긴급</Text> : null}
					</View>
	
					<Text style={styles.contentHeaderText}>문제내용</Text>
					<Text style={[styles.contentText, { marginBottom : 5 }]}>
						{props.data.title} 
					</Text>
					<View style={{flexDirection : 'row', marginBottom : GLOBAL_MARGIN_HORIZON}}>
					{ renderImage() }
					</View>
					

					<Text style={styles.contentHeaderText}>대처 내용</Text>
					<Text style={styles.contentText}>{props.data.content}</Text>

					<Text style={styles.contentHeaderText}>공유한 치료사</Text>
					<Text style={styles.contentText}>{props.data.theraphistId}</Text>
					
				</View>
			)
		}
		else if(props.data.kind == '메모'){
			return(
				<View>
					<Text style={styles.contentHeaderText}>작성일</Text>
					<Text style={styles.contentText}>{dateFormat} </Text>
	
					<Text style={styles.contentHeaderText}>내용</Text>
					<Text style={styles.contentText}>
						{props.data.title} 
					</Text>

					{/* 태그 */}
					<View style={styles.tagContainer}>
					{
						props.data.tag?.map((tag : string, id : number) => {
							return(
								<Text key={id} style={styles.tagText}>
									{tag}
								</Text>	
							)
						})
					}
					</View>
					<View style={{flexDirection : 'row'}}>
					{ renderImage() }
					</View>
					
				</View>
			)
		}
		
	}
	


	function getTextColor(){
		if(props.data.kind == "발달기록")
			return { color : '#0fafe9'}
		else if(props.data.kind == '문제행동')
			return { color : '#ff2d76'}
		else if(props.data.kind == '메모')
			return { color : '#707070'}
	}

	const currentDate = new Date((props.data.occurenceDate + '+09:00').replace(' ','T')) || new Date()
		return (
			<View style={styles.container}>
				<ScrollView stickyHeaderIndices={[1]}>

				<View style={styles.topIconContainer}>
					{renderTopIcon()}
				</View>
				<View style={{paddingHorizontal : GLOBAL_MARGIN_HORIZON, marginBottom : GLOBAL_MARGIN_HORIZON}}>
					<Text style={[styles.topText,getTextColor()]}>{props.data.kind} <Text style={{color : 'black'}}>상세보기</Text></Text>
				</View>
				<Divider height={1} color={'#ededed'}></Divider>
				
				
				<View style={styles.mainContainer}>
					{renderContent()}
				</View>

				<View style={styles.buttonContainer}>
					<View style={{flex : 1, marginRight : 5}}>
						<Button text={'삭제'} 
						textColor={MAIN_COLOR}
						style={{borderColor : MAIN_COLOR, borderWidth : 1}}
						></Button>
					</View>
					<View style={{flex : 1, marginLeft : 5}}>
						<Button text={'수정'}
						onPress={() => navigation.navigate('AddRecord',{radioState : [true, false, false], developmentData : props.data})}
						textColor={'white'}
						style={{backgroundColor : MAIN_COLOR}}
						></Button>
					</View>
				</View>
				
				</ScrollView>

			</View>
		);
}
const styles = StyleSheet.create({
	container : {borderTopLeftRadius: 20, borderTopRightRadius : 20, backgroundColor : 'white', height : SIZE_HEIGHT * 0.8 },
	closeIcon : {position : 'absolute', top : GLOBAL_MARGIN_HORIZON, right : GLOBAL_MARGIN_HORIZON ,fontSize: 35, fontWeight : 'bold', color : 'black'},
	topText : {paddingTop : GLOBAL_MARGIN_HORIZON , fontSize : 20, fontWeight : 'bold'},
	topImageContainer : {height: SIZE_WIDTH * 0.18, width : SIZE_WIDTH * 0.18, backgroundColor : '#f6f6f6', borderRadius : 8, alignItems : 'center', justifyContent : 'center'},
	topImage : {height : SIZE_WIDTH * 0.12, width :SIZE_WIDTH * 0.12},
	mainContainer : {paddingTop : GLOBAL_MARGIN_VERTICAL, paddingHorizontal : GLOBAL_MARGIN_HORIZON, paddingBottom : GLOBAL_MARGIN_VERTICAL * 3},
    badgeText: {
		marginLeft : 10,
		textAlignVertical : 'center',
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 5,
        textAlign: 'center',
        marginRight: 10,
		backgroundColor : '#fdeae2',
		color : MAIN_COLOR,
		marginBottom : GLOBAL_MARGIN_HORIZON * 1.5
    },
	contentHeaderText : {fontSize: 16, color : '#707070', marginBottom : 5 },
	contentText : {fontSize: 18, color : 'black', marginBottom : GLOBAL_MARGIN_HORIZON * 1.5},
	topIconContainer : {paddingHorizontal : GLOBAL_MARGIN_HORIZON, paddingTop : GLOBAL_MARGIN_VERTICAL},
	buttonContainer : {position : 'absolute', bottom : 0, flexDirection : 'row', paddingHorizontal : GLOBAL_MARGIN_HORIZON, backgroundColor : 'white'},
	tagContainer : {
		flexDirection: 'row',
		marginBottom: GLOBAL_MARGIN_VERTICAL * 0.5,
	},
	tagText : {
		color: '#707070',
		fontSize: 14,
		paddingHorizontal: 5,
		paddingVertical: 3,
		backgroundColor: '#ededed',
		borderRadius: 4,
		marginRight : 10
	},
})