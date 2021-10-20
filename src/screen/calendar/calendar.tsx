import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet} from 'react-native';
import {View, TouchableOpacity, Text} from 'react-native';
// import { Calendar } from 'react-native-toggle-calendar'
import {Calendar,LocaleConfig, CalendarList, Agenda} from 'react-native-calendars';
import { DateObject, schedule } from '../../types/calendarTypes';
import { stackInterface } from '../../types/navigationParam';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../common/constants';
import { Divider } from '../common/divider';
import { schedule_data } from '../test/testData';
import { CalendarStrip } from './components/CalendarStrip';
import { DayComponent } from './components/DayComponent';
import { ScheduleCard } from './components/ScheduleCard';
import { ScheduleFrame } from './components/ScheduleFrame';
import { scheduleCheck } from './service/calendarService';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

LocaleConfig.locales['kr'] = {
	monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	dayNames: [ '일', '월','화','수','목','금','토'],
	dayNamesShort: [ '일', '월','화','수','목','금','토'],
}
LocaleConfig.defaultLocale ='kr'

interface calendarProps {
    navigation : StackNavigationProp<stackInterface,'Calendar'>;
    route : RouteProp<stackInterface,'Calendar'>;
}

export default function calendar ({navigation, route} : calendarProps) {

    const [calendarState, setCalendarState] = useState<'month' | 'week'>('month')
    
    const [selectedDaySchedule, setSelectedDaySchedule] = useState<schedule[]>()
    React.useEffect(()=>{
        let scheduleArray : schedule[] = []
        schedule_data.map((data)=>{
            if(scheduleCheck(new Date(),data)){
                scheduleArray.push(data)
            }
        })
        setSelectedDaySchedule(scheduleArray)
    },[])


    const [selectedDate, setSelectedDate] = useState<Date>(new Date())

    function changeView(){
        if(calendarState == 'month')
            setCalendarState('week');
        else if (calendarState == 'week')
            setCalendarState('month')
    }
    console.log(selectedDaySchedule);

    return (
        <View style={styles.container}>
			<ScrollView>

				<View style={styles.headerContainer} >
					<Icon name="arrow-back" style={{fontSize: 25}}></Icon>
					<Text style={styles.headerText}> 키블(이)의 일정관리 </Text>
					<TouchableOpacity style={styles.headerIconContainer} onPress={() => changeView()}> 
						{
							calendarState=='month' 
							? <Image 
							source={require('../../assets/icons/ic_monthly.png')} 
							style={styles.headerIconImage}/>
							: <Image 
							source={require('../../assets/icons/ic_monthly.png')} 
							style={styles.headerIconImage}/>
						}	
					</TouchableOpacity>
				</View>

				
				{/* 캘린더 */}
				{calendarState === 'month' 
				? //////////////////////// 달력모드
				<View style={styles.calendarContainer}> 
					<Calendar
						style={styles.calendarStyle}
						dayComponent={({date , state} : {date : DateObject, state : '' | 'disabled' | 'selected' | 'today' }) => {
							return (
								<DayComponent date={date} state={state} setSelectedDaySchedule={setSelectedDaySchedule} />
						)}}
						
						renderArrow={(direction) => {
							return(
								direction == 'left' 
								? <Icon name="chevron-back-outline" style={{width : SIZE_WIDTH * 0.3 , fontSize: 25, textAlign : 'right' , fontWeight : '100', color : MAIN_COLOR}} />
									
								: <Icon name="chevron-forward-outline" style={{width : SIZE_WIDTH * 0.3, fontSize: 25, color : MAIN_COLOR}} />
							
							)
						}}
						theme={{
							textDayHeaderFontSize: 16,
							'stylesheet.calendar.header': {
								dayTextAtIndex0: {
									color: 'red'
								},
								dayTextAtIndex6: {
									color: 'blue'
								}
							},
							textMonthFontSize : 22,
							textMonthFontFamily : 'Cafe24Ssurround',
							textMonthFontWeight : '500',
						}}
						onDayPress={(day) => {console.log(day)}}
						monthFormat={'MM' + '월'}
						firstDay={0}
						onPressArrowLeft={subtractMonth => subtractMonth()}
						onPressArrowRight={addMonth => addMonth()}
						enableSwipeMonths={false}
					/>

					<Divider height={1} color={'#ededed'} />
					
					
					{/* 일정 card */}
					<View style={{flex : 1 ,alignItems : 'center', backgroundColor : '#f6f6f6'}}>
								{
									selectedDaySchedule?.map((data,key) => {
										return (
											<ScheduleCard key={key} data={data} ></ScheduleCard>
										)
									})
								}
					</View>
					
				</View>
				
				: ///////////////////////주간모드
				<View>
					<CalendarStrip selectedDate={setSelectedDate} />
					
					<ScheduleFrame
						selectedDate={selectedDate}
						data={schedule_data}
					/>
					
				</View>

				}

			</ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
	container : {flex : 1, backgroundColor : 'white'},
	headerContainer : {height : SIZE_HEIGHT * 0.08, alignItems : 'center', marginHorizontal : GLOBAL_MARGIN_HORIZON, flexDirection : 'row'},
	headerText : {fontSize : 20, color: 'black', fontFamily : 'Cafe24Ssurround'},
	headerIconContainer : {flex : 1, alignItems : 'flex-end', justifyContent : 'center'},
	headerIconImage : {height : SIZE_HEIGHT * 0.035, width : SIZE_HEIGHT * 0.035, justifyContent : 'center'},
	calendarContainer : {flex : 1, paddingBottom : GLOBAL_MARGIN_VERTICAL},
	calendarStyle : {paddingBottom : SIZE_HEIGHT * 0.02},
	

    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
})

