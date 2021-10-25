import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {SIZE_HEIGHT, SIZE_WIDTH} from '../../common/constants';
import {getHour} from '../service/calendarService';
import {schedule} from '../../../types/calendarTypes';

interface schedulerTest1Props {
  data: schedule[];
  selectedDate: Date;
}

export function ScheduleFrame(props: schedulerTest1Props) {
  props.data.map(e => {
    console.log(getHour(e.start_time));
  });
  const constTIme = [
    '오전 0시',
    '오전 1시',
    '오전 2시',
    '오전 3시',
    '오전 4시',
    '오전 5시',
    '오전 6시',
    '오전 7시',
    '오전 8시',
    '오전 9시',
    '오전 10시',
    '오전 11시',
    '오전 12시',
    '오후 1시',
    '오후 2시',
    '오후 3시',
    '오후 4시',
    '오후 5시',
    '오후 6시',
    '오후 7시',
    '오후 8시',
    '오후 9시',
    '오후 10시',
    '오후 11시',
    '오후 12시',
  ];

  function schedule(data: schedule[]) {
    return data.map(() => {
      return (
        <View
          style={{
            backgroundColor: 'yellow',
            width: '12%',
            height: (SIZE_HEIGHT / 16) * 2.5,
            position: 'absolute',
            top: (SIZE_HEIGHT / 16) * 0.5 + (SIZE_HEIGHT / 16) * 2,
            right: (SIZE_WIDTH / 100) * 16 + (SIZE_WIDTH / 100) * 12 * 3,
          }}></View>
      );
    });
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: SIZE_HEIGHT / 2,
        width: SIZE_WIDTH,
      }}>
      <ScrollView style={{height: SIZE_HEIGHT / 2}}>
        {/* 시간표 Frame */}
        {constTIme.map((item, id) => {
          return (
            <View
              key={id}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: SIZE_HEIGHT / 16,
              }}>
              <View style={{width: '16%'}}>
                <Text>{item}</Text>
              </View>
              <View
                style={{flex: 1, borderWidth: 0.5, borderColor: '#C4C4C4'}}
              />
            </View>
          );
        })}

        {/* schedule */}
        <View
          style={{
            backgroundColor: 'yellow',
            width: '12%',
            height: (SIZE_HEIGHT / 16) * 2.5,
            position: 'absolute',
            top: (SIZE_HEIGHT / 16) * 0.5 + (SIZE_HEIGHT / 16) * 2,
            left: (SIZE_WIDTH / 100) * 16 + (SIZE_WIDTH / 100) * 12 * 3,
          }}></View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: '12%',
            height: (SIZE_HEIGHT / 16) * 2.5,
            position: 'absolute',
            top: (SIZE_HEIGHT / 16) * 0.5 + (SIZE_HEIGHT / 16) * 2,
            left: (SIZE_WIDTH / 100) * 16 + (SIZE_WIDTH / 100) * 12 * 1,
          }}></View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({});
