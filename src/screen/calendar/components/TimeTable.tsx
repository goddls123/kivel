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
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>9</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>10</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>11</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>12</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>1</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>2</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>3</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>4</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>5</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>6</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>7</Text>
				<View style={[styles.hourDivider,{height : props.hourHeight}]}/>
			</View>

			<View style={[styles.hourView,{height : props.hourHeight}]}>
				<Text style={[styles.hourText, { bottom : -props.hourHeight * 0.5 }]}>8</Text>
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
	hourText : {color : '#d5d5d5', fontSize: 12, marginLeft : GLOBAL_MARGIN_HORIZON, width : '5%'},
	hourDivider : {width : '90%', borderBottomWidth :1 , borderColor : '#d5d5d5'},
})