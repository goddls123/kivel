import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {holidayTextColor, scheduleCheck} from '../service/calendarService';
import { schedule } from '../../../types/calendarTypes';
import { schedule_data } from '../../test/testData';


export interface TestData {

}

export interface DateObject {
  day: number;
  dateString: string;
  month: number;
  timestamp: number;
  year: number;
}

export interface dayComponentProps {
  date: DateObject;
  state: '' | 'disabled' | 'selected' | 'today';
  setSelectedDaySchedule(data : schedule[]) : any
}

export function DayComponent(props: dayComponentProps) {
  let currentDate = new Date(props.date.dateString);
  let testData : schedule[] = schedule_data;
  const [todaySchedule, setTodaySchedule] = React.useState<schedule[]>([])
  

  React.useEffect(()=>{
    let scheduleArray : schedule[] = []
    schedule_data.map((data)=>{
      if(scheduleCheck(currentDate,data)){
        scheduleArray.push(data)
      }
    })
    setTodaySchedule(scheduleArray)
  },[])

  return (
    <TouchableOpacity onPress={() => props.setSelectedDaySchedule(todaySchedule)}>
      <View
        style={[
          styles.calendarDateView,
          props.state === 'today' ? {backgroundColor: 'skyblue'} : {backgroundColor: 'white'},
        ]}>
        <Text style={{ textAlign : 'center', color: holidayTextColor(currentDate, props.state)}}>
          {props.date.day}
        </Text>

        {/* 스케줄 표시 */}
        <View style={styles.scheduleDotContainer}>
          {
            todaySchedule?.map((data,id) =>{
              return(
                <View key={id} style={[styles.scheduleDot,{backgroundColor: data.color}]} />
              )
            })
          }
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  calendarDateView: {
    height: 30,
    width: 30,
    borderRadius: 100,
  },
  scheduleDotContainer :{
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  },
  scheduleDot:{
    margin: 1,
    height: 5,
    width: 5,
    borderRadius: 100,
  }
});
