import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet} from 'react-native';
import {View, TouchableOpacity, Text} from 'react-native';
// import { Calendar } from 'react-native-toggle-calendar'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { schedule } from '../../types/calendarTypes';
import { stackInterface } from '../../types/navigationParam';
import { Divider } from '../common/divider';
import { schedule_data } from '../test/testData';
import { CalendarStrip } from './components/CalendarStrip';
import { DayComponent } from './components/DayComponent';
import { ScheduleCard } from './components/ScheduleCard';
import { ScheduleFrame } from './components/ScheduleFrame';
import { scheduleCheck } from './service/calendarService';


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
    <View style={{flex : 1, backgroundColor : 'white'}}>
      <TouchableOpacity style={{alignItems : 'flex-end'}} onPress={() => changeView()}> 
        <Text style={{fontSize : 15 , color : '#C4C4C4', }}>UI변경</Text>
      </TouchableOpacity>

      <View> 
        <Text style={{fontSize : 30}}> 키블(이)의 일정관리 </Text>
      </View>
      
      {/* 캘린더 */}
      {calendarState === 'month' 
      ? //////////////////////// 달력모드
      <View style={{flex : 1}}> 
        <Calendar
          dayComponent={({date, state}) => {
            return (
              <DayComponent date={date} state={state} setSelectedDaySchedule={setSelectedDaySchedule} />
          )}}
          onDayPress={(day) => {console.log(day)}}
          monthFormat={'yyyy MM'}
          firstDay={0}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          enableSwipeMonths={true}
        />

        <Divider height={1} color={'black'} />
        
        
        {/* 일정 card */}
        <View style={{flex : 1 ,alignItems : 'center'}}>
              <ScrollView>
              {
                selectedDaySchedule?.map((data,key) => {
                  return (
                    <ScheduleCard key={key} data={data} ></ScheduleCard>
                  )
                })
              }
              </ScrollView>
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




    </View>
  );
};
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})

