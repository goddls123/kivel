import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {diary} from '../../../types/DiaryTypes';
import { stackInterface } from '../../../types/navigationParam';
import {SIZE_HEIGHT, SIZE_WIDTH} from '../../common/constants';
import { getDateYMD } from '../../common/service/dateService';



interface DiaryListViewProps {
  item: diary;
  navigation : StackNavigationProp<stackInterface>;  
}
export function DiaryListView(props : DiaryListViewProps) {
  
	return (  
    <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Diary',props.item)}>
      <View style={styles.innerContainer}>
        <View>
          <View>
            <Text style={styles.titleStyle}>{props.item.title}</Text>
          </View>
          <View>
            <Text style={styles.dateStyle}>
              {getDateYMD(props.item.date)}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          {props.item.tag?.map((tag: string, id: number) => {
            return (
              <TouchableOpacity key={id} style={styles.button}>
                <Text style={{fontSize: 15}}> # {tag} </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: SIZE_HEIGHT * 0.1,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 2,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZE_WIDTH * 0.9,
  },
  titleStyle: {fontSize: 25, fontWeight: 'bold'},
  dateStyle: {fontSize: 15, fontWeight: 'bold'},
  button: {
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
