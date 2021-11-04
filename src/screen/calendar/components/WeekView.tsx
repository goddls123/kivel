import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GREY_BACKGOUND_COLOR, GREY_BORDER_COLOR} from '../../common/constants';
// import {Agenda} from 'react-native-calendars';

export default function WeekView() {
  // const schedules = [{startTime:}]
  return (
    <View style={styles.timeTable}>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오전</Text>
          <Text style={styles.timeText}>8:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오전</Text>
          <Text style={styles.timeText}>9:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오전</Text>
          <Text style={styles.timeText}>10:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오전</Text>
          <Text style={styles.timeText}>11:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오전</Text>
          <Text style={styles.timeText}>12:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오후</Text>
          <Text style={styles.timeText}>1:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오후</Text>
          <Text style={styles.timeText}>2:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오후</Text>
          <Text style={styles.timeText}>3:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오후</Text>
          <Text style={styles.timeText}>4:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오후</Text>
          <Text style={styles.timeText}>5:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오후</Text>
          <Text style={styles.timeText}>6:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오후</Text>
          <Text style={styles.timeText}>7:00</Text>
        </View>
      </View>
      <View style={styles.timeList}>
        <View>
          <Text style={[styles.timeText, {paddingBottom: 3}]}>오후</Text>
          <Text style={styles.timeText}>8:00</Text>
        </View>
      </View>
      <View
        style={[styles.schedule, {height: 56 * 2.5, top: 56 * 9, left: 50}]}>
        <Text style={[styles.scheculeText, {fontSize: 10, fontWeight: 'bold'}]}>
          감각통합 치료
        </Text>
        <Text style={[styles.scheculeText, {fontSize: 9, fontStyle: 'normal'}]}>
          김초롱 치료사
        </Text>
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
    padding: 15,
    backgroundColor: GREY_BACKGOUND_COLOR,
    borderBottomColor: GREY_BORDER_COLOR,
    borderBottomWidth: 1,
  },
  timeText: {
    fontSize: 10,
    color: '#aaaaaa',
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
