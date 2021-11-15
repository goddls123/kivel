import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import {assertScalarType} from 'graphql';
import {
  CHAT_BACKGOUND_COLOR,
  FONT_COLOR_BLACK,
  MAIN_COLOR,
  SIZE_WIDTH,
  WHITE,
} from '../../common/constants';

interface chatSendedProps {
  mine: boolean;
  image?: any;
  text: string;
  setModalData(value: string): any;
}

export function ChatBox(props: chatSendedProps) {
  return (
    <View
      style={[
        styles.message,
        props.mine ? styles.messageSended : styles.messageReceived,
      ]}>
      {!props.mine ? (
        <Image
          style={{
            alignSelf: 'flex-start',
            // backgroundColor: 'red',
            marginRight: 8,
            width: SIZE_WIDTH * 0.09,
            height: SIZE_WIDTH * 0.09,
          }}
          borderRadius={50}
          source={
            props.image
              ? {uri: props.image}
              : require('../../../assets/icons/ic_profile_32.png')
          }
        />
      ) : null}
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.cloud,
          {
            backgroundColor: props.mine ? MAIN_COLOR : CHAT_BACKGOUND_COLOR,
            borderTopStartRadius: props.mine ? 20 : 10,
            borderTopEndRadius: props.mine ? 10 : 20,
          },
        ]}
        delayLongPress={5000}
        onLongPress={() => {
          props.setModalData(props.text);
        }}>
        {props.text ? (
          <Text
            style={[
              styles.text,
              {color: props.mine ? WHITE : FONT_COLOR_BLACK},
            ]}>
            {props.text}
          </Text>
        ) : null}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  message: {
    flexDirection: 'row',
    marginVertical: moderateScale(7, 2),
    paddingHorizontal: 16,
    width: SIZE_WIDTH,
  },
  messageReceived: {
    // marginLeft: 20,
    justifyContent: 'flex-start',
  },
  messageSended: {
    justifyContent: 'flex-end',
    // marginRight: 29,
  },
  cloud: {
    maxWidth: moderateScale(250),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  text: {
    paddingTop: 3,
    fontSize: 14,
    lineHeight: 22,
  },
});
