import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
// import { View } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { getKoreanDay } from '../../calendar/service/calendarService';
import { Button } from '../../common/components/Button';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';
import { getDateYMD } from '../../common/service/dateService';


interface RecordDetailModalProps {
	data : any
	setModalVisible(value : boolean) : void
}

export function RecordDetailModal(props : RecordDetailModalProps) {

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
				<Image key={id} style={{borderRadius : 10, height : SIZE_WIDTH * 0.2 , width : SIZE_WIDTH * 0.2, marginRight : 10 }} source={{uri : item}}></Image>
			)
		})
		
		return viewArr
	}

	function renderContent() {

		let dateFormat = getDateYMD(currentDate,'.') + ' (' + getKoreanDay(currentDate.getDay()) +')' + ' | ' + props.data.time.substr(0,5) 
		if(props.data.kind == '발달기록'){
			return(
				<View>
					<Text style={{fontSize: 16, color : '#707070', marginBottom : 5 }}>발생일시</Text>
					<Text style={{fontSize: 18, color : 'black', marginBottom : GLOBAL_MARGIN_HORIZON * 1.5}}>{dateFormat}</Text>
	
					<Text style={{fontSize: 16, color : '#707070', marginBottom : 5 }}>문제내역 및 영역</Text>
					<Text style={{fontSize: 18, color : 'black', marginBottom : GLOBAL_MARGIN_HORIZON * 1.5}}>
						{props.data.title} | <Text style={{fontSize :12,color : '#aaaaaa'}}>{props.data.treatmentArea}
					</Text></Text>
					
					<Text style={{fontSize: 16, color : '#707070', marginBottom : 5 }}>공유한 치료사</Text>
					<Text style={{fontSize: 18, color : 'black', marginBottom : GLOBAL_MARGIN_HORIZON * 1.5}}>{props.data.theraphistId}</Text>

					<Text style={{fontSize: 16, color : '#707070', marginBottom : 5 }}>남긴 내용</Text>
					<Text style={{fontSize: 18, color : 'black', marginBottom : GLOBAL_MARGIN_HORIZON * 1.5}}>키블이가 걷다가 자꾸 넘어져요 키블이가 걷다가 자꾸 넘어져요</Text>

					<Text style={{fontSize: 16, color : '#707070', marginBottom : 5 }}>첨부파일</Text>
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

	const currentDate = new Date(props.data.date)
		return (
			<View style={styles.container}>
				<ScrollView>
				<TouchableOpacity onPress={() => {
					props.setModalVisible(false),
					console.log('에베ㅔ베ㅔㅂ벱')
				}}>
					<Icon name="close-outline" style={styles.closeIcon}></Icon>
				</TouchableOpacity>

				<View style={{paddingHorizontal : GLOBAL_MARGIN_HORIZON, paddingTop : GLOBAL_MARGIN_VERTICAL, paddingBottom : GLOBAL_MARGIN_VERTICAL}}>
					{renderTopIcon()}
					<Text style={[styles.topText,getTextColor()]}>{props.data.kind} <Text style={{color : 'black'}}>상세보기</Text></Text>
				</View>
				
				<Divider height={1} color={'#ededed'}></Divider>
				
				<View style={styles.mainContainer}>
					{renderContent()}
				</View>

				<View style={{position : 'absolute', bottom : 0, flexDirection : 'row', paddingHorizontal : GLOBAL_MARGIN_HORIZON, backgroundColor : 'white'}}>
					<View style={{flex : 1, marginRight : 5}}>
						<Button text={'삭제'} textColor={MAIN_COLOR}
						style={{borderColor : MAIN_COLOR, borderWidth : 1}}
						></Button>
					</View>
					<View style={{flex : 1, marginLeft : 5}}>
						<Button text={'수정'} textColor={'white'}
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

})