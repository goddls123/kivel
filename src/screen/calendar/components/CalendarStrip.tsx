import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import {getThisWeek} from '../service/calendarService';

interface schedulerTestProps {
  selectedDate(date: Date): any;
}

export function CalendarStrip(props: schedulerTestProps) {
  const [date, setDate] = React.useState<Date>(new Date());
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const ThisWeek = getThisWeek(date);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={{fontSize: 30}}>{date.getMonth() + 1 + '월'}</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <View style={{width: '16%'}} />
        {ThisWeek.map((item, id) => {
          return (
            <View
              key={id}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View>
                <Text>{item.kDay}</Text>
                <Text>{item.date}</Text>
              </View>
            </View>
          );
        })}
      </View>

      <Modal isVisible={modalVisible} hasBackdrop={true}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{marginLeft: '10%', marginRight: '10%'}}>
            <DatePicker
              style={{backgroundColor: 'white'}}
              date={date}
              onDateChange={newDate => setDate(newDate)}
              mode={'date'}
            />
            <TouchableOpacity
              style={{backgroundColor: 'red', alignSelf: 'flex-end'}}
              onPress={() => {
                setModalVisible(false);
                props.selectedDate(date);
              }}>
              <Text>확인버튼</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
