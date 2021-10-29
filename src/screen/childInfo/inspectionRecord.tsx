import React from 'react'
import { View, StyleSheet, Text, Image, Animated, Easing, TextInput,ScrollView } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_WIDTH } from '../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from '../common/divider';
import { ResultSheetCard } from './components/ResultSheetCard';
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';
import { screeningResult } from '../../types/screeningResultEnroll';
import ImageModal from 'react-native-image-modal';
import Modal from 'react-native-modal'
import { ScreeningResultCarousel } from './components/ScreeningResultCarousel';

interface inspectionRecordProps {
	navigation: StackNavigationProp<stackInterface>;
}

const test : screeningResult[] = [
	{
		id : 1, 
		image : ['https://t1.daumcdn.net/cfile/tistory/99A77E355A4C3F9F29','https://health.chosun.com/site/data/img_dir/2016/11/30/2016113001197_1.jpg'], 
		screeningDate : new Date('2021-10-01'),
		screeningInstitution : '동네병원',
		screeningName : 'ㅇ렝메ㅜㄹ 검사1111',
		memo : undefined,
	},
	{
		id : 2, 
		image : ['https://t1.daumcdn.net/cfile/tistory/99A77E355A4C3F9F29'], 
		screeningDate : new Date('2021-10-02'),
		screeningInstitution : '동네병원',
		screeningName : 'ㅇ렝메ㅜㄹ 검사2222',
		memo : undefined,
	},
	{
		id : 3, 
		image : ['https://t1.daumcdn.net/cfile/tistory/99A77E355A4C3F9F29'], 
		screeningDate : new Date('2021-10-03'),
		screeningInstitution : '동네병원',
		screeningName : 'ㅇ렝메ㅜㄹ 검사3333',
		memo : undefined,
	},
	{
		id : 4, 
		image : ['https://t1.daumcdn.net/cfile/tistory/99A77E355A4C3F9F29'], 
		screeningDate : new Date('2021-10-04'),
		screeningInstitution : '동네병원',
		screeningName : 'ㅇ렝메ㅜㄹ 검사444',
		memo : undefined,
	},
	{
		id : 5, 
		image : ['https://t1.daumcdn.net/cfile/tistory/99A77E355A4C3F9F29'], 
		screeningDate : new Date('2021-10-05'),
		screeningInstitution : '동네병원',
		screeningName : 'ㅇ렝메ㅜㄹ 검사5555',
		memo : undefined,
	},

]

export function inspectionRecord(props : inspectionRecordProps) {

	// 선택한 screen
	const [selectedScreen, setSelectedScreen] = React.useState<screeningResult>()

	
	// modal 창
	const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false)
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false) 

	const searchViewHeight = React.useRef(new Animated.Value(0)).current
	const openSearchView=() => {
		Animated.timing(searchViewHeight, {
			toValue : isSearchOpen ? 100 : 0,
			duration : 500,
			easing : Easing.ease,
			useNativeDriver : false,
		}).start()
	}
	React.useEffect(() => {
		openSearchView()
	},[isSearchOpen])
		return (
			<ScrollView style={{flex : 1, backgroundColor : 'white'}}>
				
				{/* 진단명, 검색창 */}
				<View style={styles.headerContainer}>
					<View style={styles.headerTitle}>
						<View style={styles.stick}></View>
						<Text style={styles.headerText}>{'  진단명'}</Text>
					</View>
					<View style={{flexDirection : 'row',  alignItems : 'center', marginTop : 10, marginBottom : 20}}>
						<Text style={{fontSize : 18, color: 'black', fontWeight : '600', marginRight : 20}}>{'자폐,학습장애'}</Text>
						<TouchableOpacity onPress={() => {}}>
							<Image style={{height : 22, width : 22 }} source={require('../../assets/icons/ic_edit_16.png')}></Image>
						</TouchableOpacity>
						
						<View style={{flex : 1}}>
							<TouchableOpacity style={{flexDirection : 'row', justifyContent : 'space-between' , paddingHorizontal : 10 ,alignSelf : 'flex-end', width : SIZE_WIDTH * 0.4, backgroundColor : '#d5d5d5', borderRadius : 15 }} 
							onPress={() => setIsSearchOpen(!isSearchOpen)}>
								<Text>검사기록지 검색하기</Text>
								<Icon style={{ textAlignVertical : 'bottom' ,fontSize : 22}} name="search-outline"></Icon>
							</TouchableOpacity>
						</View>
					</View>
					
					<Animated.View style={{maxHeight : searchViewHeight }}>
						<View style={{borderColor :  '#d5d5d5' ,  borderWidth : isSearchOpen ? 1 : 0 , borderRadius : 5, marginBottom : 20}}>
						<TextInput
						placeholder="검사명 또는 검사기관 검색"
						placeholderTextColor="#d5d5d5"
						></TextInput>
						</View>
						
						<View style={{borderColor :  '#d5d5d5' ,  borderWidth : isSearchOpen ? 1 : 0 , borderRadius : 5}}>
						<TextInput
						placeholder="기간 선택"
						placeholderTextColor="#d5d5d5"
						></TextInput>
						</View>
					</Animated.View>
				</View>
				<Divider height={3} color={'#ededed'}></Divider>


				{/* 결과지 listing */}
				<View style={styles.resultSheetContainer}>
					<View style={{flex : 1}}>
						<TouchableOpacity style={styles.cardEnroll} onPress={() => props.navigation.navigate('ScreeningResultEnroll')}>
							<Icon style={{fontSize : 40}} name="add-outline"></Icon>
							<Text style={{fontSize : 20}}>결과지 등록</Text>
						</TouchableOpacity>
						{
							test.map((item, id) => {
								if(id % 2 == 1){
									return(
										<TouchableOpacity 
										key={id}
										onPress={() => (
											setSelectedScreen(test[id]),
											setIsModalOpen(true)
										)}>
											<ResultSheetCard
											screeningData={item}
											style={styles.cardDetail}
											></ResultSheetCard>
										</TouchableOpacity>
									)
								}
								
							})
						}
					</View>
					<View style={{flex : 1, alignItems : 'flex-end'}}>
						{
							test.map((item, id) => {
								if(id % 2 == 0){
									return(
										<TouchableOpacity 
										key={id}
										onPress={() => (
											setSelectedScreen(test[id]),
											setIsModalOpen(true)
										)}>
											<ResultSheetCard
											screeningData={item}
											style={styles.cardDetail}
											></ResultSheetCard>
										</TouchableOpacity>
									)
								}
							})
						}
					</View>					
				</View>

				<Modal
				isVisible={isModalOpen}
				// onBackdropPress={() => setIsModalOpen(false)}
				onBackButtonPress={() => setIsModalOpen(false)}
				// animationIn='zoomIn'
				// animationOut='zoomOut'
				>
					<View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
						<ScreeningResultCarousel
						data={selectedScreen || undefined}
						></ScreeningResultCarousel>
					</View>
				</Modal>
			</ScrollView>

		);
}
const styles = StyleSheet.create({
	headerContainer : {marginHorizontal : GLOBAL_MARGIN_HORIZON, marginVertical : GLOBAL_MARGIN_VERTICAL},
	headerTitle: {flexDirection : 'row', alignItems : 'center' },
	stick : { height : 20, width : 3, backgroundColor : MAIN_COLOR},
	headerText : {fontSize : 18, color : MAIN_COLOR, fontWeight : '500'},
	resultSheetContainer : {
		flex : 1,
		marginVertical : GLOBAL_MARGIN_VERTICAL,
		marginHorizontal : GLOBAL_MARGIN_HORIZON,
		flexDirection : 'row',
	},
	resultsheetRawContainer :{
		backgroundColor : 'red',
		flexDirection : 'row',
		justifyContent : 'space-between'
	},
	cardEnroll : {
		borderRadius : 8,
		marginBottom : 10,
		width : SIZE_WIDTH * 0.43,
		height : SIZE_WIDTH * 0.43,
		backgroundColor : '#ededed',
		justifyContent : 'center',
		alignItems : 'center',
	},
	cardDetail : {
		borderRadius : 8,
		marginBottom : 10,
		width : SIZE_WIDTH * 0.43,
		height : SIZE_WIDTH * 0.43,
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor: "rgba(17, 17, 17, 0.1)"
	},
})