import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  CHAT_BACKGOUND_COLOR,
  FONT_COLOR_BLACK,
  FONT_DARK_GREY,
  MAIN_COLOR,
  SIZE_HEIGHT,
  SIZE_WIDTH,
  WHITE,
} from '../../common/constants';

interface ScheduleModal {
  toggleVisible(): any;
  isVisible: boolean;
}
export default function ScheduleModal(props: ScheduleModal) {
  const [title, onChangeTitle] = React.useState('');
  return (
    <Modal
      style={styles.modal}
      isVisible={props.isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={() => props.toggleVisible()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.category}>일정조율</Text>
            <TouchableOpacity onPress={() => props.toggleVisible()}>
              <Image
                style={styles.close}
                source={require('../../../assets/icons/ic_cloesed_24.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <TextInput
              value={title}
              style={styles.input}
              onChangeText={onChangeTitle}
              placeholder="일정제목"
            />
            <View style={styles.list}>
              <Text style={styles.text}>시작</Text>
              <View style={styles.date}></View>
            </View>
            <View style={styles.list}>
              <Text style={styles.text}>종료</Text>
              <View style={styles.date}></View>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: title ? MAIN_COLOR : CHAT_BACKGOUND_COLOR},
              ]}>
              <Text
                style={[
                  styles.buttonText,
                  {color: title ? WHITE : FONT_DARK_GREY},
                ]}>
                {' '}
                보내기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    // flex: 1,
    width: SIZE_WIDTH,
    backgroundColor: WHITE,
    paddingHorizontal: 16,
    paddingVertical: 19,
    justifyContent: 'space-between',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: SIZE_HEIGHT * 0.4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    color: FONT_COLOR_BLACK,
    textAlign: 'center',
  },
  close: {
    width: 22,
    height: 22,
  },
  body: {},
  footer: {},
  input: {
    borderBottomColor: CHAT_BACKGOUND_COLOR,
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingBottom: 8,
  },
  list: {
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomColor: CHAT_BACKGOUND_COLOR,
    borderBottomWidth: 1,
  },
  text: {},
  date: {},
  button: {
    width: SIZE_WIDTH - 32,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    paddingVertical: 15,
  },
  buttonText: {fontSize: 16, fontStyle: 'normal'},
});
