/* eslint-disable react-native/no-inline-styles */
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
import {
  GLOBAL_MARGIN_HORIZON,
  SIZE_HEIGHT,
  SIZE_WIDTH,
} from '../common/constants';
import Modal from 'react-native-modal';
import {ChildInfoAlarmModal} from '../childInfo/components/ChildInfoAlarmModal';
import {ScheduleCard} from './components/ScheduleCard';
import {HomeWorkCard} from './components/HomeWorkCard';

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

  const [modalTest, setModalTest] = React.useState<boolean>(true);
  React.useEffect(() => {
    setWeeklySchedule(schedule_data);
  }, []);
  console.log(SIZE_HEIGHT * 0.025);
  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          height: SIZE_HEIGHT * 0.08,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/notification.png')}
            resizeMode="center"
            style={styles.headerIcon}
          />
          <View style={styles.notification} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/setting.png')}
            resizeMode="center"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          {/* 프로필 */}
          <MainProfile style={styles.profileContainer} />

          <View style={{height: SIZE_HEIGHT * 0.1, justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#d5d5d5',
                borderRadius: 10,
                height: SIZE_HEIGHT * 0.06,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>우리아이 정보 보기</Text>
            </TouchableOpacity>
          </View>

          {/* navigation 버튼 */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              height: SIZE_HEIGHT * 0.165,
              alignItems: 'center',
            }}>
            <NavigationButton
              style={{flex: 1}}
              imageStyle={styles.navigationButtonStyle}
              buttonName={'성장 노트'}
            />

            <NavigationButton
              style={{flex: 1}}
              imageStyle={styles.navigationButtonStyle}
              buttonName={'호소문제 등록'}
            />

            <NavigationButton
              style={{flex: 1}}
              imageStyle={styles.navigationButtonStyle}
              buttonName={'과제 등록'}
            />
          </View>
        </View>
        <Divider height={3} color="#ededed" />

        {/* 주간 일정 */}
        <View style={styles.scheduleContainer}>
          <View style={styles.containerHeader}>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black'}}>
              주간 일정
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#aaaaaa'}}>
              전체 보기{'>'}{' '}
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginLeft: GLOBAL_MARGIN_HORIZON,
                marginTop: 10,
              }}>
              <ScheduleCard
                height={SIZE_WIDTH * 0.6 * 0.876}
                width={SIZE_WIDTH * 0.6}
                style={{marginRight: SIZE_WIDTH * 0.02}}
              />
              <ScheduleCard
                height={SIZE_WIDTH * 0.6 * 0.876}
                width={SIZE_WIDTH * 0.6}
                style={{marginRight: SIZE_WIDTH * 0.02}}
              />
              <ScheduleCard
                height={SIZE_WIDTH * 0.6 * 0.876}
                width={SIZE_WIDTH * 0.6}
                style={{marginRight: SIZE_WIDTH * 0.02}}
              />
              <ScheduleCard
                height={SIZE_WIDTH * 0.6 * 0.876}
                width={SIZE_WIDTH * 0.6}
                style={{marginRight: SIZE_WIDTH * 0.02}}
              />
              {/* <ScheduleCard
                height={SIZE_HEIGHT * 0.285}
                width={SIZE_WIDTH * 0.6}
                style={{marginRight: SIZE_WIDTH * 0.02}}
              />
              <ScheduleCard
                height={SIZE_HEIGHT * 0.285}
                width={SIZE_WIDTH * 0.6}
                style={{marginRight: SIZE_WIDTH * 0.02}}
              />
              <ScheduleCard
                height={SIZE_HEIGHT * 0.285}
                width={SIZE_WIDTH * 0.6}
                style={{marginRight: SIZE_WIDTH * 0.02}}
              /> */}
            </View>
          </ScrollView>
        </View>
        <Divider height={3} color="#ededed" />

        {/* 이번 주 과제 */}
        <View style={styles.homeworkContainer}>
          <View style={styles.containerHeader}>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black'}}>
              이번 주 과제
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginLeft: GLOBAL_MARGIN_HORIZON,
                marginTop: 10,
              }}>
              <HomeWorkCard
                height={SIZE_HEIGHT * 0.2}
                width={SIZE_WIDTH * 0.4}
              />
              <HomeWorkCard
                height={SIZE_HEIGHT * 0.2}
                width={SIZE_WIDTH * 0.4}
              />
              <HomeWorkCard
                height={SIZE_HEIGHT * 0.2}
                width={SIZE_WIDTH * 0.4}
              />
              <HomeWorkCard
                height={SIZE_HEIGHT * 0.2}
                width={SIZE_WIDTH * 0.4}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* <ScheduleModalView
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
			</Modal> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    height: SIZE_HEIGHT * 0.39,
    marginHorizontal: GLOBAL_MARGIN_HORIZON,
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
