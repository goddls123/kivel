import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker'
import Modal from 'react-native-modal';
import { weekInfo } from '../../../types/calendarTypes';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_WIDTH } from '../../common/constants';
import { getLastWeek, getNextWeek, getThisWeek } from '../service/calendarService';
import Icon from 'react-native-vector-icons/Ionicons';
import { parsedScheduleType } from '../../../types/types';
import { TimeTable } from './TimeTable';
import { JSXElement } from '@babel/types';


interface schedulerTestProps {
    selectedDate : string
    setSelectedDate(date: string) : any
    
    focusedDate : string
    setFocusedDate(date : string) : any

	scheduleData : parsedScheduleType[]
}

export function CalendarStrip(props : schedulerTestProps) {
        
		const HOUR_WIDTH = (SIZE_WIDTH - GLOBAL_MARGIN_VERTICAL * 2) / 7
		const HOUR_LEFT_MARGIN = HOUR_WIDTH * 0.05 + GLOBAL_MARGIN_VERTICAL
		const HOUR_HEIGHT = SIZE_WIDTH * 0.12


        const [thisWeek,setThisWeek] = React.useState<weekInfo[]>(getThisWeek(new Date(props.focusedDate)));
        const [focusedMonth, setFocusedMonth] = React.useState<string>(props.focusedDate)

        function isWeekendText(num : number) {
            if(num == 0) return 'red'
            else if(num == 6) return 'blue'
            else return 'black'
        }

        function isSelectedDate(selectedDay : weekInfo){
            if(selectedDay.fullDateString == props.selectedDate){
                return { color : 'white', backgroundColor : MAIN_COLOR, borderRadius : 100}
            }
        }
        
        function getMonthText() {
            if(thisWeek[0].month == thisWeek[6].month){
                return thisWeek[0].month + '월'
            }
            return thisWeek[0].month + '월 / ' + thisWeek[6].month + '월'
        }

		function renderWeekView() {
			let viewArr : Element[] = []
			thisWeek.map((item,id)=>{
				viewArr.push(
					<View key={id} style={{flex : 1, alignItems : 'center' }} >
							{/* month */}
							<Text style={[styles.dayHeaderText,{ color : isWeekendText(id)}]}>{item.kDay}</Text>
							{/* day */}
							<TouchableOpacity onPress={() => props.setSelectedDate(item.fullDateString)}>
								<Text style={[styles.dayText, isSelectedDate(item)]}>{parseInt(item.date)}</Text>
							</TouchableOpacity>
							{/* date , scheduleView */}
							<View style={{flexDirection : 'row'}}>
							{ renderScheduleView(item) }
							</View>

					</View>
				)
			})
			return viewArr
		}

		function renderScheduleView(item : weekInfo) {
			let viewArr : Element[] = []
			props.scheduleData.map((data, id) => {
				if(data.date == item.fullDateString){
					viewArr.push(
						<View key={id} style={{ width: 6, height: 6, marginTop: 1, borderRadius: 2, backgroundColor : data.color, marginHorizontal : 1}} />
					)
				}
			})
			return viewArr
		}



        React.useEffect(() => {
            if(thisWeek[0].month != focusedMonth.substr(5,2)){	
				console.log(thisWeek[0].fullDateString)
                props.setFocusedDate(thisWeek[0].fullDateString)
				setFocusedMonth(thisWeek[0].fullDateString)
            }
        },[thisWeek, props.selectedDate])

        return (
			<View>
            <View style={styles.container}>

				{/* 월 , monthArrow */}
                <View style={{marginBottom : GLOBAL_MARGIN_HORIZON -3 , flexDirection : 'row', alignItems : 'center'}} >
                    <TouchableOpacity onPress={() => setThisWeek(getLastWeek(new Date(thisWeek[0].fullDateString)))}>
                        <Icon
                            name="chevron-back-outline"
                            style={styles.arrowLeftIconStyle}/>
                    </TouchableOpacity>

                    <Text style={styles.monthText}>{ getMonthText() }</Text>
                    
                    <TouchableOpacity onPress={() => setThisWeek(getNextWeek(new Date(thisWeek[0].fullDateString)))}>
                        <Icon
                            name="chevron-forward-outline"
                            style={styles.arrowRightIconStyle}/>
                    </TouchableOpacity>
                </View>

				{/* calendarStrip  */}
                <View style={{ flex :1,flexDirection : 'row', justifyContent : 'space-between'}}>
                    { renderWeekView() }
                </View>
                
            </View>
			
			<View>
				<TimeTable
				hourHeight={SIZE_WIDTH * 0.12}
				></TimeTable>

				<View style={{
					left : HOUR_LEFT_MARGIN + HOUR_WIDTH * 2,
					top : HOUR_HEIGHT * 4,
					position : 'absolute', 
					height : HOUR_HEIGHT * 2, 
					width : HOUR_WIDTH * 0.9,
					borderRadius : 6,
					backgroundColor : '#e63464',
				}}>
					<Text style={{marginHorizontal : 5, fontSize : 12, color : 'white'}}>에베베ㅔ베</Text>
				</View>
			</View>
			</View>
        );
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center',
        paddingTop : GLOBAL_MARGIN_HORIZON - 3 ,
        paddingHorizontal : GLOBAL_MARGIN_VERTICAL,
        paddingBottom : 20
        // borderWidth : 0,
    },
    monthText : {          
        // width : SIZE_WIDTH * 0.3,
        marginHorizontal : GLOBAL_MARGIN_VERTICAL,
        fontSize : 22,
        color: 'black',
        textAlign: 'center',
        fontFamily : 'Cafe24Ssurround'
    },
    arrowLeftIconStyle: {
		width: SIZE_WIDTH * 0.25,
		fontSize: 25,
		textAlign: 'right',
		fontWeight: '100',
		color: MAIN_COLOR,
	},
    arrowRightIconStyle: {
		width: SIZE_WIDTH * 0.25,
		fontSize: 25,
		textAlign: 'left',
		fontWeight: '100',
		color: MAIN_COLOR,
	},
    dayContainer : {
        width: 32,
        height: 40,
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    dayHeaderText : {
        marginTop: 20,
        marginBottom: 10,
        width: 32,
        textAlign: 'center',
        fontFamily : 'Cafe24Ssurround'
    },
    dayText : {
        color : 'black',
        fontSize : 15,
        width : 30,
        height: 30,
        marginTop : 10,
        textAlign: 'center',
        textAlignVertical : 'center',
    }
})