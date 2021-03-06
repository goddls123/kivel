import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {stackInterface} from '../../types/navigationParam';
import {FONT_COLOR_BLACK, SIZE_HEIGHT} from '../common/constants';
import {ChatListView} from './components/ChatListView';

interface chatTabProps {
  navigation: StackNavigationProp<stackInterface>;
}
const data = [1, 2, 3, 4, 5, 6, 7, 8, 0]; // 맨앞에 빈 값 추가

export function chatTab(props: chatTabProps) {
  const gotoChatRoom = () => {
    props.navigation.navigate('ChatRoom');
  };
  const goBack = () => {
    props.navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerFront} onPress={goBack}>
          <Icon style={styles.iconStyle} name="arrow-back"></Icon>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerText}>치료사와 채팅</Text>
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

      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            if (!index) {
              return <View style={styles.adsContainer}></View>;
            } else {
              return <ChatListView goToChatRoom={gotoChatRoom} />;
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: SIZE_HEIGHT * 0.1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  headerFront: {},
  headerCenter: {
    display: 'flex',
  },
  headerBack: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    color: FONT_COLOR_BLACK,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  iconStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  adsContainer: {
    height: SIZE_HEIGHT * 0.11,

    backgroundColor: '#C4C4C4',
  },
});
