import React from 'react';
import {StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, GREY_BACKGOUND_COLOR, GREY_BORDER_COLOR, MAIN_COLOR, SIZE_WIDTH} from '../../common/constants';
// import { CalendarStrip } from './CalendarStrip';
import CalendarStrip from 'react-native-calendar-strip'
import { TimeTable } from './TimeTable';

// import {Agenda} from 'react-native-calendars';

export default function WeekView() {
    // const schedules = [{startTime:}]
	const HOUR_WIDTH = (SIZE_WIDTH - 10)/7
    const [selectedDate, setSelectedDate] = React.useState(new Date())
    return (
		<View>
			<TimeTable
			hourHeight={SIZE_WIDTH * 0.12}
			></TimeTable>
			
			<View style={{
				left : 5 + HOUR_WIDTH * 0.05,
				position : 'absolute', 
				height : SIZE_WIDTH * 0.12 * 2.5 , 
				width : HOUR_WIDTH * 0.9,
				backgroundColor : '#e63464',
			}}/>
			<View style={{
				left : 5 + HOUR_WIDTH,
				position : 'absolute', 
				height : SIZE_WIDTH * 0.12 * 2.5 , 
				width : HOUR_WIDTH,
				backgroundColor : 'blue',
			}}/>
			<View style={{
				left : 5 + HOUR_WIDTH* 2,
				position : 'absolute', 
				height : SIZE_WIDTH * 0.12 * 2.5 , 
				width : HOUR_WIDTH,
				backgroundColor : 'purple',
			}}/>
			<View style={{
				left : 5 + HOUR_WIDTH * 3,
				position : 'absolute', 
				height : SIZE_WIDTH * 0.12 * 2.5 , 
				width : HOUR_WIDTH,
				backgroundColor : 'yellow',
			}}/>
			<View style={{
				left : 5 + HOUR_WIDTH * 4,
				position : 'absolute', 
				height : SIZE_WIDTH * 0.12 * 2.5 , 
				width : HOUR_WIDTH,
				backgroundColor : 'black',
			}}/>
			<View style={{
				left : 5 + HOUR_WIDTH * 5,
				position : 'absolute', 
				height : SIZE_WIDTH * 0.12 * 2.5 , 
				width : HOUR_WIDTH,
				backgroundColor : 'red',
			}}/>

			<View style={{
				left : 5 + HOUR_WIDTH * 6,
				position : 'absolute', 
				height : SIZE_WIDTH * 0.12 * 2.5 , 
				width : HOUR_WIDTH,
				backgroundColor : 'green',
			}}/>
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
