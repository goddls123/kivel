import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GREY_BACKGOUND_COLOR} from '../../common/constants';

export default function ChatBottomMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        <View style={styles.menu}>
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../../../assets/icons/ic_album.png')}
            />
            <Text style={styles.menuText}>앨범</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../../../assets/icons/ic_camera.png')}
            />
            <Text style={styles.menuText}>카메라</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../../../assets/icons/ic_schedule.png')}
            />
            <Text style={styles.menuText}>일정조율</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../../../assets/icons/ic_call.png')}
            />
            <Text style={styles.menuText}>통화하기</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.lineContainer}>
        <View style={styles.menu}>
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../../../assets/icons/ic_file.png')}
            />
            <Text style={styles.menuText}>파일</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../../../assets/icons/ic_voice.png')}
            />
            <Text style={styles.menuText}>음성메시지</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../../../assets/icons/ic_project.png')}
            />
            <Text style={styles.menuText}>과제</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={require('../../../assets/icons/ic_calendar.png')}
            />
            <Text style={styles.menuText}>캘린더</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GREY_BACKGOUND_COLOR,
  },
  lineContainer: {
    flexDirection: 'row',
  },
  menu: {},
  menuIcon: {},
  menuText: {},
});
