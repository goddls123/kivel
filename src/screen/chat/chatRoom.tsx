import React, {useState} from 'react';
import {FlatList, Keyboard, SafeAreaView, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {stackInterface} from '../../types/navigationParam';
import {
  FONT_COLOR_BLACK,
  FONT_GREY,
  GREY_BORDER_COLOR,
} from '../common/constants';
import {ChatBox} from './components/chatBox';
import {ChatInput} from './components/chatInput';
import ChatBottomMenu from './components/chatBottomMenu';
import ChatSlideMenu from './components/chatSlideMenu';
import ChatBoxModal from './components/chatBoxModal';

interface chatRoomProps {
  navigation: StackNavigationProp<stackInterface>;
}

const data = [
  {id: '12345', text: '1안녕하세요'},
  {id: '12345', text: '2안녕하세요'},
  {id: '12342', text: '3안녕하세요'},
  {id: '12345', text: '4안녕하세요'},
  {id: '12345', text: '5안녕하세요'},
  {id: '12345', text: '안녕하세요'},
  {id: '12345', text: '안녕하세요'},
  {id: '12345', text: '안녕하세요'},
  {
    id: '12342',
    text: '안녕하세요',
    image: 'https://www.billiai.com/imageserver/profiles/01026659084.png/',
  },
  {id: '12345', text: '안녕하세요'},
  {
    id: '12345',
    text: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
  },
  {
    id: '12341',
    text: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
  },
]; // 맨앞에 빈 값 추가

export default function chatRoom(props: chatRoomProps) {
  const [isMenu, setMenu] = React.useState<boolean>(false);
  const [isSlideVisible, setSlideVisible] = React.useState<boolean>(false);
  const [isBoxModal, setBoxModal] = React.useState<boolean>(false);

  const goBack = () => {
    props.navigation.pop();
  };
  const toggleSlideVisible = () => {
    setSlideVisible(!isSlideVisible);
  };
  const toggleBoxVisible = () => {
    setBoxModal(false);
  };
  const onLongPress = (id: string, value: string) => {
    setBoxModal(true);
  };
  const toggleMenu = () => {
    Keyboard.dismiss();
    setMenu(!isMenu);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerFont}>
          <TouchableOpacity onPress={goBack}>
            <Icon style={styles.iconStyle} name="arrow-back" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerCenter}>
          <Text style={{color: FONT_COLOR_BLACK}}>김초롱 치료사</Text>
          <Text style={{color: FONT_GREY}}>운동치료</Text>
        </View>
        <View style={styles.headerBack}>
          <TouchableOpacity>
            <Icon
              style={[styles.iconStyle, {marginLeft: 8}]}
              name="search-outline"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleSlideVisible()}>
            <Icon style={[styles.iconStyle, {marginLeft: 8}]} name="menu" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        inverted
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <ChatBox
              id={item.id}
              text={item.text}
              image={item?.image}
              setModalData={onLongPress}
            />
          );
        }}
      />

      <ChatSlideMenu
        toggleVisible={toggleSlideVisible}
        isVisible={isSlideVisible}
      />
      <ChatBoxModal toggleVisible={toggleBoxVisible} isVisible={isBoxModal} />

      <ChatInput toggleMenu={toggleMenu} />
      {isMenu ? <ChatBottomMenu /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    backgroundColor: 'red',

    borderBottomWidth: 1,
    borderColor: GREY_BORDER_COLOR,
  },
  headerFont: {},
  headerCenter: {},
  headerBack: {
    flexDirection: 'row',
  },
  iconStyle: {fontSize: 24},
});
