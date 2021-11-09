import React from 'react';
import {StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, GREY_BACKGOUND_COLOR, GREY_BORDER_COLOR, MAIN_COLOR, SIZE_WIDTH} from '../../common/constants';
// import { CalendarStrip } from './CalendarStrip';
import CalendarStrip from 'react-native-calendar-strip'
import { TimeTable } from './TimeTable';

// import {Agenda} from 'react-native-calendars';

export default function WeekView() {
    // const schedules = [{startTime:}]
	const HOUR_WIDTH = (SIZE_WIDTH - GLOBAL_MARGIN_VERTICAL * 2) / 7
	const HOUR_LEFT_MARGIN = HOUR_WIDTH * 0.05 + GLOBAL_MARGIN_VERTICAL
	const HOUR_HEIGHT = SIZE_WIDTH * 0.12
    const [selectedDate, setSelectedDate] = React.useState(new Date())
    return (
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
    );
}

const styles = StyleSheet.create({
    timeTable: {
        borderTopColor: GREY_BORDER_COLOR,
        borderTopWidth: 1,
    },
    timeList: {
        display: 'flex',
        // padding: 15,
        backgroundColor: GREY_BACKGOUND_COLOR,
        borderBottomColor: GREY_BORDER_COLOR,
        borderBottomWidth: 1,
    },
    timeText: {
        fontSize: 10,
        // marginHorizontal : GLOBAL_MARGIN_HORIZON,
        color: '#d5d5d5',
    },
    schedule: {
        position: 'absolute',
        backgroundColor: 'red',
        width: 44,
        padding: 5,
        borderRadius: 5,
    },
    scheculeText: {
        color: '#ffffff',
    },
});
