import React from 'react';
import {StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, GREY_BACKGOUND_COLOR, GREY_BORDER_COLOR, MAIN_COLOR, SIZE_WIDTH} from '../../common/constants';
// import { CalendarStrip } from './CalendarStrip';
import CalendarStrip from 'react-native-calendar-strip'

// import {Agenda} from 'react-native-calendars';

export default function WeekView() {
    // const schedules = [{startTime:}]
    const [selectedDate, setSelectedDate] = React.useState(new Date())
    return (
		<View>

			<View style={styles.timeTable}>

				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오전 9시</Text>
				</View>
				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오전</Text>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>10:00</Text>
				</View>
				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오전</Text>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>11:00</Text>
				</View>
				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오전</Text>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>12:00</Text>
				</View>
				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오후</Text>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>1:00</Text>
				</View>
				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오후</Text>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>2:00</Text>
				</View>
				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오후</Text>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>3:00</Text>
				</View>
				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오후</Text>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>4:00</Text>
				</View>
				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오후</Text>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>5:00</Text>
				</View>
				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오후</Text>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>6:00</Text>
				</View>
				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오후</Text>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>7:00</Text>
				</View>
				<View style={{height : SIZE_WIDTH * 0.12, borderBottomWidth :1 , borderColor : '#d5d5d5', justifyContent : 'center'}}>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>오후</Text>
					<Text style={{color : '#d5d5d5', fontSize: 12, marginHorizontal : GLOBAL_MARGIN_HORIZON}}>8:00</Text>
				</View>
			</View>
        
        

        </View>
    );
}

const styles = StyleSheet.create({
    timeTable: {
        display: 'flex',
        position: 'relative',
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
