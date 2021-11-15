import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {stackInterface} from '../../types/navigationParam';
import {
  FONT_COLOR_BLACK,
  FONT_GREY,
  FONT_LIGHT_GREY,
  GREY_BORDER_COLOR,
} from '../common/constants';
import {ChatBox} from './components/chatBox';

interface chatRoomProps {
  navigation: StackNavigationProp<stackInterface>;
}

const userId = '12345';
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
  const goBack = () => {
    props.navigation.pop();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerFont}>
          <TouchableOpacity onPress={goBack}>
            <Icon style={styles.iconStyle} name="arrow-back"></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.headerCenter}>
          <Text style={{color: FONT_COLOR_BLACK}}>김초롱 치료사</Text>
          <Text style={{color: FONT_GREY}}>운동치료</Text>
        </View>
        <View style={styles.headerBack}>
          <Icon
            style={[styles.iconStyle, {marginLeft: 8}]}
            name="search-outline"
          />
          <Icon
            style={[styles.iconStyle, {marginLeft: 8}]}
            name="person-add-outline"
          />
        </View>
      </View>
      <Text>
        <FlatList
          style={{display: 'flex'}}
          data={data}
          renderItem={({item}) => {
            if (item.id === userId) {
              return (
                <ChatBox mine={true} text={item.text} image={item?.image} />
              );
            } else {
              return (
                <ChatBox mine={false} text={item.text} image={item?.image} />
              );
            }
          }}></FlatList>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
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
