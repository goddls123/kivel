import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, StyleSheet, TouchableOpacity, ActivityIndicator, Image, Text, ScrollView } from 'react-native';
import ImageModal from 'react-native-image-modal';

// import { View } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { GET_DEVELOPMENT_DETAIL } from '../../../connection/queries';
import { developmentRecordType } from '../../../types/types';
import { getKoreanDay } from '../../calendar/service/calendarService';
import { Button } from '../../common/components/Button';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';
import { getDateYMD, getDayKorean } from '../../common/service/dateService';


interface RecordDetailModalProps {
	data : any
	navigation : any
	setModalVisible(value : boolean) : void
}

export function DevelopCardDetail(props : RecordDetailModalProps) {
	
	const [detailInfo, setDetailInfo] = React.useState<developmentRecordType>()
	const {data , loading , error} = useQuery(GET_DEVELOPMENT_DETAIL,{variables : {id : props.data.id}})
	React.useEffect(() => {
		if(data && !loading){
			setDetailInfo(data.developmentRecord)
		}
	},[data])
	
	console.log(detailInfo)

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

	const renderDateText = () => {
		let date = new Date()

		if(detailInfo?.occurenceDate)
		date = new Date(detailInfo?.occurenceDate.substr(0,10))
		
		return detailInfo?.occurenceDate.substr(0,10) + '(' + getDayKorean(date.getDay()) + ')' + '  |  ' + detailInfo?.occurenceDate.substr(11,5)
	}

	
		return (
			<View style={styles.container}>
			{
				loading
				
				? <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
					<ActivityIndicator size={'large'} />
				</View>
				
				
				: 
				<ScrollView stickyHeaderIndices={[1]}>

				<View style={styles.topIconContainer}>
					<View style={styles.topImageContainer}>
					<Image style={styles.topImage} source={require('../../../assets/icons/ic_develop_40.png')}></Image>
					</View>
				</View>
				<View style={{paddingHorizontal : GLOBAL_MARGIN_HORIZON, marginBottom : GLOBAL_MARGIN_HORIZON}}>
					<Text style={styles.topText}>발달기록<Text style={{color : 'black'}}>상세보기</Text></Text>
					<Divider height={1} color={'#ededed'}></Divider>
				</View>
				
				<View style={styles.mainContainer}>

					<View>
						<Text style={styles.contentHeaderText}>발생일시</Text>
						<View style={{flexDirection : 'row'}}>
							<Text style={[styles.contentText]}>{renderDateText()}</Text>
							{detailInfo?.emergency? <Text style={styles.badgeText}>긴급</Text> : null}
						</View>
						<Text style={styles.contentHeaderText}>문제내역 및 영역</Text>
						<Text style={styles.contentText}>
							{detailInfo?.title}  |  <Text style={{fontSize :12,color : '#aaaaaa'}}>{detailInfo?.problem}
						</Text></Text>
						
						<Text style={styles.contentHeaderText}>공유한 치료사</Text>
						<Text style={styles.contentText}></Text>

						<Text style={styles.contentHeaderText}>남긴 내용</Text>
						<Text style={styles.contentText}>{detailInfo?.detail}</Text>

						<Text style={styles.contentHeaderText}>첨부파일</Text>
						<View style={{flexDirection : 'row'}}>
						{ renderImage() }
						</View>
					</View>
					
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
						onPress={() => props.navigation.navigate('AddRecord',{radioState : [true, false, false], developmentData : detailInfo})}
						textColor={'white'}
						style={{backgroundColor : MAIN_COLOR}}
						></Button>
					</View>
				</View>
				
				</ScrollView>
			}
				

			</View>
		);
}
const styles = StyleSheet.create({
	container : {borderTopLeftRadius: 20, borderTopRightRadius : 20, backgroundColor : 'white', height : SIZE_HEIGHT * 0.8 },
	closeIcon : {position : 'absolute', top : GLOBAL_MARGIN_HORIZON, right : GLOBAL_MARGIN_HORIZON ,fontSize: 35, fontWeight : 'bold', color : 'black'},
	topText : {paddingTop : GLOBAL_MARGIN_HORIZON , fontSize : 20, fontWeight : 'bold', color : '#0fafe9', marginBottom : GLOBAL_MARGIN_HORIZON},
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
	buttonContainer : {flexDirection : 'row', paddingHorizontal : GLOBAL_MARGIN_HORIZON, backgroundColor : 'white', paddingBottom : GLOBAL_MARGIN_HORIZON},
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