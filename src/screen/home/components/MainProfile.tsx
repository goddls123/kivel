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
import { FONT_COLOR_BLACK, SIZE_WIDTH } from '../../common/constants';

interface mainProfileProps {
  birth?: string;
  name?: string;
  sex?: string;
  style: ViewStyle;
  imageUri? : string
}

export function MainProfile(props: mainProfileProps) {
  return (
    <View style={props.style}>
        {/* 헤더 텍스트 */}
        <TouchableOpacity style={styles.profileImage}>
          <Image
              source={ props.imageUri ? { uri : props.imageUri } : require('../../../assets/icons/ic_profile.png')}
              style={{height: SIZE_WIDTH * 0.22, width: SIZE_WIDTH * 0.22}} />
        </TouchableOpacity>
        <View >
            <Text style={styles.babyName}>{props.name || '김키블'} {props.sex || "[성별 아이콘]"} </Text>
            <Text style={styles.birthDate}>[날짜]</Text>
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
