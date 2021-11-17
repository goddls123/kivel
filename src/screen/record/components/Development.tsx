import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, Switch, TextInput, ScrollView, Alert } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from '../../common/divider';
import Modal from 'react-native-modal'
import { DateTimeScroller } from '../components/DateTimeScroller';
import { getDateYMD, getDayKorean, getTime } from '../../common/service/dateService';
import { Button } from '../../common/components/Button';
import { ReactNativeFile } from 'extract-files';
import ImagePicker from 'react-native-image-crop-picker'
import { requestCameraPermission } from '../../common/service/cameraServices';
import { developmentRecordType } from '../../../types/types';
import { useMutation } from '@apollo/client';
import { UPLOAD_DEVELOPMENT_RECORD } from '../../../connection/queries';
import { useNavigation } from '@react-navigation/core';

interface DevelopmentProps {
}

export function Development(props: DevelopmentProps) {
	const navigation = useNavigation()

	const [record, setRecord] = React.useState<developmentRecordType>({
		title : '',
		detail : '',
		emergency : false,
		occurenceDate : new Date(),
		problem : ''
	})
	const setTitle = (value : string) => {
		setRecord({...record, title : value})
	}
	const setIsEmergency = (value : boolean) => {
		setRecord({...record, emergency : value})
	}
	const setOccurenceDate = (value : Date) => {
		setRecord({...record, occurenceDate : new Date()})
	}
	const setProblemArea = (value : string) => {
		setRecord({...record, problem : value})
	}
	const setDetail = (value : string) => {
		setRecord({...record, detail : value})
	}
	
	const [uploadRecord, {loading, data, error}] = useMutation(UPLOAD_DEVELOPMENT_RECORD)

	const [modalVisible, setModalVisible] = React.useState(false)
	const [images, setImages] = React.useState<ReactNativeFile[]>()

	function renderDateButton() {
		return (
			<View style={styles.dateButtonInnerContainer}>
				<TouchableOpacity onPress = {() => setModalVisible(true)}>
					<View style={styles.dateTextBox}>
						<Text style={styles.dateText}>{getDateYMD(record.occurenceDate,'. ') + '(' + getDayKorean(record.occurenceDate.getDay()) + ')'}</Text>
						<Icon style={styles.chevronDownIcon} name="chevron-down"></Icon>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress = {() => setModalVisible(true)}>
					<View style={styles.dateTextBox}>
						<Text style={styles.dateText}>{getTime(record.occurenceDate, ' : ')}</Text>
						<Icon style={styles.chevronDownIcon} name="chevron-down"></Icon>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	function renderProblemButton() {
		let problemArr = [
			{ title : '대근육', img : require('../../../assets/icons/ic_balance_32.png') },
			{ title : '소근육', img : require('../../../assets/icons/ic_hand_32.png') },
			{ title : '언어', img : require('../../../assets/icons/ic_speech_32.png') },
			{ title : '사회성', img : require('../../../assets/icons/ic_social_32.png') },
			{ title : '인지', img : require('../../../assets/icons/ic_observe_32.png') },
			{ title : '기타', img : require('../../../assets/icons/ic_etc_32.png') }
		]

		let viewArr : any= []

		problemArr.map((item, id) => {
			viewArr.push(
				<View key={id} style={{alignItems : 'center'}}>
					<TouchableOpacity onPress={() => setProblemArea(item.title)}>
						<View style={[styles.problemButtonBox,{backgroundColor : record.problem == item.title ? MAIN_COLOR : '#ededed',}]}>
							<Image style={styles.problemButtonImage} source={item.img}></Image>
						</View>
					</TouchableOpacity>
					<Text style={styles.problemText}>{item.title}</Text>
				</View>
			)
		})

		return (						
			<View style={styles.problemButtonContainer}>
				{viewArr}
			</View>
		)
	}

	function renderImage() {
		return(
			<View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center',marginTop : GLOBAL_MARGIN_HORIZON}}>
				<ScrollView style={{flex: 1}} horizontal showsHorizontalScrollIndicator={false}>
				{
					images?.map((image: ReactNativeFile, idx) => {
						return (
							<View key={idx} style={styles.imagContainer}>
								<Image
								source={{uri: image.uri}}
								style={styles.imageStyle}
								// resizeMode="contain"
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

	
    return (
        <View style={styles.container}>

            {/* dateButtonContainer */}
            <View style={styles.dateButtonContainer}>
                <Text style={styles.boldText}> 발생일시 </Text>
                { renderDateButton() }
                <View style={styles.dateButtonBottomContainer}>
                    <View style={styles.rowAlignCenter}>
                        <Text style={styles.emergencyText}>긴급사항인가요?</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <Icon style={styles.helpIcon} name="help-circle-outline" />
                        </TouchableOpacity>
                    </View>
                    <Switch
                        style={{alignSelf: 'flex-end'}}
                        trackColor={{false: '#767577', true: '#ffebee'}}
                        thumbColor={record.emergency ? MAIN_COLOR : '#f4f3f4'}
                        onValueChange={() => setIsEmergency(!record.emergency)}
                        value={record.emergency}/>
                </View>
            </View>
            <Divider height={4} color={'#ededed'}></Divider>

            {/* titleInputContainer */}
            <View style={styles.containerNoHeight}>
                <Text style={styles.boldText}> 어떤 문제가 있었나요? </Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="문제를 입력해주세요"
                    placeholderTextColor="#d5d5d5"
					onChangeText={(text) => setTitle(text)}
					value={record.title}></TextInput>
                <Text style={{color: 'black', fontSize: 16}}>+ 이전 문제에서 추가</Text>
            </View>
            <Divider height={4} color={'#ededed'}></Divider>

            {/* problemAreaButton */}
            <View style={styles.containerNoHeight}>
                <Text style={styles.boldText}>어떤 영역의 문제인가요? </Text>
                {renderProblemButton()}
                <Text style={styles.boldText}>어떤 선생님한테 공유할까요? </Text>
            </View>
            <Divider height={4} color={'#ededed'}></Divider>

            <View style={styles.containerNoHeight}>
                <Text style={styles.boldText}>좀 더 자세히 알려주세요! </Text>
                <TextInput
				style={styles.detailTextInputStyle}
				placeholder='ex) 키블이가 자꾸 걷다가 넘어져요'
				placeholderTextColor='#d5d5d5'
				textAlignVertical='top'
				multiline
				value = {record.detail}
				onChangeText={(text) => setDetail(text)}
				></TextInput>

				<Text style={styles.boldText}>사진을 첨부해주세요</Text>
				<View style={styles.addCameraButton}>
					<TouchableOpacity 
						style={{flexDirection :'row', justifyContent : 'space-between'}} 
						// onPress={ async () => setImages(imagePickMultiple())}>
						onPress={() => imagePickMultiple()}>
							<Text style={{fontSize : 16}}>사진 업로드</Text>
							<Icon style={{fontSize : 20}} name="add-outline"></Icon>
					</TouchableOpacity>
				</View>
				{ renderImage() }
            </View>            

			<View style={{marginHorizontal : GLOBAL_MARGIN_HORIZON, marginVertical : GLOBAL_MARGIN_VERTICAL}}>
				<Button onPress={() => 
				uploadRecord({
					variables : {
						DevelopmentRecordInput : record
					}
				})
				.then(() => navigation.goBack())
				.catch(e => 
					{
						console.log(e)
					}
					
				)
			}
				text={'작성완료'} textColor={'white'} style={{backgroundColor : MAIN_COLOR, elevation :3}}></Button>
			</View>


            {/* 출생일 dateScroller */}
            <Modal isVisible={modalVisible}>
                <DateTimeScroller
				setDate={setOccurenceDate}
				date={record.occurenceDate}
				setModalVisible={setModalVisible} />
            </Modal>

        </View>
    );
}
const styles = StyleSheet.create({
	container : {},
	boldText : {fontSize : 18, color : 'black'},
	dateButtonContainer : { height : SIZE_WIDTH * 0.4, padding : GLOBAL_MARGIN_HORIZON , justifyContent : 'space-between'},
	dateButtonInnerContainer : {flexDirection: 'row', justifyContent : 'space-between'},
	dateTextBox : {flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', width : SIZE_WIDTH * 0.43 , padding : 10, borderWidth: 1, borderColor: '#d5d5d5', borderRadius: 8, },
	dateText : {fontSize : 16, color : 'black'},	
	chevronDownIcon : {fontSize : 20, color : '#aaaaaa'},	
	emergencyText : {color : MAIN_COLOR , fontSize : 16},
	dateButtonBottomContainer : {flexDirection : 'row', justifyContent : 'space-between'},
	rowAlignCenter : {flexDirection : 'row', alignItems : 'center'},
	helpIcon : {marginLeft :10, fontSize: 20},
	containerNoHeight : { padding : GLOBAL_MARGIN_HORIZON , justifyContent : 'space-between'},
	problemButtonBox : {height : SIZE_WIDTH * 0.13, width : SIZE_WIDTH * 0.13, borderRadius : 8, alignItems : 'center', justifyContent : 'center'},
	problemButtonImage : {height : SIZE_WIDTH * 0.1, width : SIZE_WIDTH * 0.1},
	problemText : {marginTop : 10, fontSize : 14, color : 'black'},
	problemButtonContainer : {flexDirection : 'row', justifyContent : 'space-between', marginTop : 10, marginBottom : 20,},
	textInputStyle : {
		borderWidth: 1,
		borderColor: '#d5d5d5',
		marginTop: 10,
		borderRadius: 10,
		paddingLeft: 10,
		marginBottom: 15,
	},
	imagContainer : {
		borderRadius : 8,
		width : SIZE_WIDTH * 0.25,
		height : SIZE_WIDTH * 0.25,
		marginRight : 20,
		backgroundColor : '#ededed',
		justifyContent : 'center',
		alignItems : 'center',
	},
	imageStyle: { width : SIZE_WIDTH * 0.25, height : SIZE_WIDTH * 0.25, borderRadius : 10},
	imageCancel: {
		position: 'absolute',
		right: 5,
		top: 5,
		backgroundColor: 'black',
		borderRadius: 100,
		width: 20,
		height: 20,
		alignItems: 'center',
		justifyContent : 'center',
	  },
	  imageCancelIcon : {
		  color : 'white', 
		  fontSize: 15,
		},
	detailTextInputStyle : { maxHeight : SIZE_WIDTH * 0.5 ,borderRadius : 10, borderWidth : 1, borderColor : '#d5d5d5', padding : 15, marginTop : 10, marginBottom : 20 },
	addCameraButton : { borderRadius : 8, borderColor : '#ededed', borderWidth : 1, padding : 10, marginTop : 10, backgroundColor : '#ededed'},
});
