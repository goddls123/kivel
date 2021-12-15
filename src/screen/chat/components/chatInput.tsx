import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  GREY_BACKGOUND_COLOR,
  GREY_BORDER_COLOR,
  SIZE_WIDTH,
} from '../../common/constants';

interface chatInputProps {
  toggleMenu(): any;
  isMenuOn: boolean;
  setBottonMenu(flag: boolean): any;
  toggleScheduleVisible(): any;
}

export function ChatInput(props: chatInputProps) {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.toggleMenu()}>
        <Image
          source={
            props.isMenuOn
              ? require('../../../assets/icons/ic_cloesed_24.png')
              : require('../../../assets/icons/ic_more_share_24.png')
          }
        />
      </TouchableOpacity>
      <View style={styles.inputBox}>
        <TextInput
          value={text}
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="메시지 입력"
          onFocus={() => {
            console.log('focus');
            props.setBottonMenu(false);
          }}
        />
      </View>
      <TouchableOpacity>
        {text ? (
          <Image source={require('../../../assets/icons/ic_send_on.png')} />
        ) : (
          <Image source={require('../../../assets/icons/ic_send_off.png')} />
        )}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    width: SIZE_WIDTH,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 4,
    backgroundColor: GREY_BACKGOUND_COLOR,
  },
  inputBox: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: GREY_BORDER_COLOR,
    paddingVertical: 11,
    paddingHorizontal: 16,
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    fontSize: 14,
  },
});
