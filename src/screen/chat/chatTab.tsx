import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Text, FlatList, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {stackInterface} from '../../types/navigationParam';
import {SIZE_HEIGHT} from '../common/constants';
import {ChatListView} from './components/ChatListView';

interface chatTabProps {
  navigation: StackNavigationProp<stackInterface>;
}
const data = [1, 2, 3, 4, 5, 6, 7, 8, 0]; // 맨앞에 빈 값 추가

export function chatTab(props: chatTabProps) {
  const gotoChatRoom = () => {
    props.navigation.navigate('ChatRoom');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerFront}></View>
        <View style={styles.headerCenter}></View>
        <View style={styles.headerBack}>
          <Icon style={styles.iconStyle} name="search-outline" />
          <Icon style={styles.iconStyle} name="person-add-outline" />
        </View>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            console.log(item);
            if (!index) {
              return <View style={styles.adsContainer}></View>;
            } else {
              return <ChatListView goToChatRoom={gotoChatRoom} />;
            }
          }}></FlatList>
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
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  headerFront: {},
  headerCenter: {},
  headerBack: {},
  iconStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 15,
  },
  adsContainer: {
    height: SIZE_HEIGHT * 0.13,
    backgroundColor: '#C4C4C4',
  },
});
