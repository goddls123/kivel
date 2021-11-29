import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, StyleSheet, TouchableOpacity, ActivityIndicator, Image, Text, ScrollView } from 'react-native';
import ImageModal from 'react-native-image-modal';

// import { View } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { GET_CHALLENGING_DETAIL, GET_DEVELOPMENT_DETAIL } from '../../../connection/queries';
import { challengingBehaviorType, developmentRecordType } from '../../../types/types';
import { getKoreanDay } from '../../calendar/service/calendarService';
import { Button } from '../../common/components/Button';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';
import { getDateYMD, getDayKorean } from '../../common/service/dateService';


interface ChallengingCardDetailProps {
	data : any
	navigation : any
	setModalVisible(value : boolean) : void
}

export function ChallengingCardDetail(props : ChallengingCardDetailProps) {
	
	// Todo : emergency 추가
	const [detailInfo, setDetailInfo] = React.useState<challengingBehaviorType>()
	const {data , loading , error} = useQuery(GET_CHALLENGING_DETAIL,{variables : {id : props.data.id}})
	React.useEffect(() => {
		if(data && !loading){
			setDetailInfo(data.challengingBehavoir)
		}
	},[data])
	
	

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
						<Image style={styles.topImage} source={require('../../../assets/icons/ic_behavior_40.png')}></Image>
						</View>
					</View>
					<View style={{paddingHorizontal : GLOBAL_MARGIN_HORIZON, marginBottom : GLOBAL_MARGIN_HORIZON}}>
						<Text style={styles.topText}>문제행동<Text style={{color : 'black'}}>상세보기</Text></Text>
					</View>
					<Divider height={1} color={'#ededed'}></Divider>
				
				
					<View style={styles.mainContainer}>
						<Text style={styles.contentHeaderText}>발생일시</Text>
						<View style={{flexDirection : 'row'}}>
							<Text style={[styles.contentText]}>{renderDateText()}</Text>
							{/*  */}
							{/*  */}
							{/*  */}
							{/*  */}
							{/* {detailInfo.em? <Text style={styles.badgeText}>긴급</Text> : null} */}
						</View>
						<Text style={styles.contentHeaderText}>문제내용</Text>

						<Text style={[styles.contentText, { marginBottom : 5 }]}>
							{detailInfo?.title} 
						</Text>
						<View style={{flexDirection : 'row', marginBottom : GLOBAL_MARGIN_HORIZON}}>
						{ renderImage() }
						</View>
						

						<Text style={styles.contentHeaderText}>대처 내용</Text>
						<Text style={styles.contentText}>{detailInfo?.fixedMethod}</Text>

						<Text style={styles.contentHeaderText}>공유한 치료사</Text>
						{/* <Text style={styles.contentText}>{detailInfo?.theraphistId}</Text> */}
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
							onPress={() => props.navigation.navigate('AddRecord',{radioState : [false, true, false], developmentData : detailInfo})}
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
	topText : {paddingTop : GLOBAL_MARGIN_HORIZON , fontSize : 20, fontWeight : 'bold', color : '#ff2d76'},
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