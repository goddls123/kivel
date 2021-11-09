import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    TouchableOpacity,
    BackHandler,
    ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MainProfile} from './components/MainProfile';
import {ScheduleModalView} from './components/ScheduleModalView';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {stackInterface} from '../../types/navigationParam';
import {scheduleType} from '../../types/types';
import {NavigationButton} from './components/NavigationButton';
import {Divider} from '../common/divider';
import {GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH} from '../common/constants';
import Modal from 'react-native-modal'
import { ChildInfoAlarmModal } from '../childEnroll/components/ChildInfoAlarmModal';
import { ScheduleCard } from './components/ScheduleCard';
import { HomeWorkCard } from './components/HomeWorkCard';
import { ProfileModal } from './components/ProfileModal';


// Test
import {scheduleTypeTest, schedule_data} from '../test/testData';
// 


interface homeTabProps {
    navigation: StackNavigationProp<stackInterface, 'Calendar'>;
    route: RouteProp<stackInterface, 'Calendar'>;
}

export function homeTab(props: homeTabProps) {
    //////////// Todo
    //	profile, 이번주 일정, 이번주 과제 받아오고 패치

	///////////////////////// Test /////////////////////////////// 
    const [schedule, setSchedule] = React.useState<scheduleTypeTest[]>()
    function scheduleDataParser(data : scheduleTypeTest[]){
    	let schedule : any = []
      	data?.map((item) => {
        	let dateIndex = new Date(item.scheduleDate)
        	
          		while(dateIndex < item.period){
            		// 매주
					if(item.repeatCycle == 'W'){
						if(item.repeatDay[dateIndex.getDay()] == '1'){
							schedule.push({
							id : item.id,
							title : item.title,
							date : new Date(dateIndex.getTime()),
							startTime : item.startTime,
							endTime : item.endTime,
							})
						}
						dateIndex.setDate(dateIndex.getDate() + 1)
            		}
					else if(item.repeatCycle == '2W'){
						if(item.repeatDay[dateIndex.getDay()] == '1'){
							schedule.push({
							id : item.id,
							title : item.title,
							date : new Date(dateIndex.getTime()),
							startTime : item.startTime,
							endTime : item.endTime,
							})
						}

						if(dateIndex.getDay() == 6){
							dateIndex.setDate(dateIndex.getDate() + 7)
						}
						dateIndex.setDate(dateIndex.getDate() + 1)
            		}
					else if(item.repeatCycle == 'D'){
						schedule.push({
							id : item.id,
							title : item.title,
							date : new Date(dateIndex.getTime()),
							startTime : item.startTime,
							endTime : item.endTime,
						})
						break;
					}
					else if(item.repeatCycle =='M'){
						schedule.push({
							id : item.id,
							title : item.title,
							date : new Date(dateIndex.getTime()),
							startTime : item.startTime,
							endTime : item.endTime,
						})
						dateIndex.setMonth(dateIndex.getMonth() + 1)
					}			
          		}
        	
    	})

      return schedule
    }

    
    
    
    ///////////////////////// Test /////////////////////////////// 
    const [scheduleModal, setScheduleModal] = React.useState(true)
    const [profileImageModal, setProfileImageModal] = React.useState(false)
    const [weekSchedule, setWeekSchedule] = React.useState<scheduleType>()	//이번 주 일정
	const [homework ,setHomeWork ] = React.useState<any>() 					//이번 주 과제
    return (
        <SafeAreaView style={styles.container}>
            {/* 헤더 */}    
            <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('AlarmList')}>
                        <Image
                            source={require('../../assets/icons/notification.png')}
                            resizeMode="center"
                            style={styles.headerIcon}></Image>
                        <View style={styles.notification}></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/icons/setting.png')}
                            resizeMode="center"
                            style={styles.headerIcon}></Image>
                    </TouchableOpacity>    
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topContainer}>
                {/* 프로필 */}
                <MainProfile 
                style={styles.profileContainer}
                onPress={setProfileImageModal}
                imageUri={'http://192.168.35.62:3000/20210912220429397edac1-40cf-4b82-9483-3a0e11954e15.png'}
                ></MainProfile>

                
                <View style={styles.childInfoButtonContainer}>
                    <TouchableOpacity style={styles.childInfoButton}
                    onPress={() => props.navigation.navigate('ChildInfo')}>
                        <Text>우리아이 정보 보기</Text>
                    </TouchableOpacity>
                </View>

                {/* navigation 버튼 */}
                <View style={styles.navigationButtonContainer}>
                    <NavigationButton
                    onPress={() => { props.navigation.navigate('map')}}
                    style={{flex : 1}} 
                    imageStyle={styles.navigationButtonStyle}
                    imageType='note'
                    buttonName={'성장 노트'} /> 
                    
                    <NavigationButton 
                    style={{flex : 1}} 
                    imageStyle={styles.navigationButtonStyle}
                    imageType='trouble'
                    buttonName={'호소문제 등록'} /> 
                    
                    <NavigationButton 
                    style={{flex : 1}} 
                    imageStyle={styles.navigationButtonStyle}
                    imageType='homeWork'
                    buttonName={'과제 등록'} />                 
                </View>
            </View>
            <Divider height={3} color="#ededed" />



            {/* 주간 일정 */}
            <View style={styles.scheduleContainer}>
                <View style={styles.containerHeader}>
                    <Text style={styles.weeklyScheduleText}>주간 일정</Text>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('Calendar')}}>
                        <Text style={styles.weeklyScheduleText2}>전체 보기{'>'} </Text>
                    </TouchableOpacity>
                </View>
                
                {
					weekSchedule 
					?
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection : 'row', justifyContent : 'center', marginLeft : GLOBAL_MARGIN_HORIZON, marginTop : 10}}>
                        
                        <TouchableOpacity onPress={() => {}}>
                            <ScheduleCard height={SIZE_HEIGHT * 0.285} width={SIZE_WIDTH * 0.6} style={{marginRight : SIZE_WIDTH * 0.02}} />
                        </TouchableOpacity>
                        
                    </View>
                	</ScrollView>
					: 
					<View style={{flex :1, justifyContent : 'center',alignItems : 'center'}}>
						<Text style={{fontSize: 20, fontFamily : 'Cafe24Ssurround', color : '#d5d5d5'}}>주간 일정을 추가해주세요!</Text>
					</View>
				}
            </View>
            <Divider height={3} color="#ededed" />

            {/* 이번 주 과제 */}
            <View style={styles.homeworkContainer}>
                <View style={styles.containerHeader}>
                    <Text style={styles.homeworkText}>이번 주 과제</Text>
                </View>

				{
					homework
					?
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View style={{flexDirection : 'row', justifyContent : 'center', marginLeft : GLOBAL_MARGIN_HORIZON, marginTop : 10}}>
							<HomeWorkCard height={SIZE_HEIGHT * 0.2} width={SIZE_WIDTH * 0.4} />
							<HomeWorkCard height={SIZE_HEIGHT * 0.2} width={SIZE_WIDTH * 0.4} />
							<HomeWorkCard height={SIZE_HEIGHT * 0.2} width={SIZE_WIDTH * 0.4} />
							<HomeWorkCard height={SIZE_HEIGHT * 0.2} width={SIZE_WIDTH * 0.4} />
						</View>
					</ScrollView>
					:
					<View style={{flex :1, justifyContent : 'center',alignItems : 'center'}}>
						<Text style={{fontSize: 20, fontFamily : 'Cafe24Ssurround', color : '#d5d5d5'}}>과제를 추가해주세요!</Text>
					</View>
				}
            </View>

			</ScrollView>


            {/* <Modal
            isVisible={scheduleModal}>
                <ScheduleModalView
                setModalView={setScheduleModal}
                ></ScheduleModalView>
            </Modal> */}

            <Modal
            isVisible={profileImageModal}
            onBackdropPress={() => setProfileImageModal(false)}
            animationIn='zoomIn'
            animationOut='zoomOut'
            >
                <ProfileModal></ProfileModal>
            </Modal>
            
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    height: SIZE_HEIGHT * 0.35,
    marginHorizontal: GLOBAL_MARGIN_HORIZON,
  },
  headerContainer: {
    marginRight: GLOBAL_MARGIN_HORIZON,
    flexDirection: 'row',
    height: SIZE_HEIGHT * 0.08,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  childInfoButtonContainer: {
    height: SIZE_HEIGHT * 0.1,
    justifyContent: 'center',
  },
  childInfoButton: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 10,
    height: SIZE_HEIGHT * 0.05,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  weeklyScheduleText: {fontWeight: 'bold', fontSize: 17, color: 'black'},
  weeklyScheduleText2: {fontWeight: 'bold', fontSize: 15, color: '#aaaaaa'},
  homeworkText: {fontWeight: 'bold', fontSize: 17, color: 'black'},
  headerIcon: {
    width: 28,
    height: 28,
    marginLeft: 4,
    position: 'relative',
  },
  notification: {
    width: 4,
    height: 4,
    backgroundColor: '#f41313',
    borderRadius: 50,
    position: 'absolute',
    right: '20%',
    top: '25%',
  },
  profileContainer: {
    height: SIZE_HEIGHT * 0.125,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navigationButtonStyle: {
    backgroundColor: '#f6f6f6',
    width: SIZE_WIDTH * 0.125,
    height: SIZE_WIDTH * 0.125,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 2,
    width: '86%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  scheduleContainer: {
    height: SIZE_HEIGHT * 0.39,
  },
  containerHeader: {
    height: '15.5%',
    flexDirection: 'row',
    marginHorizontal: GLOBAL_MARGIN_HORIZON,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  homeworkContainer: {
    height: SIZE_HEIGHT * 0.34,
  },
  scheduleButton: {
    height: 100,
    width: 100,
    margin: 10,
  },
});
