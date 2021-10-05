import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {schedule_data} from '../test/testData';
import {MainProfile} from './components/MainProfile';
import {ScheduleButton} from './components/ScheduleButton';
import Modal from 'react-native-modal';
import {assertLeafType} from 'graphql';
import {ScheduleModalView} from './components/ScheduleModalView';
import { RouteProp, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../types/navigationParam';
import { schedule } from '../../types/calendarTypes';
import { NavigationButton } from './components/NavigationButton';
import { Divider } from '../common/divider';


interface homeTabProps {
  navigation : StackNavigationProp<stackInterface,'Calendar'>;
  route : RouteProp<stackInterface,'Calendar'>;
}

export function homeTab({navigation, route}: homeTabProps) {
  //////////// Todo
  //	profile, 이번주 일정, 이번주 과제 받아오고 패치
  const [profile, setProfile] = React.useState();
  const [weeklySchedule, setWeeklySchedule] = React.useState<schedule[]>();
  const [selectedSchedule, setSelectedSchedule] = React.useState<schedule>();
  const [weeklyHomework, setWeeklyHomework] = React.useState();
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    setWeeklySchedule(schedule_data);
  }, []);

  return (
    <View style={styles.container}>

      {/* 헤더 */}
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Icon name="person-circle-outline" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="notifications-outline" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
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
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
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


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'center',
    width: '80%',
    marginTop: 15,
  },
  headerIcon: {
    fontSize: 30,
    marginLeft: 15,
  },
  profileContainer: {
    flex: 3.5,
    width: '80%',
    alignSelf: 'center',
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
  scheduleButton : {
	height: 100,
	width: 100,
	margin: 10,
  }
});
