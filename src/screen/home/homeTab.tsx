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
import {ScheduleButton} from './components/ScheduleButton';
import {ScheduleModalView} from './components/ScheduleModalView';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {stackInterface} from '../../types/navigationParam';
import {schedule} from '../../types/calendarTypes';
import {NavigationButton} from './components/NavigationButton';
import {Divider} from '../common/divider';
import {GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT} from '../common/constants';
import Modal from 'react-native-modal'
import { ChildInfoAlarmModal } from '../childInfo/components/ChildInfoAlarmModal';
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

    return (
        <SafeAreaView style={styles.container}>
            {/* 헤더 */}
            <View style={styles.headerContainer}>
                {/* <View style={{flexDirection: 'row'}}> */}
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
                {/* </View> */}
            </View>

            {/* 프로필 */}
            <MainProfile style={styles.profileContainer}></MainProfile>

            {/* navigation버튼 */}
            <View style={styles.buttonContainer}>
                <NavigationButton height={80} width={80} buttonName={'성장 노트'} />
                <NavigationButton height={80} width={80} buttonName={'호소문제 등록'} />
                <NavigationButton height={80} width={80} buttonName={'과제 등록'} />
                <NavigationButton height={80} width={80} buttonName={'ㅇㄹ미ㅏ넒나'} />
            </View>
            <Divider height={1} color="#C4C4C4" />

            {/* 주간 일정 */}
            <View style={styles.scheduleContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Calendar')}>
                    <Text>주간 일정 +</Text>
                </TouchableOpacity>

                <ScrollView horizontal>
                    {weeklySchedule
                        ? weeklySchedule.map((scheduleData: schedule, id) => {
                                return (
                                    <TouchableOpacity
                                        key={id}
                                        onPress={() => {
                                            setModalVisible(true);
                                            setSelectedSchedule(weeklySchedule[id]);
                                        }}>
                                        <ScheduleButton
                                            style={styles.scheduleButton}
                                            data={{scheduleData}}
                                        />
                                    </TouchableOpacity>
                                );
                            })
                        : null}
                </ScrollView>
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
                                        <ScheduleButton
                                            style={styles.scheduleButton}
                                            data={{scheduleData}}
                                        />
                                    </TouchableOpacity>
                                );
                            })
                        : null}
                </ScrollView>
            </View>
					
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
        width: 20,
        height: 20,
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
        flex: 2,
        // width: '80%',
        // alignSelf: 'center',
        marginLeft: GLOBAL_MARGIN_HORIZON,
        marginRight: GLOBAL_MARGIN_HORIZON,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'yellow',
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
        flex: 3,
        marginTop: 10,
        width: '86%',
        alignSelf: 'center',
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
