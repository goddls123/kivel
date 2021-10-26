import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Easing, Text, TextInput, Animated, ScrollView, } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';
import { Divider } from '../common/divider';
import { getDateYMD, getDateYMDD, getDayKorean, getTime } from '../common/service/dateService';
import DatePicker from 'react-native-date-picker'
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from '../common/components/Button';


interface addCalendarPageProps {
	navigation: StackNavigationProp<stackInterface, 'SocialLogin'>;
}

export function addCalendarPage(props : addCalendarPageProps) {

	// date picker
	const [startDate, setStartDate] = React.useState<Date>(new Date());
	const [endDate, setEndDate] = React.useState<Date>(new Date());

	const timePicker1 = React.useRef(new Animated.Value(0)).current
	const [isPicker1Exp, setIsPicker1Exp] = React.useState<boolean>(false);

	const timePicker2 = React.useRef(new Animated.Value(0)).current
	const [isPicker2Exp, setIsPicker2Exp] = React.useState<boolean>(false);
	
	const handlePress=(value : any, expanded : boolean) => {
		Animated.timing(value, {
			toValue : expanded? 0 : 500,
			duration : 500,
			easing : Easing.ease,
			useNativeDriver : false,
		}).start()
	}


	// dropdown picker
	const daySelectorHeight = React.useRef(new Animated.Value(0)).current
	const weekSelector=() => {
		Animated.timing(daySelectorHeight, {
			toValue : value == 'W' || value == '2W' ? 500 : 0,
			duration : 1000,
			easing : Easing.ease,
			useNativeDriver : false,
		}).start()
	}
	const [open, setOpen] = React.useState<boolean>(false)
	const [value, setValue] = React.useState('W')
	const [items, setItems] = React.useState([
		{label: '한번', value: 'D'},
		{label: '매주마다', value: 'W'},
		{label: '격주마다', value: '2W'},
		{label: '매달마다', value: 'M'},
	]);

	const [open1, setOpen1] = React.useState<boolean>(false)
	const [value1, setValue1] = React.useState('M')
	const [items1, setItems1] = React.useState([
		{label: '2주', value: '2W'},
		{label: '1개월', value: 'M'},
		{label: '2개월', value: '2M'},
		{label: '3개월', value: '3M'},
		{label: '6개월', value: '6M'},
		{label: '1년', value: '12M'},
	]);
	
	const [daySelected, setDaySelected] = React.useState<boolean[]>([false,false,false,false,false,false,false])
	const selectDay= async (id : number) => {
		let Arr = daySelected
		Arr[id] = !Arr[id]
		setDaySelected([...Arr])
	}
	React.useEffect(() => {
		weekSelector()
	},[])
	
	// 알림설정
	const [alarmOpen,setAlarmOpen] = React.useState<boolean>(false)
	const [alarmValue, setAlarmValue] = React.useState('X')
	const [alarmItems, setAlarmItems] = React.useState([
		{label: '알람 없음' , value : 'X'},
		{label: '10분', value: '10'},
		{label: '15분', value: '15'},
		{label: '30분전', value: '30'},
		{label: '1시간전', value: '60'},
	]);
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView nestedScrollEnabled={true}>
					
					{/* header */}
					<View style={styles.headerContainer}>
						
						<TouchableOpacity style={styles.closeContainer}
							onPress={() => props.navigation.goBack()}>
							<Icon name="close-outline" style={styles.closeIcon}></Icon>
						</TouchableOpacity>
						<Text style={styles.headerTextStyle}>일정추가</Text>
						<View style={styles.closeContainer} />
					</View>
					
					<Divider height={1} color={'#d5d5d5'} />

					{/* 일정명 입력 */}
					<View style={styles.scheduleTitle}>
						<TextInput 
						style={{width : '100%'}}
						placeholder="일정명 입력"
						placeholderTextColor="#d5d5d5"
						></TextInput>
					</View>
					<Divider height={2} color={'#ededed'} />

					{/* 날짜 */}
					<View style={styles.dateContainer}>
						<TouchableOpacity style={styles.dateInnerContainer}>
							<Text style={styles.dateText}>{getDateYMDD(new Date(),'.')}</Text>
							<Icon name="chevron-forward-outline" style={styles.arrowRight}></Icon>
						</TouchableOpacity>
					</View>
					<Divider height={2} color={'#ededed'} />

					{/* 시간대 */}
					<Animated.View>
						<View style={styles.timePickerContainer}>
							<Icon name="time-outline" style={styles.timeIcon} />
							<Text style={styles.timeText}> 시간대</Text>
						</View>

						{/* 시작 */}
						<TouchableOpacity style={styles.pickerViewOpenButton}
						onPress={() => {
							// LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
							setIsPicker1Exp(!isPicker1Exp);
							handlePress(timePicker1, isPicker1Exp)
						}}>
							<Text style={styles.hourText}>시작</Text>
							<Text style={styles.hourText}>{getTime(startDate, ':')}</Text>
						</TouchableOpacity>
						
						<Animated.View style={{maxHeight : timePicker1, overflow : 'hidden', alignItems : 'center' }} >
							<Divider height={2} color={"black"} />
							<DatePicker 
							style={{borderTopWidth : 1, borderTopColor : '#ededed' , borderBottomWidth : 1,  borderBottomColor : '#ededed', width : SIZE_WIDTH  , backgroundColor : 'white', justifyContent : 'space-between'}}						
							date={startDate} onDateChange={(newDate) => setStartDate(newDate)} mode={'time'} />
							<Divider height={2} color={"black"} />
						</Animated.View>
						

						{/* 종료 */}
						<TouchableOpacity style={styles.pickerViewOpenButton}
						onPress={() => {
							// LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
							setIsPicker2Exp(!isPicker2Exp);
							handlePress(timePicker2, isPicker2Exp)
						}}>
							<Text style={styles.hourText}>종료</Text>
							<Text style={styles.hourText}>{getTime(endDate, ':')}</Text>
						</TouchableOpacity>

						<Animated.View style={{maxHeight : timePicker2, overflow : 'hidden', alignItems : 'center' }} >
							<Divider height={2} color={"black"} />
							<DatePicker 
							style={{width : SIZE_WIDTH * 0.8 , backgroundColor : 'white', justifyContent : 'space-between'}}
							date={endDate} onDateChange={(newDate) => setEndDate(newDate)} mode={'time'} />
							<Divider height={2} color={"black"} />
						</Animated.View>
					</Animated.View>
					<Divider height={2} color={'#ededed'} />
					
					{/* 반복설정 */}
					<View style={{marginTop : 10, justifyContent : 'center'}}>
						<View style={styles.timePickerContainer}>
							<View style={{width : SIZE_WIDTH * 0.25, flexDirection : 'row', alignItems : 'center'}}>
								<Icon name="repeat-outline" style={styles.timeIcon} />
								<Text style={styles.timeText}> 반복설정</Text>
							</View>

							<View>
								<DropDownPicker
									style={{height: 30, width : SIZE_WIDTH * 0.3, borderColor : '#d5d5d5'}}
									dropDownContainerStyle={{height: 100, width : SIZE_WIDTH * 0.3, borderColor : '#d5d5d5'}}
									open={open}
									value={value}
									items={items}
									setOpen={setOpen}
									setValue={setValue}
									setItems={setItems}
									onChangeValue={()=> weekSelector()}
									listMode='SCROLLVIEW'
								/>
							</View>

							<View>
								<DropDownPicker
									style={{ marginLeft: 20, height: 30, width: SIZE_WIDTH * 0.3 , borderColor : '#d5d5d5'}}
									dropDownContainerStyle={{ marginLeft: 20, height: 100, width: SIZE_WIDTH * 0.3 , borderColor : '#d5d5d5'}}
									open={open1}
									value={value1}
									items={items1}
									setOpen={setOpen1}
									setValue={setValue1}
									setItems={setItems1}
									listMode='SCROLLVIEW'
								/>
							</View>
						</View>

						<Animated.View style={[styles.daySelector,{maxHeight : daySelectorHeight}]}>
							{
								daySelected.map((item : boolean, id : number) => {
									return(
										<View key={id} style={{flex : 1, alignItems : 'center', marginTop : GLOBAL_MARGIN_HORIZON}}>
											<TouchableOpacity style={[styles.daySelectorBubble,{backgroundColor : item ? MAIN_COLOR : '#ededed'}]}
											onPress={()=>selectDay(id)}>
												<Text style={[styles.weekText,{color : item ? 'white' : '#aaaaaa'}]}>{getDayKorean(id)}</Text>
											</TouchableOpacity>
										</View>
									)
								})
							}
						</Animated.View>

						

					</View>
					
					{/* 치료사 */}
					<View style={{height: SIZE_WIDTH * 0.12, marginHorizontal : GLOBAL_MARGIN_HORIZON , marginTop : GLOBAL_MARGIN_HORIZON, flexDirection : 'row', alignItems : 'center'}}>
						<View style={{width : SIZE_WIDTH * 0.25, flexDirection : 'row', alignItems : 'center'}}>
							<Icon name="person-outline" style={styles.timeIcon} />
							<Text style={styles.timeText}> 치료사</Text>
						</View>
					</View>

					{/* 장소 */}
					{/* 장소 list 받아오기 */}
					<View style={{height: SIZE_WIDTH * 0.12, marginHorizontal : GLOBAL_MARGIN_HORIZON , marginTop : GLOBAL_MARGIN_HORIZON, flexDirection : 'row', alignItems : 'center'}}>
						{/* <View style={{width : SIZE_WIDTH}}> */}
						<View style={{width : SIZE_WIDTH * 0.25, flexDirection : 'row', alignItems : 'center'}}>
							<Icon name="location-outline" style={styles.timeIcon} />
							<Text style={styles.timeText}> 장소</Text>
						</View>
						<TextInput 
						style={{flex : 1, borderWidth :1 , borderColor : '#ededed', borderRadius :5}}
						placeholder="장소입력"></TextInput>
					</View>

					{/* 메모 */}
					<View style={{height: SIZE_WIDTH * 0.12, marginHorizontal : GLOBAL_MARGIN_HORIZON , marginTop : GLOBAL_MARGIN_HORIZON, flexDirection : 'row', alignItems : 'center'}}>
						{/* <View style={{width : SIZE_WIDTH}}> */}
						<View style={{width : SIZE_WIDTH * 0.25, flexDirection : 'row', alignItems : 'center'}}>
							<Icon name="reader-outline" style={styles.timeIcon} />
							<Text style={styles.timeText}> 메모</Text>
						</View>
						<TextInput 
						style={{flex : 1, borderWidth :1 , borderColor : '#ededed', borderRadius :5}}
						placeholder="메모입력"></TextInput>
					</View>

					{/* 알림설정 */}
					<View style={{height: SIZE_WIDTH * 0.12, marginHorizontal : GLOBAL_MARGIN_HORIZON , marginTop : GLOBAL_MARGIN_HORIZON, flexDirection : 'row', alignItems : 'center'}}>
						{/* <View style={{width : SIZE_WIDTH}}> */}
						<View style={{width : SIZE_WIDTH * 0.25, flexDirection : 'row', alignItems : 'center'}}>
							<Icon name="notifications-outline" style={styles.timeIcon} />
							<Text style={styles.timeText}> 알림설정</Text>
						</View>
						<View>
						<DropDownPicker
									style={{ height: 30, width: SIZE_WIDTH * 0.3 , borderColor : '#d5d5d5'}}
									dropDownContainerStyle={{ height: 100, width: SIZE_WIDTH * 0.3 , borderColor : '#d5d5d5'}}
									open={alarmOpen}
									value={alarmValue}
									items={alarmItems}
									setOpen={setAlarmOpen}
									setValue={setAlarmValue}
									setItems={setAlarmItems}
									listMode='SCROLLVIEW'
						/>
						</View>
					</View>
					
					
					<View style={{height : SIZE_HEIGHT * 0.2, marginHorizontal : GLOBAL_MARGIN_HORIZON, justifyContent : 'flex-end', paddingBottom : 20}}>
						<Button text={'완료'} textColor={'white'} style={{backgroundColor : MAIN_COLOR}}></Button>
					</View>
					
					
				</ScrollView>
			</SafeAreaView>
		);
}
const styles = StyleSheet.create({
	container : {
		flex : 1, 
		backgroundColor : 'white',
	},
	headerContainer: {height: SIZE_WIDTH * 0.16, marginHorizontal : GLOBAL_MARGIN_HORIZON, flexDirection : 'row', alignItems : 'center'},
	headerTextStyle : {flex : 1, textAlign : 'center', textAlignVertical : 'center', fontSize : 22, fontWeight : 'bold'},
	closeContainer : {width : SIZE_WIDTH * 0.1},
	closeIcon : {fontSize: 40, fontWeight : 'bold'},
	scheduleTitle : {height: SIZE_WIDTH * 0.16, marginHorizontal : GLOBAL_MARGIN_HORIZON, justifyContent : 'center'},
	dateContainer: {height: SIZE_WIDTH * 0.16, marginHorizontal : GLOBAL_MARGIN_HORIZON, justifyContent : 'center'},
	dateInnerContainer : { alignItems : 'center', flexDirection : 'row', justifyContent : 'space-between'},
	dateText : {color : 'black',fontSize : 17, fontWeight : 'bold'},
	arrowRight : {color : '#d5d5d5',fontSize : 25, fontWeight : 'bold'},
	timePickerContainer : {height: SIZE_WIDTH * 0.12, marginHorizontal : GLOBAL_MARGIN_HORIZON, alignItems : 'center', flexDirection : 'row'},
	timeIcon : {fontSize: 30, color : MAIN_COLOR },
	timeText : {fontSize: 16, color : '#707070'},
	pickerViewOpenButton : {height: SIZE_WIDTH * 0.12, flexDirection : 'row', justifyContent : 'space-between' , alignItems : 'center', marginHorizontal : GLOBAL_MARGIN_HORIZON},
	hourText: {fontSize :20, color : 'black'},
	daySelector : {flexDirection : 'row', marginHorizontal : GLOBAL_MARGIN_HORIZON * 2, justifyContent : 'center', overflow : 'hidden'},
	daySelectorBubble : {height : SIZE_WIDTH * 0.08 , width : SIZE_WIDTH * 0.08 , borderRadius : 100, alignItems : 'center', justifyContent : 'center'},
	weekText:{fontSize: 14, fontWeight: 'bold'},
})