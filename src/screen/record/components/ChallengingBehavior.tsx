import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, Switch, TextInput, ScrollView, Alert } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from '../../common/divider';
import Modal from 'react-native-modal'
import { DateTimeScroller } from './DateTimeScroller';
import { getDateFromYMDHmsString, getDateYMD, getDateYMDHms, getDayKorean, getTime } from '../../common/service/dateService';
import { Button } from '../../common/components/Button';
import { ReactNativeFile } from 'extract-files';
import ImagePicker from 'react-native-image-crop-picker'
import { requestCameraPermission } from '../../common/service/cameraServices';
import { challengingBehaviorType, previousRecordType } from '../../../types/types';
import { useMutation, useQuery } from '@apollo/client';
import { GET_CHALLENGING_CARD, GET_CHALLENGING_DISTINCT, UPLOAD_CHALLENGING_BEHAVIOR } from '../../../connection/queries';
import { useNavigation } from '@react-navigation/core';

interface ChallengingBehaviorProps {
	navigation : any
	data? : challengingBehaviorType
}

export function ChallengingBehavior(props: ChallengingBehaviorProps) {
	const [challengingBehavior , setChallengingBehavior] = React.useState<challengingBehaviorType>(props.data? props.data : {
		occurenceDate : getDateYMDHms(new Date()),
		content : '',
		fixedMethod : '',
		title : '',
	})
	const [modalVisible, setModalVisible] = React.useState(false)
	const [isEmergency, setIsEmergency] = React.useState(false)
	const [images, setImages] = React.useState<ReactNativeFile[]>()
	const [uploadBehavior ,{data, loading, error}] = useMutation(UPLOAD_CHALLENGING_BEHAVIOR)
	
	

	const [previousRecord, setPreviousRecord] = React.useState<previousRecordType[]>([])
	const [previousRecordLength, setPreviousRecordLength] = React.useState(5)
	const [selectedPreviousRecord, setSelectedPreviousRecord] = React.useState<any>()

	const {data : distinctData, loading : distinctLoading , error : distinctError} = useQuery(GET_CHALLENGING_DISTINCT,{variables : {column : "title"}})
	React.useEffect(() => {
		if(distinctData && !distinctLoading){
			setPreviousRecord(distinctData.distinctChallengingBehaviors)
		}
	},[distinctData])

	

	// state set function
	const setOccurenceDate = (value : Date) => {
		let date = getDateYMDHms(value)
		setChallengingBehavior({...challengingBehavior,occurenceDate : date})
	}
	const setTitle = ( value : string ) => {
		setChallengingBehavior({...challengingBehavior, title : value})
	}
	const setContent = ( value : string ) => {
		setChallengingBehavior({...challengingBehavior, content : value})
	}
	const setFixedMethod = ( value : string ) => {
		setChallengingBehavior({...challengingBehavior, fixedMethod : value})
	}



	// rendering function
	function renderSelectCategory(){
		let viewArr : Element[] = []
		let selectedColor = 'rgba(255,138,92,0.8)'
		
		viewArr.push(
			<View style={{backgroundColor : selectedPreviousRecord == 'X' ? selectedColor : 'white'}}>
				<TextInput
				style={{paddingHorizontal : 15, borderBottomWidth : 1, borderColor : '#d5d5d5'}}
				placeholder="+ 카테고리 추가하기 (직접입력) "
				onPressIn={() => setSelectedPreviousRecord('X')}
				onChangeText={(text) => setTitle(text)}
				></TextInput>
			</View>
		)
		if(previousRecord.length){
			
			for(let i = 0; i < previousRecordLength; i ++){
				if(i == previousRecord.length) break;
	
				viewArr.push(
					<TouchableOpacity key={i} 
					style={[styles.previousRecordItem, { 
						borderTopWidth : 1,
						backgroundColor : selectedPreviousRecord == i ? selectedColor : 'white'
					}]}
					onPress={() => setSelectedPreviousRecord(i)}>
						<Text style={{fontSize : 16, color : selectedPreviousRecord == i ? 'white' : '#707070'}}>{previousRecord[i].title}</Text>
						<Text style={{fontSize : 12, color : selectedPreviousRecord == i ? 'white' : '#aaaaaa'}}> 최근 기록 : {getDateYMD(new Date(previousRecord[i].occurenceDate),'.').substr(5)}</Text>
					</TouchableOpacity>
				)
			}
			return (
				<View>
					<View style={{borderRadius : 6, borderWidth : 1, borderColor : '#d5d5d5', overflow : 'hidden'}}>
						{viewArr}
					</View>
					{
						previousRecordLength >= previousRecord.length 
						? null 
						: <TouchableOpacity 
						onPress={() => setPreviousRecordLength(previousRecordLength + 5)}
						style={{marginTop : 20,}}>
							<Text style={{alignSelf : 'center', fontSize : 18}}>더보기 <Icon style={{fontSize : 20}} name="chevron-down-outline"></Icon></Text>
						</TouchableOpacity>
					}	
				</View>
			)
		}
	}
	function renderDateButton() {
		return (
			<View style={styles.dateButtonInnerContainer}>
				<TouchableOpacity onPress = {() => setModalVisible(true)}>
					<View style={styles.dateTextBox}>
						<Text style={styles.dateText}>{challengingBehavior.occurenceDate.substr(0,10) + '(' + getDayKorean(new Date(challengingBehavior.occurenceDate).getDay()) + ')'}</Text>
						<Icon style={styles.chevronDownIcon} name="chevron-down"></Icon>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress = {() => setModalVisible(true)}>
					<View style={styles.dateTextBox}>
						<Text style={styles.dateText}>{challengingBehavior.occurenceDate.substr(11,5)}</Text>
						<Icon style={styles.chevronDownIcon} name="chevron-down"></Icon>
					</View>
				</TouchableOpacity>
			</View>
		);
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

	function renderImage() {
		return(
			<View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', marginVertical : GLOBAL_MARGIN_HORIZON, overflow:'hidden'}}>
				<ScrollView style={{flex: 1}} horizontal showsVerticalScrollIndicator={false}>
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
                        thumbColor={isEmergency ? MAIN_COLOR : '#f4f3f4'}
                        onValueChange={() => setIsEmergency(!isEmergency)}
                        value={isEmergency}/>
                </View>
            </View>
            <Divider height={4} color={'#ededed'}></Divider>

            {/* titleInputContainer */}
            <View style={styles.containerNoHeight}>

                <Text style={{color: 'black', fontSize: 16, marginBottom : 10,}}>+ 카테고리 선택</Text>
				{renderSelectCategory()}

				{/* <Text style={[styles.boldText, {marginTop : GLOBAL_MARGIN_HORIZON}]}> 새로 추가하기 </Text> */}
                {/* <TextInput
				style={styles.textInputStyle}
				placeholder="문제를 입력해주세요"
				placeholderTextColor="#d5d5d5"
				onChangeText={(text) => setTitle(text)}
				value={challengingBehavior.title}
				></TextInput> */}

            </View>
            <Divider height={4} color={'#ededed'}></Divider>

            {/* problemAreaButton */}
            <View style={styles.containerNoHeight}>
                <Text style={styles.boldText}>어떤 상황 이었나요?</Text>
                <TextInput
				style={{marginTop : 10, borderRadius : 10, borderColor : '#d5d5d5', borderWidth : 1, height : SIZE_WIDTH * 0.4, textAlignVertical : 'top', padding : 15}}
				placeholder="누구와, 어디서, 어떤 상황에서 생긴 일인지 메모로 남겨주시면 큰 도움이 돼요!"
				placeholderTextColor="#d5d5d5"
				onChangeText={(text) => setContent(text)}
				value={challengingBehavior.content}
				multiline
				></TextInput>
                
				{ renderImage() }
            </View>
            <Divider height={4} color={'#ededed'}></Divider>

            <View style={styles.containerNoHeight}>
                <Text style={styles.boldText}>어떻게 대처하셨나요?</Text>
                <TextInput
				style={{marginTop : 10, borderRadius : 10, borderColor : '#d5d5d5', borderWidth : 1, height : SIZE_WIDTH * 0.4, textAlignVertical : 'top', padding : 15}}
				placeholder="당시에 보호자분께서 어떻게 대처하셨는지 메모를 남겨주시면 더 나은 대처법을 익히는데 도움이 돼요!"
				placeholderTextColor="#d5d5d5"
				onChangeText={(text) => setFixedMethod(text)}
				value={challengingBehavior.fixedMethod}
				multiline
				></TextInput>

				<Text style={[styles.boldText,{marginTop : 20, marginBottom : 10}]}>어떤 선생님한테 공유할까요?</Text>
            </View>            

			<View style={{marginHorizontal : GLOBAL_MARGIN_HORIZON, marginVertical : GLOBAL_MARGIN_VERTICAL}}>
				<Button onPress={() => uploadBehavior({ 
					variables : { 
						ChallengingBehaviorInput : {...challengingBehavior},
						file : images
					},
					refetchQueries : [GET_CHALLENGING_CARD]
				})
				.then(() => props.navigation.goBack())
				.catch(e => 
					{
						console.log(e)
					})
				}
				text={'작성완료'} textColor={'white'} style={{backgroundColor : MAIN_COLOR, elevation :3}}></Button>
			</View>


            {/* 출생일 dateScroller */}
            <Modal isVisible={modalVisible}>
                <DateTimeScroller
				setDate={setOccurenceDate}
				date={getDateFromYMDHmsString(challengingBehavior.occurenceDate)}
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
	imageStyle: { width : SIZE_WIDTH * 0.2, height : SIZE_WIDTH * 0.2, borderRadius : 10},
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
	imageBox: {
		borderRadius: 8,
		width: SIZE_WIDTH * 0.2,
		height: SIZE_WIDTH * 0.2,
		marginRight: 5,
		borderWidth: 1,
		borderColor: '#ededed',
		justifyContent: 'center',
		alignItems: 'center',
	},
	previousRecordItem : {
		flexDirection : 'row', justifyContent: 'space-between', paddingHorizontal : 15, paddingVertical : 12, borderColor : '#d5d5d5',
	}
});
