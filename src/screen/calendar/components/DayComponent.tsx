import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {holidayTextColor, scheduleCheck} from '../service/calendarService';
import { DateObject, schedule } from '../../../types/calendarTypes';
import { schedule_data } from '../../test/testData';
import { MAIN_COLOR, SIZE_HEIGHT } from '../../common/constants';


export interface TestData {

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
            <View style={{ height : SIZE_HEIGHT * 0.03}}>
                <View style={{
					height : SIZE_HEIGHT * 0.04,
					width : SIZE_HEIGHT * 0.04,
					// left : -SIZE_HEIGHT * 0.005,
					top : -SIZE_HEIGHT * 0.01, 
					alignItems : 'center', 
					justifyContent : 'center', 
					backgroundColor : props.state == 'today' ? MAIN_COLOR : 'white',
					borderRadius : 100
				}}>
                    <Text style={{ 
						textAlign : 'center', 
						color: props.state == 'today' ? 'white' : holidayTextColor(currentDate, props.state), 
						borderRadius : 100 , 
						fontWeight : '500'
						}}>
                        {props.date.day}
                    </Text>
                </View>
			</View>

			{/* 스케줄 표시 */}
			<View style={[styles.scheduleDotContainer, {height : SIZE_HEIGHT * 0.02, alignItems : 'flex-end'}]}>
				{
					todaySchedule?.map((data,id) =>{
						return(
							<View key={id} style={[styles.scheduleDot,{backgroundColor: data.color}]} />
						)
					})
				}
			</View>
            
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
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
