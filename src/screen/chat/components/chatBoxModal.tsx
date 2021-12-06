import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {
  FONT_COLOR_BLACK,
  SIZE_HEIGHT,
  SIZE_WIDTH,
  WHITE,
} from '../../common/constants';
interface chatBoxModalProps {
  isVisible: boolean;
  toggleVisible(): any;
}
export default function ChatBoxModal(props: chatBoxModalProps) {
  return (
    <Modal
      isVisible={props.isVisible}
      style={styles.modal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={() => props.toggleVisible()}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.text}>복사</Text>
          <Image source={require('../../../assets/icons/ic_copy_24.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.text}>답장</Text>
          <Image source={require('../../../assets/icons/ic_reply_24.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.text}>상단고정</Text>
          <Image source={require('../../../assets/icons/ic_pin_24.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menu, {marginBottom: 0}]}>
          <Text style={styles.text}>삭제</Text>
          <Image source={require('../../../assets/icons/ic_delete_24.png')} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {},
  container: {
    justifyContent: 'space-between',
    backgroundColor: WHITE,
    height: SIZE_HEIGHT * 0.31,
    borderRadius: 20,
    overflow: 'hidden',
  },
  menu: {
    paddingHorizontal: SIZE_WIDTH * 0.085,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {fontSize: 17, color: FONT_COLOR_BLACK, fontWeight: '600'},
  image: {
    width: 24,
    height: 24,
  },
});
