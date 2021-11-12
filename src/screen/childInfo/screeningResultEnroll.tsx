import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, TouchableOpacity, Text, ScrollView, Image, BackHandler} from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import { Divider } from '../common/divider';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';
import { TextView } from '../childEnroll/components/TextView';
import { TextInputView } from '../childEnroll/components/TextInputView';
import Modal from 'react-native-modal';
import { DateScroller } from '../childEnroll/components/DateScroller';
import { Button } from '../common/components/Button';
import { ReactNativeFile } from 'apollo-upload-client';
import ImagePicker, {openCamera} from 'react-native-image-crop-picker';
import { WarningModal } from '../common/components/WarningModal';
import { screeningResult } from '../../types/types';

interface screeningResultEnrollProps {
	navigation: StackNavigationProp<stackInterface>;
}

export function screeningResultEnroll(props : screeningResultEnrollProps) {

		const [screeningResult,setScreeningResult] = React.useState<screeningResult>({
			screeningName : '',
			screeningInstitution : '',
			screeningDate : new Date(),
			memo : '',
		})
		function setScreeningName(value : string) {
			setScreeningResult({ ...screeningResult, screeningName : value })
		}
		function setScreeningInstitution(value : string) {
			setScreeningResult({ ...screeningResult, screeningInstitution : value })
		}
		function setScreeningDate(value : Date) {
			setScreeningResult({ ...screeningResult, screeningDate : value })
		}
		function setMemo(value : string) {
			setScreeningResult({ ...screeningResult, memo : value })
		}
		function setImages(value : ReactNativeFile[]) {
			setScreeningResult({ ...screeningResult, images : value })
		}

		const [dateModalVisible, setDateModalVisible] 		= React.useState<boolean>(false)
		
		
		const imagePick = async () => {
			await ImagePicker.openPicker({
				mediaType: 'photo',
				multiple: true,
				includeBase64: true,
				forceJpg: true,
			}).then((image: any) => {
				let files: ReactNativeFile[] = [];
				image.map((e: any) => {
					const file = new ReactNativeFile({
					uri: e.path,
					type: e.mime,
					name: 'test.jpg',
				});
				files.push(file);
			  });
			  setImages(files);
			});
		};

		function checkEssential() {
			if(screeningResult.screeningName){
				return true
			}
			
			return false
		}

		const [warningModal, setWarningModal] = React.useState<boolean>(false)
		

		const handleBackButtonClick = () => {
			if(!props.navigation.isFocused()){
				return false
			}
			setWarningModal(true)
			return true
		}
		BackHandler.addEventListener("hardwareBackPress" , () => handleBackButtonClick());

		return (
			<SafeAreaView style={styles.container}>
				<ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>
					{
						Platform.OS === 'android' ? <Divider height={GLOBAL_MARGIN_HORIZON} color="white" /> : null 
					}
					<TouchableOpacity
						onPress={() => setWarningModal(true)}>
						<Icon name="arrow-back" style={{fontSize: 30}}></Icon>
					</TouchableOpacity>
					<Text style={styles.headerTextStyle}>검사결과지 등록하기</Text>


						{/* 사진 */}
						<View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center',marginBottom : GLOBAL_MARGIN_VERTICAL}}>
								<ScrollView style={{flex: 1}} horizontal showsHorizontalScrollIndicator={false}>
								<TouchableOpacity 
								style={styles.cardEnroll} 
								onPress={() => imagePick()}>
									<Icon style={{fontSize : 40}} name="add-outline"></Icon>
									<Text style={{fontSize : 20}}>결과지 등록</Text>
								</TouchableOpacity>
								{
									screeningResult.images?.map((image: ReactNativeFile, idx) => {
										return (
											<View key={idx} style={styles.cardEnroll}>
												<Image
												source={{uri: image.uri}}
												style={styles.imageStyle}
												// resizeMode="contain"
												/>
												<TouchableOpacity style={styles.imageCancel} 
												onPress={() => setImages(screeningResult.images.filter((data, id) => id !== idx))}>
													<Icon name="close-outline" style={styles.imageCancelIcon}></Icon>
												</TouchableOpacity>
											</View>
										)
									})
								}
								</ScrollView>
							</View>

					{/* </View> */}

					<TextView text="검사명" />
					<TextInputView
					placeholder={'검사명을 입력해주세요'}
					style={{marginBottom: SIZE_HEIGHT * 0.05}}
					onChangeText={setScreeningName}
					></TextInputView>

					<TextView text="검사일시" />
					<TextInputView
					placeholder={'검사 일시 입력'}
					style={{marginBottom: SIZE_HEIGHT * 0.05}}
					icon="calendar"
					editable={false}
					iconOnPress={setDateModalVisible}
					value={screeningResult.screeningDate}></TextInputView>

					<TextView text="검사기관명" />
					<TextInputView
					placeholder={'검사기관명 입력해주세요'}
					style={{marginBottom: SIZE_HEIGHT * 0.05}}
					onChangeText={setScreeningInstitution}
					></TextInputView>

					<TextView text="메모" />
					<TextInputView
					placeholder={'특이사항이나 기록해 두고 싶은 사항을 입력해주세요'}
					style={{marginBottom: SIZE_HEIGHT * 0.06}}
					onChangeText={setMemo}
					></TextInputView>

					<Button 
					text={'등록'} 
					textColor={checkEssential() ? 'white' : '#707070'}
					style={{backgroundColor : checkEssential() ? MAIN_COLOR : "#ededed"}}
					></Button>
				
				</ScrollView>

				<Modal isVisible={dateModalVisible}>
					<DateScroller
					setDate={setScreeningDate}
					date={screeningResult.screeningDate}
					setModalVisible={setDateModalVisible}
					></DateScroller>
				</Modal>

				<WarningModal
				isVisible={warningModal}
				setIsVisible={setWarningModal}
				onPress={props.navigation.goBack}
				></WarningModal> 

			</SafeAreaView>
		);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		paddingBottom : 20
	  },
	  innerContainer: {
		flex: 1,
		marginHorizontal: GLOBAL_MARGIN_HORIZON,

	  },
	  headerTextStyle: {
		fontFamily: 'Pretendard-Bold',
		fontSize: 28,
		marginTop: SIZE_HEIGHT * 0.03,
		marginBottom: SIZE_HEIGHT * 0.05,
		color: '#111111',
	  },
	  cardEnroll : {
		borderRadius : 8,
		width : SIZE_WIDTH * 0.35,
		height : SIZE_WIDTH * 0.35,
		marginRight : 20,
		backgroundColor : '#ededed',
		justifyContent : 'center',
		alignItems : 'center',
	},
	imageStyle: { width : SIZE_WIDTH * 0.35, height : SIZE_WIDTH * 0.35, borderRadius : 10},
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
	  imageCancelIcon : {color : 'white', fontSize: 15,},
	  
})