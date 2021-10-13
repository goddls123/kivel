import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {schedule_data} from '../test/testData';
import {MainProfile} from './components/MainProfile';
import {ScheduleModalView} from './components/ScheduleModalView';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {stackInterface} from '../../types/navigationParam';
import {schedule} from '../../types/calendarTypes';
import {NavigationButton} from './components/NavigationButton';
import {Divider} from '../common/divider';
import {GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH} from '../common/constants';
import Modal from 'react-native-modal'
import { ChildInfoAlarmModal } from '../childInfo/components/ChildInfoAlarmModal';
import { ScheduleCard } from './components/ScheduleCard';
interface homeTabProps {
    navigation: StackNavigationProp<stackInterface, 'Calendar'>;
    route: RouteProp<stackInterface, 'Calendar'>;
}

export function homeTab(props: homeTabProps) {
    //////////// Todo
    //	profile, 이번주 일정, 이번주 과제 받아오고 패치
    const [profile, setProfile] = React.useState();
    const [weeklySchedule, setWeeklySchedule] = React.useState<schedule[]>();
    const [selectedSchedule, setSelectedSchedule] = React.useState<schedule>();
    const [weeklyHomework, setWeeklyHomework] = React.useState();
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);

	const [modalTest, setModalTest] = React.useState<boolean>(true)
    React.useEffect(() => {
        setWeeklySchedule(schedule_data);
    }, []);
    console.log(SIZE_HEIGHT * 0.025)
    return (
        <SafeAreaView style={styles.container}>
            {/* 헤더 */}    
            <View style={{flexDirection : 'row', height : SIZE_HEIGHT * 0.08, justifyContent : 'flex-end', alignItems : 'center' }}>
                    <TouchableOpacity>
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
                <MainProfile style={styles.profileContainer}></MainProfile>

                
                <View style={{height : SIZE_HEIGHT * 0.1, justifyContent : 'flex-end'}}>
                    <TouchableOpacity style={{ borderWidth : 1, borderColor : "#d5d5d5",borderRadius : 10,  height: SIZE_HEIGHT * 0.06 , width : '100%', alignItems : 'center', justifyContent : 'center'}}>
                        <Text>우리아이 정보 보기</Text>
                    </TouchableOpacity>
                </View>

                {/* navigation 버튼 */}
                <View style={{flex : 1, flexDirection : 'row', height : SIZE_HEIGHT * 0.165, alignItems : 'center'}}>
                    <NavigationButton 
                    style={{flex : 1}} 
                    imageStyle={styles.navigationButtonStyle}
                    buttonName={'성장 노트'} /> 
                    
                    <NavigationButton 
                    style={{flex : 1}} 
                    imageStyle={styles.navigationButtonStyle}
                    buttonName={'호소문제 등록'} /> 
                    
                    <NavigationButton 
                    style={{flex : 1}} 
                    imageStyle={styles.navigationButtonStyle}
                    buttonName={'과제 등록'} />                 
                </View>

            </View>
            <Divider height={3} color="#ededed" />



            {/* 주간 일정 */}
            <View style={styles.scheduleContainer}>
                <View 
                style={{
                    height : SIZE_HEIGHT * 0.06 , 
                    flexDirection : 'row' , 
                    marginHorizontal : GLOBAL_MARGIN_HORIZON ,
                    justifyContent : 'space-between', 
                    alignItems : 'flex-end',
                    paddingBottom : 5,
                    
                    }}>
                    <Text style={{fontWeight : 'bold', fontSize : 17, color : "bloack"}}>주간 일정</Text>
                    <Text style={{fontWeight : 'bold', fontSize : 15, color : "#aaaaaa"}}>전체 보기{'>'} </Text>
                </View>
                
                <View style={{height : SIZE_HEIGHT * 0.3, justifyContent : 'center', marginLeft : GLOBAL_MARGIN_HORIZON}}>
                    <ScheduleCard style={{height : SIZE_HEIGHT * 0.285, width : SIZE_WIDTH * 0.6, borderRadius : 10, overflow : 'hidden'}}></ScheduleCard>
                </View>
            </View>
            <Divider height={1} color="#C4C4C4" />

            {/* 이번 주 과제 */}
            <View style={styles.scheduleContainer}>
                <TouchableOpacity>
                    <Text>이번 주 과제 +</Text>
                </TouchableOpacity>

                <ScrollView horizontal>
                    {weeklySchedule
                        ? weeklySchedule.map((scheduleData: schedule, id) => {
                                return (
                                    <TouchableOpacity
                                        key={id}
                                        onPress={() => {
                                            setModalVisible(false);
                                            setSelectedSchedule(weeklySchedule[id]);
                                        }}>
                                    </TouchableOpacity>
                                );
                            })
                        : null}
                </ScrollView>
            </View>
			</ScrollView>
            <ScheduleModalView
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                data={selectedSchedule}
            />
			<Modal
			isVisible={modalTest}
			style={{margin : 0}}
			onBackdropPress={() => setModalTest(false)}
			>
				<ChildInfoAlarmModal></ChildInfoAlarmModal>
			</Modal>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'white'
    },
    topContainer : {
        height : SIZE_HEIGHT * 0.38,
        marginHorizontal : GLOBAL_MARGIN_HORIZON,
    },
    headerContainer: {
        flex: 0.8,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        // width: '',
        backgroundColor: 'purple',
        marginLeft: GLOBAL_MARGIN_HORIZON,
        marginRight: GLOBAL_MARGIN_HORIZON,
        // marginTop: 15,
    },
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
        height : SIZE_HEIGHT * 0.125,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navigationButtonStyle : {backgroundColor : "#f6f6f6", width : SIZE_WIDTH * 0.125 , height : SIZE_WIDTH * 0.125, borderRadius : 10,  },
    buttonContainer: {
        flex: 2,
        width: '86%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    },
    scheduleContainer: {
        height : SIZE_HEIGHT * 0.38,
    },
    homeWorkContainer: {
        flex: 3,
    },
    scheduleButton: {
        height: 100,
        width: 100,
        margin: 10,
    },
});
