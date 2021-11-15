import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, Switch, TextInput, ScrollView, Alert } from 'react-native';
import { stackInterface } from '../../types/navigationParam';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from '../common/divider';
import { Development } from './components/Development';
import { Memo } from './components/Memo';
import { RouteProp } from '@react-navigation/native';
import { getDateYMD } from '../common/service/dateService';
import { getKoreanDay } from '../calendar/service/calendarService';
import DropDownPicker from 'react-native-dropdown-picker';
import { ReactNativeFile } from 'extract-files';
import { Button } from '../common/components/Button';
import Modal from 'react-native-modal'
import { DateScroller } from '../childEnroll/components/DateScroller';
import { requestCameraPermission } from '../common/service/cameraServices';
import ImagePicker from 'react-native-image-crop-picker'
import ImageModal from 'react-native-image-modal';
interface addHomeWorkProps {
	navigation: StackNavigationProp<stackInterface>;
	route: RouteProp<stackInterface>;
}

export function addHomeWork(props : addHomeWorkProps) {
	const newDate = new Date()
	const [title, setTitle] = React.useState<string>()
	const [startDate, setStartDate] = React.useState<Date>(newDate)
	const [endDate, setEndDate] = React.useState<Date>(new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 7 ))
	const [link, setLink] = React.useState<string[]>([])
	const [memo, setMemo] = React.useState<string>()


	const [images, setImages] = React.useState<ReactNativeFile[]>([])

	const [termDropDownOpen,setTermDropDownOpen] = React.useState<boolean>(false)
	const [termPlanValue, setTermPlanValue] = React.useState(7)
	const [termPlanItems, setTermPlanItems] = React.useState([
		{label: '매일' 	, value : 7},
		{label: '주 1회', value : 1},
		{label: '주 2회', value : 2},
		{label: '주 3회', value : 3},
		{label: '주 4회', value : 4},
		{label: '주 5회', value : 5},
		{label: '주 6회', value : 6},
	]);

	const [startDateModalVisible, setStartDateModalVisible] = React.useState<boolean>(false)
	const [endDateModalVisible, setEndDateModalVisible] = React.useState<boolean>(false)
	
	
	function imagePickMultiple() {
		let files: ReactNativeFile[] = [];
		requestCameraPermission().then(result => {
			if(result){
				const image = ImagePicker.openPicker({
					mediaType: 'photo',
					multiple: true,
					includeBase64: true,
					forceJpg: true,
				}).then((image: any) => {
					// let files: ReactNativeFile[] = [];
					image.map((e: any) => {
						const file = new ReactNativeFile({
						uri: e.path,
						type: e.mime,
						name: 'test.jpg',
					});
					files.push(file);
				  });
				  setImages(files)
				});
			}
			else {
				Alert.alert('카메라 권한이 없습니다.')
			}
		})
	};

	function renderImage() {
		return(
			<View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', marginVertical : GLOBAL_MARGIN_HORIZON, overflow:'hidden'}}>
				<ScrollView style={{flex: 1}} horizontal showsHorizontalScrollIndicator={false}>
					<TouchableOpacity style={styles.imageBox} onPress={() => imagePickMultiple()}>
						<Icon name="camera-outline" style={{fontSize : 30}}></Icon>
						<Text style={{fontSize : 14, color : 'black'}}>사진 0/10</Text>
					</TouchableOpacity>
				{
					images?.map((image: ReactNativeFile, idx) => {
						return (
							<View key={idx} style={styles.imageBox}>
								<Image
								source={{uri: image.uri}}
								style={styles.imageStyle}
								resizeMode='cover'
								/>
								<TouchableOpacity style={styles.imageCancel} 
								onPress={() => setImages(images.filter((data, id) => id !== idx))}>
									<Icon name="close-outline" style={styles.imageCancelIcon}></Icon>
								</TouchableOpacity>
							</View>
						)
					})
				}
				</ScrollView>
			</View>
		)
	}

		return (
            <SafeAreaView style={styles.container}>
                {/* header */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.closeContainer}
                        onPress={() => props.navigation.goBack()}>
                        <Icon name="close-outline" style={styles.closeIcon}></Icon>
                    </TouchableOpacity>
                    <Text style={styles.headerTextStyle}>과제작성</Text>
                    <View style={styles.closeContainer} />
                </View>

                <ScrollView>
                    <View style={styles.containerNoHeight}>
                        <Text style={[styles.boldText,{marginBottom : 10}]}>과제명을 입력해주세요 </Text>
                        <TextInput
						style={styles.textInputStyle}
						placeholder="과제를 입력해주세요"
						placeholderTextColor="#d5d5d5"
						value={title}
						onChangeText={(text) => {setTitle(text)}}
						></TextInput>
                    </View>
                    <Divider height={4} color={'#ededed'}></Divider>

					<View style={styles.termContainer}>
						<Text style={[styles.boldText,{marginBottom : 10}]}>수행기간</Text>
						<View style={styles.termDateContainer}>
							
							<TouchableOpacity onPress={() => setStartDateModalVisible(true)}>
								<Text style={styles.dateText}>{getDateYMD(startDate,'.') + ' (' + getKoreanDay(startDate.getDay()) + ')'}</Text>
							</TouchableOpacity>

								<Text style={styles.dateText}>{' ~ '}</Text>
							
								<TouchableOpacity onPress={() => setEndDateModalVisible(true)}>
								<Text style={styles.dateText}>{getDateYMD(endDate,'.') + ' (' + getKoreanDay(endDate.getDay()) + ')'}</Text>
							</TouchableOpacity>

						</View>

						<View style={{flexDirection : 'row', marginBottom : GLOBAL_MARGIN_HORIZON}}>
							<View style={{height: 30, justifyContent : 'center', marginRight : 15}}>
								<Text style={[styles.boldText,{textAlignVertical : 'center'}]}>수행계획</Text>
							</View>
							
							<DropDownPicker 
							style={{height: 30, width : SIZE_WIDTH * 0.3, borderColor : '#d5d5d5'}}
							dropDownContainerStyle={{height : 100, width : SIZE_WIDTH * 0.3, borderColor : '#d5d5d5'}}
							items={termPlanItems} 
							value={termPlanValue} 
							open={termDropDownOpen} 
							setOpen={setTermDropDownOpen} 
							setValue={setTermPlanValue}
							listMode='SCROLLVIEW'
							></DropDownPicker>
						</View>
					</View>
					<Divider height={4} color={'#ededed'} ></Divider>

					
					<View style={styles.imageContainer}>
						<Text style={[styles.boldText,{marginBottom : 10}]}>참고링크/사진</Text>
						<View style={styles.linkTextInput}>
							<TextInput
							style={{width : SIZE_WIDTH * 0.7}}
							placeholder="참고 링크를 넣어주세요"
							placeholderTextColor="#d5d5d5"
							></TextInput>
							
							<TouchableOpacity>
								<Icon style={{fontSize : 25, color : '#C7C7C7'}} name="add-outline"></Icon>
							</TouchableOpacity>
						</View>
						{ renderImage() }
					</View>
					<Divider height={4} color={'#ededed'}></Divider>

					<View style={styles.shareContainer}>
						<Text style={[styles.boldText,{marginBottom : 10}]}>어떤 선생님한테 공유할까요?</Text>
						<View style={{flexDirection : 'row', marginBottom : GLOBAL_MARGIN_HORIZON}}>
							<Text style={styles.theraphistText}>김초롱 치료사</Text>
							<Text style={styles.theraphistText}>김초롱 치료사</Text>
						</View>
						<Text style={[styles.boldText,{marginBottom : 10}]}>더 기록할 사항이 있나요?</Text>
						<TextInput
						multiline
						style={{ maxHeight : SIZE_WIDTH * 0.5, borderRadius : 8, borderWidth : 1, borderColor : '#d5d5d5', padding : GLOBAL_MARGIN_HORIZON, textAlignVertical : 'top',marginBottom : GLOBAL_MARGIN_VERTICAL}}
						placeholder="메모를 남겨주세요"
						placeholderTextColor='#d5d5d5'
						></TextInput>

						<Button text={'작성완료'} textColor={'white'} style={{backgroundColor : MAIN_COLOR}}></Button>
					</View>

					
                </ScrollView>

				<Modal
				isVisible={startDateModalVisible}>
					<DateScroller 
					setDate={setStartDate}
					date={startDate} 
					setModalVisible={setStartDateModalVisible}
					></DateScroller>
				</Modal>

				<Modal
				isVisible={endDateModalVisible}>
					<DateScroller 
					setDate={setEndDate}
					date={endDate} 
					setModalVisible={setEndDateModalVisible}
					></DateScroller>
				</Modal>
				
            </SafeAreaView>
        );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  headerContainer: {
    height: SIZE_WIDTH * 0.16,
    marginHorizontal: GLOBAL_MARGIN_HORIZON,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextStyle: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeContainer: {width: SIZE_WIDTH * 0.1},
  closeIcon: {fontSize: 30, fontWeight: 'bold', color: 'black'},
  radioButtonContainer: {
    height: SIZE_WIDTH * 0.24,
    padding: GLOBAL_MARGIN_HORIZON,
    justifyContent: 'space-between',
  },
  boldText: {fontSize: 18, color: 'black', fontWeight: 'bold'},
  containerNoHeight: {
    padding: GLOBAL_MARGIN_HORIZON,
    justifyContent: 'space-between',
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 15,
  },
  termContainer: {
    paddingHorizontal: GLOBAL_MARGIN_HORIZON,
    paddingTop: GLOBAL_MARGIN_HORIZON,
  },
  termDateContainer: {
    width: '100%',
    paddingHorizontal: GLOBAL_MARGIN_VERTICAL,
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d5d5d5',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: GLOBAL_MARGIN_VERTICAL,
  },
  imageContainer: {
    paddingHorizontal: GLOBAL_MARGIN_HORIZON,
    paddingTop: GLOBAL_MARGIN_HORIZON,
  },
  linkTextInput: {
    paddingHorizontal: GLOBAL_MARGIN_HORIZON,
    width: '100%',
    height: SIZE_WIDTH * 0.12,
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageBox: {
    borderRadius: 8,
    width: SIZE_WIDTH * 0.2,
    height: SIZE_WIDTH * 0.2,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: SIZE_WIDTH * 0.2,
    height: SIZE_WIDTH * 0.2,
    borderRadius: 10,
  },
  imageCancel: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'black',
    borderRadius: 100,
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCancelIcon: {
    color: 'white',
    fontSize: 14,
  },
  shareContainer : {
	paddingHorizontal: GLOBAL_MARGIN_HORIZON,
    paddingTop: GLOBAL_MARGIN_HORIZON,
  },
  theraphistText : {marginRight : 10, paddingHorizontal : 15, paddingVertical : 8, borderWidth : 1, borderRadius : 16, borderColor : '#d5d5d5' , color : '#d5d5d5'},
  dateText : {marginVertical : 10, fontSize : 16, color : 'black'},
});