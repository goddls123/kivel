import React from 'react';
import {View, StyleSheet, Text, ViewStyle} from 'react-native';
import {MAIN_COLOR} from '../../common/constants';

interface TextViewProps {
  text: string;
  style?: ViewStyle;
}

export function TextView(props: TextViewProps) {
  return (
    <View style={[{flexDirection: 'row'}, props.style]}>
      <Text style={styles.text}>{props.text} </Text>
      <Text style={{color: MAIN_COLOR}}>*</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Pretendard',
    fontSize: 20,
    color: '#111111',
  },
});
