import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class WeekView extends Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'red',
  },
});
