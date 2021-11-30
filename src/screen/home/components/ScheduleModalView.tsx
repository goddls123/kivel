import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import { schedule } from '../../../types/calendarTypes';
import { Button } from '../../common/components/Button';
import { GLOBAL_MARGIN_HORIZON, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";
import { parsedScheduleType } from '../../../types/types';
import { getDateYMD, repeatCycleString } from '../../common/service/dateService';
import { getKoreanDay } from '../../calendar/service/calendarService';


interface ScheduleModalViewProps {
	data? : parsedScheduleType
	setModalView(value : boolean) : void
}

export function ScheduleModalView(props : ScheduleModalViewProps) {
	const [mapModal, setMapModal] = React.useState<boolean>(false);
	const [scheduleDate, setScheduleDate] = React.useState<Date>(props.data?.date ? new Date(props.data.date) : new Date)
	
	
		return (
				<View style={styles.modalContainer}>
					<View style={styles.headerContainer}>
						<View style={styles.headerLeftSpace} />
						<View style={styles.headerTextContainer}>
							<Text style={styles.headerText}>{props.data?.date == getDateYMD(new Date(),'-') ? '오늘' : props.data?.date}</Text>
						</View>
						<View style={styles.headerRightSpace} />
					</View>


					<View style={[styles.mainContainer,{marginTop : GLOBAL_MARGIN_HORIZON}]}>
						<Text style={styles.grayText}>과목</Text>
						<Text style={styles.blackText}>{props.data?.title}</Text>
					</View>
					<View style={[styles.mainContainer]}>
						<Text style={styles.grayText}>일시</Text>
						<Text style={styles.blackText}>{getDateYMD(scheduleDate,'.') + ' (' + getKoreanDay(scheduleDate.getDay()) + ')'}</Text>
						<Text style={styles.blackText}>{props.data?.startTime.substr(0,5) + ' - ' + props.data?.endTime.substr(0,5) }  |  {repeatCycleString(props.data?.repeatCycle, props.data?.repeatDay)}</Text>
					</View>
					{
						props.data?.theraphistId
						? <View style={[styles.mainContainer]}>
							<Text style={styles.grayText}>치료사</Text>
							<Text style={styles.blackText}>웨베베베베베베</Text>
						</View>
						: null
					}
					
					<View style={[styles.mainContainer]}>
						<Text style={styles.grayText}>장소</Text>
						<Text style={styles.blackText}>{props.data?.location}</Text>
					</View>
					{/* <View style={{flex : 2.5, marginTop : 20}}>
						<NaverMapView style={{width: '100%', height: '100%'}}
											showsMyLocationButton={true}
											// center={{...P0, zoom: 16}}
											onMapClick={() => setMapModal(true)}>
						</NaverMapView>
					</View> */}
					<View style={{flexDirection :'row', alignItems : 'flex-end', paddingBottom : '10%', paddingTop : '5%'}}>
						<View style={{flex : 1, marginLeft : '12%', marginRight : '3%' }}>
							<Button text={'수정'} textColor={'#707070'} style={{backgroundColor : '#ededed', borderRadius : 50}}></Button>
						</View>
						<View style={{flex : 1, marginRight : '12%', marginLeft : '3%'}}>
							<Button text={'확인'} textColor={'white'} style={{backgroundColor : MAIN_COLOR, borderRadius : 50}}
							onPress={() => props.setModalView(false)}
							></Button>
						</View>
					</View>

					<Modal
					isVisible={mapModal}
					onBackdropPress={() => setMapModal(false)}>
						<View style={{backgroundColor : 'white' ,alignSelf : 'center' ,width: '100%', height: '90%', borderRadius : 15, overflow : 'hidden', paddingHorizontal : 20, paddingVertical : 30}}>
						<NaverMapView 
							key={1} 
							style={{flex : 1,}}
							showsMyLocationButton={true}
							// center={{...P0, zoom: 16}}
							// onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
							>
						</NaverMapView>
						</View>
					</Modal>
				</View>

		);
}
const styles = StyleSheet.create({
	modalContainer : {
		backgroundColor : 'white',
		// height : SIZE_HEIGHT * 0.6,
		borderRadius : 16,
	},
	headerContainer : {height : SIZE_HEIGHT * 0.08 , flexDirection : 'row'},
	headerLeftSpace : {width : SIZE_WIDTH * 0.1, borderBottomWidth : 2, borderBottomColor : '#ededed'},
	headerRightSpace : { flex : 1, borderBottomWidth : 2, borderBottomColor : '#ededed'},
	headerTextContainer : {
		borderBottomWidth : 3,
		borderBottomColor : MAIN_COLOR,
		justifyContent : 'flex-end',
		alignItems : 'center',
		paddingHorizontal : 10,
		paddingBottom : SIZE_HEIGHT * 0.01,
	},
	headerText : { 
		color : MAIN_COLOR, 
		fontSize : 18,
	},
	mainContainer : {
		marginLeft : SIZE_WIDTH * 0.1, 
		marginBottom : GLOBAL_MARGIN_HORIZON,
	},
	grayText : {fontSize : 15, fontWeight : '500', color : '#707070'},
	blackText: {fontSize : 18, fontWeight : 'bold', color : 'black'},
})