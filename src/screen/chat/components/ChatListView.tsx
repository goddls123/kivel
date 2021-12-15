import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';

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
        <View style={styles.profileArea}>
          <Image
            source={require('../../../assets/icons/ic_alarm_56.png')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.messageContainer}>
          <View style={styles.textHeader}>
            <View style={styles.user}>
              <Text style={styles.name}>김초롱</Text>
              <Text style={styles.role}>운동치료사</Text>
            </View>
            <Text style={styles.date}>날짜</Text>
          </View>
          <View style={styles.messageArea}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.lastMessage}>
              마지막 채팅내용 마지막 채팅내용 마지막 채팅내용 마지막 채팅내용
              마지막 채팅내용 마지막 채팅내용 마지막 채팅내용 마지막 채팅내용
            </Text>
            <View style={styles.messageCountBox}>
              <Text style={styles.messageCount}>1</Text>
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
  profileArea: {
    flex: 1,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: SIZE_HEIGHT * 0.05,
    width: SIZE_HEIGHT * 0.05,
    borderRadius: 100,
  },
  messageContainer: {
    flex: 8,
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  textHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  user: {display: 'flex', flexDirection: 'row'},
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: FONT_COLOR_BLACK,
    marginRight: 4,
  },
  role: {fontSize: 12, fontWeight: 'normal', color: FONT_GREY},
  date: {fontSize: 11, fontWeight: 'normal', color: FONT_LIGHT_GREY},
  messageArea: {flexDirection: 'row', justifyContent: 'space-between'},
  lastMessage: {
    fontSize: 12,
    fontWeight: 'normal',
    color: FONT_COLOR_BLACK,
    flex: 13,
  },
  messageCountBox: {
    width: 18,
    height: 18,
    borderRadius: 50,
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_COLOR,
  },
  messageCount: {
    color: WHITE,
    fontSize: 12,
    fontWeight: 'normal',
  },
});
