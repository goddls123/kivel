import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker'
import Modal from 'react-native-modal';
import { weekInfo } from '../../../types/calendarTypes';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, MAIN_COLOR, SIZE_WIDTH } from '../../common/constants';
import { getLastWeek, getNextWeek, getThisWeek } from '../service/calendarService';
import Icon from 'react-native-vector-icons/Ionicons';


interface schedulerTestProps {
    selectedDate : string
    setSelectedDate(date: string) : any
}

export function CalendarStrip(props : schedulerTestProps) {
        
        
        const [currentFocusDate, setCurrentFocusDate] = React.useState<Date>(new Date(props.selectedDate))
        const [ThisWeek,setThisWeek] = React.useState<weekInfo[]>(getThisWeek(new Date(props.selectedDate)));

        function daySelectHandler(item : weekInfo) {
            let Y = item.year
            let M = item.month
            let D = item.date
            let stringDate = Y + '-' + M + '-' + D

            props.setSelectedDate(stringDate)
            setCurrentFocusDate(new Date(stringDate))
        }
        function isWeekendText(num : number) {
            if(num == 0) return 'red'
            else if(num == 6) return 'blue'
            else return 'black'
        }

        function isSelectedDate(selectedDay : weekInfo){
            console.log(parseInt(selectedDay.date),parseInt(currentFocusDate.getDate().toString()))
            
            if(parseInt(selectedDay.date) == parseInt(currentFocusDate.getDate().toString())
            && selectedDay.month == (currentFocusDate.getMonth()+1).toString()
            && selectedDay.year == currentFocusDate.getFullYear().toString()) {
                return { color : 'white', backgroundColor : MAIN_COLOR, borderRadius : 100}
            }
        }
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{marginBottom : GLOBAL_MARGIN_HORIZON -3 , flexDirection : 'row', alignItems : 'center'}} 
                // onPress={()=>setModalVisible(true)}
                >
                    <TouchableOpacity onPress={() => {setThisWeek(getLastWeek(new Date(ThisWeek[0].fullDateString)))}}>
                        <Icon
                            name="chevron-back-outline"
                            style={styles.arrowLeftIconStyle}/>
                    </TouchableOpacity>
                    <Text style={styles.monthText}>{ ThisWeek[3].month + '월'}</Text>
                    
                    <TouchableOpacity onPress={() => {setThisWeek(getNextWeek(new Date(ThisWeek[0].fullDateString)))}}>
                        <Icon
                            name="chevron-forward-outline"
                            style={styles.arrowRightIconStyle}/>
                    </TouchableOpacity>
                </TouchableOpacity>
                
                <View style={{ flex :1,flexDirection : 'row', justifyContent : 'space-between'}}>
                    {/* <View style={{width : '10%'}} /> */}
                    {ThisWeek.map((item,id)=>{
                        return(
                            <View key={id} style={{flex : 1, alignItems : 'center' }} >
                                
                                    <Text style={[styles.dayHeaderText,{ color : isWeekendText(id)}]}>{item.kDay}</Text>
                                    <TouchableOpacity onPress={() => daySelectHandler(item)}>
                                        <Text style={[styles.dayText, isSelectedDate(item)]}>{parseInt(item.date)}</Text>
                                    </TouchableOpacity>
                            </View>
                        )
                    })}
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
        width : SIZE_WIDTH * 0.2,
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