import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  NativeSegmentedControlIOSChangeEvent,
  ViewStyle,
} from 'react-native';

interface mainProfileProps {
  birth?: string;
  name?: string;
  sex?: string;
  style: ViewStyle;
}

export function MainProfile(props: mainProfileProps) {
  return (
    <View style={props.style}>
      <View style={styles.innerContainer}>
        {/* 헤더 텍스트 */}
        <View style={styles.header}>
          <Text>우리아이 사전정보</Text>
          <View>
            <Text>{props.birth || '2020.08.19'}</Text>
            <Text>+365일</Text>
          </View>
        </View>

        {/* 이미지 부분 */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://image.xportsnews.com/contents/images/upload/article/2019/0531/mb_1559280740871004.jpg',
            }}
            style={{height: 160, width: 160, borderRadius: 100}} />
        </View>

        {/* 이름 */}
        <View style={styles.babyName}>
          <Text>
            {props.name || '김키블'} {props.sex || '여'}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  babyName: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
