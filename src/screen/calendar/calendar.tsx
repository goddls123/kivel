import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet} from 'react-native';
import {View, TouchableOpacity, Text} from 'react-native';
// import { Calendar } from 'react-native-toggle-calendar'
import {
    Calendar,
    LocaleConfig,
    CalendarList,
    Agenda,
} from 'react-native-calendars';
import {DateObject, schedule} from '../../types/calendarTypes';
import {stackInterface} from '../../types/navigationParam';
import {
    GLOBAL_MARGIN_HORIZON,
    GLOBAL_MARGIN_VERTICAL,
    MAIN_COLOR,
    SIZE_HEIGHT,
    SIZE_WIDTH,
} from '../common/constants';
import {Divider} from '../common/divider';
import {schedule_data} from '../test/testData';
import {CalendarStrip} from './components/CalendarStrip';
import {DayComponent} from './components/DayComponent';
import {ScheduleCard} from './components/ScheduleCard';
import {ScheduleFrame} from './components/ScheduleFrame';
import {scheduleCheck} from './service/calendarService';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { getDateYMD } from '../common/service/dateService';
import axios from 'axios';

LocaleConfig.locales['kr'] = {
    monthNames: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
    ],
    monthNamesShort: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
    ],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kr';

interface calendarProps {
    navigation: StackNavigationProp<stackInterface, 'Calendar'>;
    route: RouteProp<stackInterface, 'Calendar'>;
}

export default function calendar({navigation, route}: calendarProps) {
    const [calendarState, setCalendarState] = useState<'month' | 'week'>('month');

    
    const [selectedDate, setSelectedDate] = useState<string>(getDateYMD(new Date(),'-'));
    // const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    function changeView() {
        if (calendarState == 'month') setCalendarState('week');
        else if (calendarState == 'week') setCalendarState('month');
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>

                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Icon name="arrow-back" style={{ fontSize: 25 }}></Icon>
                    </TouchableOpacity>

                    <Text style={styles.headerText}>  키블(이)의 일정관리 </Text>
                    
                    <TouchableOpacity
                        style={styles.headerIconContainer}
                        onPress={() => changeView()}>
                        {calendarState == 'month' ? (
                            <Image
                                source={require('../../assets/icons/ic_monthly.png')}
                                style={styles.headerIconImage}/>
                        ) : (
                            <Image
                                source={require('../../assets/icons/ic_monthly.png')}
                                style={styles.headerIconImage}
                            />
                        )}
                    </TouchableOpacity>

                </View>

                {/* 캘린더 */}
                {
					calendarState === 'month' ? (
                    //////////////////////// 달력모드
                    <View style={styles.calendarContainer}>

                        <Calendar
                            style={styles.calendarStyle}
                            onDayPress={(day) => setSelectedDate(day.dateString)}
                            renderArrow={direction => {
                                return (
                                    direction == 'left' 
                                    ? <Icon
                                        name="chevron-back-outline"
                                        style={styles.arrowLeftIconStyle}/>
                                    : <Icon
                                        name="chevron-forward-outline"
                                        style={styles.arrowRightIconStyle}/>
                                )}}
                            monthFormat={'MM' + '월'}
                            markingType={'multi-dot'}
                            markedDates={{
                                [selectedDate]: { 
                                    selected : selectedDate != getDateYMD(new Date(), '-') ? true : false , 
                                    selectedColor : MAIN_COLOR, 
                                },
                                '2021-10-25': { selected : '2021-10-25' == selectedDate ? true : false , selectedColor: MAIN_COLOR, dots: [{key: 'vacation', color: 'red'}, {key: 'massage', color: 'blue'}, {key: 'workout', color: 'green'}]},
                            }}
                            theme={{
                                textMonthFontSize: 22,
                                textMonthFontFamily: 'Cafe24Ssurround',
                                textMonthFontWeight: '500',
                                textDayFontWeight : '500',
                                'stylesheet.day.basic': {
                                    'base': {
                                    width: 32,
                                    height: 40,
                                    alignItems : 'center',
                                    justifyContent : 'space-between',
                                    },
                                    'text' : {
                                        color : 'black',
                                        fontSize : 15,
                                        width : 30,
                                        height: 30,
                                        textAlign: 'center',
                                        textAlignVertical : 'center'
                                    },
                                    'selectedText' : {
                                        borderColor : 'rgb(255, 138, 92)',
                                        borderWidth : 1,
                                        borderRadius : 5,
                                        color : 'black'
                                    },
                                    'todayText': {
                                        backgroundColor: 'rgb(255, 138, 92)',
                                        color : 'white',
                                        borderRadius: 100,
                                    },

                                    
                                },
                                'stylesheet.calendar.header': {
                                    dayHeader: {
                                        marginTop: 20,
                                        marginBottom: 10,
                                        width: 32,
                                        textAlign: 'center',
                                    },
                                    dayTextAtIndex0: {
                                        color: 'red',
                                        fontFamily : 'Cafe24Ssurround',
                                    },
                                    dayTextAtIndex1: {
                                        color: '#707070',
                                        fontFamily : 'Cafe24Ssurround'
                                    },
                                    dayTextAtIndex2: {
                                        color: '#707070',
                                        fontFamily : 'Cafe24Ssurround'
                                    },
                                    dayTextAtIndex3: {
                                        color: '#707070',
                                        fontFamily : 'Cafe24Ssurround'
                                    },
                                    dayTextAtIndex4: {
                                        color: '#707070',
                                        fontFamily : 'Cafe24Ssurround'
                                    },
                                    dayTextAtIndex5: {
                                        color: '#707070',
                                        fontFamily : 'Cafe24Ssurround'
                                    },
                                    dayTextAtIndex6: {
                                        color: 'blue',
                                        fontFamily : 'Cafe24Ssurround'
                                    },
                                },
                            }}
                        />
                        <Divider height={1} color={'#ededed'} />


                    </View>
                	) : (
                    ///////////////////////주간모드
                    <View>
                        {/* <CalendarStrip selectedDate={setSelectedDate} />

                        <ScheduleFrame selectedDate={selectedDate} data={schedule_data} /> */}
                    </View>
                )}

				<View style={{margin : GLOBAL_MARGIN_HORIZON , marginBottom : 80}}>
					<Text style={{ color : 'black', fontSize: 17, fontWeight : 'bold', marginBottom : GLOBAL_MARGIN_HORIZON}}>{selectedDate == getDateYMD(new Date(),'-') ? '오늘' : selectedDate}</Text>
					{/* 일정 card */}
                    <ScheduleCard></ScheduleCard>
                    <ScheduleCard></ScheduleCard>
                    <ScheduleCard></ScheduleCard>
                    <ScheduleCard></ScheduleCard>
				</View>
                
            </ScrollView>

            <TouchableOpacity style={{position :'absolute', bottom : 0 , right : 0 }} onPress={() => navigation.navigate('AddCalendarPage')}>
                        <Image style={{height: 100, width: 100 }} source={require('../../assets/icons/btn_floating_new.png')} ></Image>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#f6f6f6'},
    headerContainer: {
        backgroundColor: 'white',
        height: SIZE_HEIGHT * 0.08,
        alignItems: 'center',
        paddingHorizontal: GLOBAL_MARGIN_HORIZON,
        flexDirection: 'row',
    },
    headerText: {fontSize: 20, color: 'black', fontFamily: 'Cafe24Ssurround'},
    headerIconContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    headerIconImage: {
        height: SIZE_HEIGHT * 0.035,
        width: SIZE_HEIGHT * 0.035,
        justifyContent: 'center',
    },
    calendarContainer: {flex: 1 },
    calendarStyle: {paddingBottom: SIZE_HEIGHT * 0.02},
	arrowLeftIconStyle: {
		width: SIZE_WIDTH * 0.3,
		fontSize: 25,
		textAlign: 'right',
		fontWeight: '100',
		color: MAIN_COLOR,
	},
    arrowRightIconStyle: {
		width: SIZE_WIDTH * 0.3,
		fontSize: 25,
		textAlign: 'left',
		fontWeight: '100',
		color: MAIN_COLOR,
	},
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
