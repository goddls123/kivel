import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
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
    <View>
      <Modal
        style={styles.modal}
        isVisible={props.isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={() => props.toggleVisible()}>
        <View style={styles.header}>
          <Text style={styles.category}>일정조율</Text>
          <TouchableOpacity>
            <Image
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
              {backgroundColor: title ? CHAT_BACKGOUND_COLOR : MAIN_COLOR},
            ]}>
            <Text
              style={[
                styles.buttonText,
                {color: title ? FONT_DARK_GREY : WHITE},
              ]}>
              {' '}
              보내기
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: WHITE,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: SIZE_WIDTH,
    marginLeft: 0,
    height: SIZE_HEIGHT * 0.43,
    paddingHorizontal: 16,
    paddingVertical: 19,
    justifyContent: 'space-between',
  },
  header: {flexDirection: 'row'},
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    color: FONT_COLOR_BLACK,
  },
  body: {},
  footer: {},
  input: {borderBottomColor: CHAT_BACKGOUND_COLOR, borderBottomWidth: 1},
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
    paddingVertical: 15,
  },
  buttonText: {fontSize: 16, fontStyle: 'normal'},
});
