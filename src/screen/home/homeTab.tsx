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
    ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MainProfile} from './components/MainProfile';
import {ScheduleModalView} from './components/ScheduleModalView';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {stackInterface} from '../../types/navigationParam';
import {childInfoHome, parsedScheduleType, scheduleType} from '../../types/types';
import {NavigationButton} from './components/NavigationButton';
import {Divider} from '../common/divider';
import {
    GLOBAL_MARGIN_HORIZON,
    SIZE_HEIGHT,
    SIZE_WIDTH,
} from '../common/constants';
import Modal from 'react-native-modal';
import {ChildInfoAlarmModal} from '../childEnroll/components/ChildInfoAlarmModal';
import {ScheduleCard} from './components/ScheduleCard';
import {HomeWorkCard} from './components/HomeWorkCard';
import {ProfileModal} from './components/ProfileModal';

// Test
import {scheduleTypeTest, schedule_data} from '../test/testData';
import {gql, useQuery} from '@apollo/client';
import {GET_CHILD_INFO_HOME, GET_SCHEDULE, WEEKLY_SCHEDULE} from '../../connection/queries';
import { getThisWeek, scheduleDataParser } from '../calendar/service/calendarService';
import { getDateYMD } from '../common/service/dateService';
import { ActivityIndicator } from 'react-native-paper';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
//

interface homeTabProps {
    navigation: StackNavigationProp<stackInterface>;
    route: RouteProp<stackInterface>;
}

export function homeTab(props: homeTabProps) {
    //////////// patch
    // profile
    const {data : childInfoData, loading : childInfoLoading, error : childInfoError} = useQuery(GET_CHILD_INFO_HOME)
    const [childInfo, setChildInfo] = React.useState<childInfoHome>()
    React.useEffect(() => {
        if(childInfoData && childInfoData.userChild){
            setChildInfo(childInfoData.userChild[0].child)
        }
    },[childInfoData,childInfoLoading])
    
    // 
    //이번주 일정
    const {data : weeklyScheduleData , loading : weeklyScheduleLoading, error : weeklyScheduleError} = useQuery(WEEKLY_SCHEDULE)
    const [weekSchedule, setWeekSchedule] = React.useState<parsedScheduleType[]>(); //이번 주 일정
    
    React.useEffect(() => {
        if(weeklyScheduleData && weeklyScheduleData.userSchedules){            
            let data = scheduleDataParser(weeklyScheduleData.userSchedules[0].schedules).sort(function(a : any, b : any){
                            if(a.date > b.date) return 1
                            else if(a.date < b.date) return -1
                            else return 0
                        })
            console.log(data)
            let result : parsedScheduleType[] = []
            data.map((item : parsedScheduleType) => {
                if(item.date >= getDateYMD(new Date(),'-') && item.date <= getThisWeek()[6].fullDateString){
                    result.push(item)
                }
            })
            setWeekSchedule(result)
        }
    },[weeklyScheduleData])
    ////////////////////////////////////////////////////////

    const [scheduleModal, setScheduleModal] = React.useState(true);
    const [profileImageModal, setProfileImageModal] = React.useState(false);
    
    const [homework, setHomeWork] = React.useState<any>(); //이번 주 과제

	function renderWeeklySchedule() {
        let viewArr : Element[] = []
        
		if(weekSchedule?.length){
            weekSchedule.map((item, id) => {
                viewArr.push(
                    <View key={id} style={styles.scheduleCardContainer}>
                        <TouchableOpacity onPress={() => {}}>
                            <ScheduleCard
                            height={SIZE_HEIGHT * 0.285}
                            width={SIZE_WIDTH * 0.6}
                            style={{marginRight: SIZE_WIDTH * 0.02}}
                            data={item}/>
                        </TouchableOpacity>
                    </View>
                )
            },[])
            return (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {viewArr}
                </ScrollView>
            )
		} else {
			return(
				<View key={111} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Text style={styles.noItemText}>
						주간 일정을 추가해주세요!
					</Text>
				</View>
			)
		}
	}

	function renderWeeklyHomeWork() {
		if(homework){
			return(
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={styles.homeWorkCardContainer}>
						{
							homework.map(() => {
								<HomeWorkCard
								height={SIZE_HEIGHT * 0.2}
								width={SIZE_WIDTH * 0.4}
								/>
							})
						}
					</View>
				</ScrollView>
			)
		} 
		else {
			return(
				<View style={styles.homeWorkView}>
					<Text style={styles.noItemText}>
						과제를 추가해주세요!
					</Text>
				</View>
			)
		}
	}


    // backPressHandler
    const [exitApp, setExitApp] = React.useState<boolean>(false)
	const timerRef= React.useRef<any>(null)
    const handleBackButtonClick = () => {
        if(!props.navigation.isFocused()){
            return false
        } else {
            if (exitApp == undefined || !exitApp) {
                setExitApp(true)
                ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT)
                timerRef.current = setTimeout(() => { setExitApp(false) },2000);
            } else {
                if(timerRef.current){
                    clearTimeout(timerRef.current)
                }
                BackHandler.exitApp(); 
            }
            return true;
        }
    }
    BackHandler.addEventListener("hardwareBackPress" , () => handleBackButtonClick());
    // backPressHandler


    return (
        <SafeAreaView style={styles.container}>
            {/* 헤더 */}
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('AlarmList')}>
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
                    data={childInfo}></MainProfile>

                    <View style={styles.childInfoButtonContainer}>
                        <TouchableOpacity
                            style={styles.childInfoButton}
                            onPress={() => props.navigation.navigate('ChildInfo')}>
                            <Text>우리아이 정보 보기</Text>
                        </TouchableOpacity>
                    </View>

                    {/* navigation 버튼 */}
                    <View style={styles.navigationButtonContainer}>
                        <NavigationButton
                            onPress={() => {
                                props.navigation.navigate('AddRecord',{radioState : [false, false, true]});
                            }}
                            style={{flex: 1}}
                            imageStyle={styles.navigationButtonStyle}
                            imageType="note"
                            buttonName={'성장 노트'}
                        />

                        <NavigationButton
                            style={{flex: 1}}
                            imageStyle={styles.navigationButtonStyle}
                            imageType="trouble"
                            buttonName={'호소문제 등록'}
                        />

                        <NavigationButton
                            style={{flex: 1}}
                            imageStyle={styles.navigationButtonStyle}
                            imageType="homeWork"
                            buttonName={'과제 등록'}
                        />
                    </View>
                </View>
                <Divider height={3} color="#ededed" />

                {/* 주간 일정 */}
                <View style={styles.scheduleContainer}>
                    { 
                        weeklyScheduleLoading 
                        ? <ActivityIndicator size='large'></ActivityIndicator>
                        : <View style={styles.containerHeader}>
                            <Text style={styles.weeklyScheduleText}>주간 일정 {weekSchedule?.length}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('Calendar');
                                }}>
                                <Text style={styles.weeklyScheduleText2}>전체 보기{'>'} </Text>
                            </TouchableOpacity>
                        </View>
                    }
					{ !weeklyScheduleLoading ? renderWeeklySchedule() : null }
                    

                </View>
                <Divider height={3} color="#ededed" />

                {/* 이번 주 과제 */}
                <View style={styles.homeworkContainer}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.homeworkText}>이번 주 과제</Text>
                    </View>

                    { renderWeeklyHomeWork() }
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
                animationIn="zoomIn"
                animationOut="zoomOut">
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
        justifyContent : 'center'
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
	noItemText: {
		fontSize: 20,
		fontFamily: 'Cafe24Ssurround',
		color: '#d5d5d5',
	},
	scheduleCardContainer : {
		flexDirection: 'row',
		justifyContent: 'center',
		marginLeft: GLOBAL_MARGIN_HORIZON,
		marginTop: 10,
	},
	homeWorkCardContainer : {
		flexDirection: 'row',
		justifyContent: 'center',
		marginLeft: GLOBAL_MARGIN_HORIZON,
		marginTop: 10,
	},
	homeWorkView : {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
