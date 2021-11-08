import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GREY_BORDER_COLOR } from '../../common/constants';

interface TimeTableProps {
	hourHeight : any
		
}

export function TimeTable(props : TimeTableProps) {
		return (
			<View style={styles.timeTable}>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>9 am</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>10 am</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>11 am</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>12 pm</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>1 pm</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>2 pm</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>3 pm</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>4 pm</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>5 pm</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>6 pm</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>7 pm</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>8 pm</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>
		</View>
		);
}
const styles = StyleSheet.create({
	timeTable: {
        borderTopColor: GREY_BORDER_COLOR,
        borderTopWidth: 1,
    },
	hourView : {alignItems : 'center', flexDirection : 'row'},
	hourText : {color : '#d5d5d5', fontSize: 12, marginLeft : GLOBAL_MARGIN_HORIZON, width : '10%'},
	hourDivider : {width : '80%', borderBottomWidth :1 , borderColor : '#d5d5d5'},
})