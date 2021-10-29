import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView, TextInput } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import { ProgressBar } from 'react-native-paper'
import { Divider } from '../common/divider';
import { CautionItemTextBox } from './components/CautionItemTextBox';
import { childData } from '../../types/childInfoTypes';
import { SliderView } from '../childEnroll/components/SliderView';
import { CautionItemSliderView } from './components/CautionItemSliderView';
import { EnterChildInfo } from '../childEnroll/EnterChildInfo';
import { TextView } from '../childEnroll/components/TextView';
import { TextInputView } from '../childEnroll/components/TextInputView';
import Modal from 'react-native-modal'
import { DateScroller } from '../childEnroll/components/DateScroller';
interface childInfoProps {

}

export function childInfoDetail(props : childInfoProps) {

		const [revise,setRevise] = React.useState<boolean>(false)

		////////////////////////////////////////////////////////////////////////;
		const [test , setTest] = React.useState<childData>({
			id : 1,
			name : '홍길동',
			birthdate : new Date('2020-01-01'),
			sex : 'M',
			diagnosis : '병신',
			birthWeekNum : 25,
			birthDayNum : 3,
			height : 9,
			weight : 74,
			degreeSnack : 2,
			degreeRule : 2,
			degreeMeal : 2,
			rearer : '엄마',
			pill : '없음',
			diaper : '없음',
			allergy : '없음',
			seizure : '없음',
			etc : '없음',
			tendency : '없음'
		})
		
		//set functions 
		function setDegreeSnack (value : number) {
			setTest({...test, degreeSnack : value})
		}
		function setDegreeRule (value : number) {
			setTest({...test, degreeRule : value})
		}
		function setDegreeMeal (value : number) {
			setTest({...test, degreeMeal : value})
		}
		function setName (value : string) {
			setTest({...test, name : value})
		}
		function setBirthDate (value : Date){
			setTest({...test, birthdate : value})
		}
		function setSex (value : string){
			setTest({...test, sex : value})
		}
		function setBirthWeekNum (value : number){
			setTest({...test, birthWeekNum : value})
		}
		function setBirthDayNum (value : number){
			setTest({...test, birthDayNum : value})
		}
		function setHeight (value : number){
			setTest({...test, height : value})
		}
		function setWeight (value : number){
			setTest({...test, weight : value})
		}
		function setRearer (value : string){
			setTest({...test, rearer : value})
		}
		function setPill (value : string){
			setTest({...test, pill : value})
		}
		function setDiaper (value : string){
			setTest({...test, diaper : value})
		}
		function setAllergy (value : string){
			setTest({...test, allergy : value})
		}
		function setSeizure (value : string){
			setTest({...test, seizure : value})
		}
		function setEtc (value : string){
			setTest({...test, etc : value})
		}
		function setTendency (value : string){
			setTest({...test, tendency : value})
		}
		


		////////////////////////////////////////////////////////////////////////
		const [dateModalVisible, setdateModalVisible] =
		React.useState<boolean>(false);
		
		const [progress, setProgress] = React.useState<number>(0)
		React.useEffect(() =>{
			setProgress(0.9)
		},[])
		return (
		<ScrollView style={styles.container}>

			{/* 수정 , progress */}
			<View style={{marginHorizontal : GLOBAL_MARGIN_HORIZON, marginBottom : GLOBAL_MARGIN_VERTICAL}}>
				{
					revise 
					? <View style={{flexDirection : 'row', justifyContent : 'flex-end'}}>
						<TouchableOpacity style={styles.buttonStyle} onPress={() => setRevise(!revise)}>
							<Text style={styles.buttonTextStyle}> 취소 </Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonStyle} onPress={() => setRevise(!revise)}>
							<Text style={styles.buttonTextStyle}> 완료 </Text>
						</TouchableOpacity>
					</View>
					: <TouchableOpacity style={styles.buttonStyle} onPress={() => setRevise(!revise)}>
						<Text style={styles.buttonTextStyle}> 수정 </Text>
					</TouchableOpacity>

				}
				

				<Text style={{marginVertical : 10, fontFamily : 'Cafe24Ssurround', color : MAIN_COLOR, fontSize : 18}}>90% 완성했어요</Text>
				<ProgressBar progress={progress} color={MAIN_COLOR} style={{height : 5, borderRadius : 5}} />
			</View>
			<Divider height={1} color={"#d5d5d5"}/>

			{/* //////////////////////////////// 기본정보 ///////////////////////////////// */}
			{ revise ?
			<View style={{marginTop : GLOBAL_MARGIN_VERTICAL , marginHorizontal : GLOBAL_MARGIN_HORIZON}}>
				
				<Text style={{fontSize:  17, fontWeight : '500', color : '#707070'}}>기본정보</Text>
				
				<TextView text="이름" style={{marginTop : SIZE_HEIGHT * 0.04}}/>
				
				<TextInputView
				placeholder={'우리 아이 이름을 한글로 입력해주세요. ex) 김키블'}
				style={{marginBottom: SIZE_HEIGHT * 0.04}}
				value={test.name}
				onChangeText={setName}></TextInputView>

				<TextView text="출생일" />

				<TextInputView
				placeholder={'출생일을 선택해주세요'}
				style={{marginBottom: SIZE_HEIGHT * 0.04}}
				icon="calendar"
				editable={false}
				iconOnPress={setdateModalVisible}
				value={test.birthdate}></TextInputView>

				{/* 성별 */}
				<View style={{marginBottom: SIZE_HEIGHT * 0.04}}>
					<View style={{flexDirection: 'row', marginBottom: SIZE_HEIGHT * 0.02}}>
						<Text style={styles.text}>성별 </Text>
						<Text style={{color: MAIN_COLOR}}>*</Text>
					</View>

					<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
						<TouchableOpacity
							style={[styles.buttonSex,{borderColor: test.sex == 'M' ? MAIN_COLOR : '#ededed'}]}
							onPress={() => setSex('M')}>
							<Text style={{color: test.sex == 'M' ? MAIN_COLOR : '#aaaaaa'}}>남</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={[styles.buttonSex, {borderColor: test.sex == 'W' ? MAIN_COLOR : '#ededed'}]}
							onPress={() => setSex('W')}>
							<Text style={{color: test.sex == 'W' ? MAIN_COLOR : '#aaaaaa'}}>여</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/* 출생시 주수 */}
				<TextView text="출생시 주수" />
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<TextInputView
					value={test.birthWeekNum?.toString()}
					placeholder={'ex) 23'}
					style={{
						marginBottom: SIZE_HEIGHT * 0.04,
						width: SIZE_WIDTH * 0.4,
					}}
					unitText="주"
					keyboardType="numeric"
					onChangeText={setBirthWeekNum}></TextInputView>

					<TextInputView
					value={test.birthDayNum?.toString()}
					placeholder={'ex) 6'}
					style={{
						marginBottom: SIZE_HEIGHT * 0.04,
						width: SIZE_WIDTH * 0.4,
					}}
					unitText="일"
					keyboardType="numeric"
					onChangeText={setBirthDayNum}></TextInputView>
				</View>

				<TextView text="키" />
				<TextInputView
					value={test.height?.toString()}
					placeholder={'키를 입력해주세요'}
					style={{marginBottom: SIZE_HEIGHT * 0.04}}
					unitText="cm"
					keyboardType="numeric"
					onChangeText={setHeight}></TextInputView>

				<TextView text="몸무게" />

				<TextInputView
					value={test.weight?.toString()}
					placeholder={'몸무게를 입력해주세요'}
					style={{marginBottom: SIZE_HEIGHT * 0.1}}
					unitText="kg"
					keyboardType="numeric"
					onChangeText={setWeight}></TextInputView>
						
			</View>
			
			: null
			}
			<Divider height={1} color={"#d5d5d5"}/>
			
			{/* ////////////////////////////////주의사항//////////////////////////////// */}
			<View style={{marginVertical : GLOBAL_MARGIN_VERTICAL, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>
				<Text style={{fontSize:  17, fontWeight : '500', color : '#707070'}}>주의사항</Text>

				<CautionItemTextBox
				item="medicine"
				revise={revise}
				text={test.pill}
				setText={setPill}
				></CautionItemTextBox>

				<CautionItemTextBox
				item="poop"
				revise={revise}
				text={test.diaper}
				setText={setDiaper}
				></CautionItemTextBox>

				<CautionItemTextBox
				item="allergy"
				revise={revise}
				text={test.allergy}
				setText={setAllergy}
				></CautionItemTextBox>

				<CautionItemTextBox
				item="convulsion"
				revise={revise}
				text={test.seizure}
				setText={setSeizure}
				></CautionItemTextBox>

				<CautionItemTextBox
				item="care"
				revise={revise}
				text={test.rearer}
				setText={setRearer}
				></CautionItemTextBox>

				<CautionItemTextBox
				item="check"
				revise={revise}
				text={test.etc}
				setText={setEtc}
				style={{marginBottom : revise ? GLOBAL_MARGIN_VERTICAL : 5}}
				></CautionItemTextBox>


				<CautionItemSliderView
				item='snack'
				revise={revise}
				sliderValue={test.degreeSnack}
				setSliderValue={setDegreeSnack}
				></CautionItemSliderView>
				
				<CautionItemSliderView
				item='rule'
				revise={revise}
				sliderValue={test.degreeRule}
				setSliderValue={setDegreeRule}
				></CautionItemSliderView>

				<CautionItemSliderView
				item='meal'
				revise={revise}
				sliderValue={test.degreeMeal}
				setSliderValue={setDegreeMeal}
				></CautionItemSliderView>



			</View>
			<Divider height={1} color={"#d5d5d5"}/>

			<View style={{marginTop : GLOBAL_MARGIN_VERTICAL, marginHorizontal : GLOBAL_MARGIN_HORIZON, marginBottom : GLOBAL_MARGIN_VERTICAL * 2}}>
				<Text style={{fontSize : 17, marginBottom : 10, color : 'black'}}>성향 <Image source={require('../../assets/icons/ic_memo_16.png')}></Image> </Text>
				<TextInput
				style={{flex : 1 , height : SIZE_WIDTH * 0.4, borderColor : '#d5d5d5', borderWidth : 1, borderRadius : 10, fontSize : 16, padding : GLOBAL_MARGIN_HORIZON , textAlignVertical : 'top'}}
				multiline
				editable={revise}
				value={test.tendency}
				placeholder="치료사 선생님이 참고할만한 키블(이)의 성향을 알려주세요!"
				placeholderTextColor="#d5d5d5"
				></TextInput>
			</View>


			<Modal isVisible={dateModalVisible}>
				<DateScroller
					setDate={setBirthDate}
					date={test.birthdate}
					setModalVisible={setdateModalVisible}></DateScroller>
			</Modal>


		</ScrollView>
		);
}
const styles = StyleSheet.create({
	container : {flex :1 , backgroundColor : 'white'},
	buttonStyle : { marginLeft : 20, marginTop : GLOBAL_MARGIN_HORIZON ,alignSelf: 'flex-end' , width : SIZE_WIDTH * 0.15, height : SIZE_WIDTH * 0.07, borderWidth : 1, borderColor : '#707070', borderRadius : 5 , justifyContent : 'center', alignItems : 'center'},
	buttonTextStyle : { color : '#707070' },
	sliderViewContainer: {marginBottom: SIZE_HEIGHT * 0.08},
	text: {
		fontFamily: 'Pretendard-Medium',
		fontSize: 20,
		color: '#111111',
	  },
	  buttonSex: {
		width: SIZE_WIDTH * 0.4,
		paddingVertical: SIZE_HEIGHT * 0.017,
		borderRadius: 20,
		// borderColor : '#ededed',
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
	  },
})