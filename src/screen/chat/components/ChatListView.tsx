import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  FONT_COLOR_BLACK,
  FONT_GREY,
  FONT_LIGHT_GREY,
  MAIN_COLOR,
  SIZE_HEIGHT,
  WHITE,
} from '../../common/constants';
interface chatListViewProps {
  goToChatRoom(data: any): void;
}

export function ChatListView(props: chatListViewProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.innerContainer}
        onPress={() => props.goToChatRoom('chatRoom')}>
        <View
          style={{
            flex: 1,
            marginRight: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/icons/ic_alarm_56.png')}
            style={{
              height: SIZE_HEIGHT * 0.05,
              width: SIZE_HEIGHT * 0.05,
              borderRadius: 100,
            }}></Image>
        </View>
        <View
          style={{
            flex: 8,
            paddingLeft: 5,
            display: 'flex',
            flexDirection: 'column',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: FONT_COLOR_BLACK,
                  marginRight: 4,
                }}>
                김초롱
              </Text>
              <Text
                style={{fontSize: 12, fontWeight: 'normal', color: FONT_GREY}}>
                운동치료사
              </Text>
            </View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: 'normal',
                color: FONT_LIGHT_GREY,
              }}>
              날짜
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                fontSize: 12,
                fontWeight: 'normal',
                color: FONT_COLOR_BLACK,
                flex: 13,
              }}>
              마지막 채팅내용 마지막 채팅내용 마지막 채팅내용 마지막 채팅내용
              마지막 채팅내용 마지막 채팅내용 마지막 채팅내용 마지막 채팅내용
            </Text>
            <View
              style={{
                // flex: 1,
                width: 18,
                height: 18,
                borderRadius: 50,
                marginLeft: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: MAIN_COLOR,
              }}>
              <Text
                style={{
                  color: WHITE,
                  fontSize: 12,
                  fontWeight: 'normal',
                }}>
                1
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: SIZE_HEIGHT * 0.1,
    justifyContent: 'center',
    padding: 16,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
