import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  NativeSegmentedControlIOSChangeEvent,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { FONT_COLOR_BLACK } from '../../common/constants';

interface mainProfileProps {
  birth?: string;
  name?: string;
  sex?: string;
  style: ViewStyle;
}

export function MainProfile(props: mainProfileProps) {
  return (
    <View style={props.style}>
        {/* 헤더 텍스트 */}
        <TouchableOpacity style={styles.profileImage}>
          <Image
              source={{
                uri: 'https://image.xportsnews.com/contents/images/upload/article/2019/0531/mb_1559280740871004.jpg',
              }}
              style={{height: 80, width: 80, borderRadius: 50}} />
        </TouchableOpacity>
        <View >
            <Text style={styles.babyName}>{props.name || '김키블'} </Text>
            <Text style={styles.birthDate}>날짜</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  profileImage: {
    marginRight: 16
  },
  profileText: {
   
  },
  babyName: {
    color: FONT_COLOR_BLACK,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8
  },
  birthDate: {
    color: '#707070',
    fontSize: 12
  }
});
