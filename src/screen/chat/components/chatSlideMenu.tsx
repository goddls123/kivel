import React from 'react';
import Modal from 'react-native-modal';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  FONT_COLOR_BLACK,
  FONT_GREY,
  GREY_BACKGOUND_COLOR,
  GREY_BORDER_COLOR,
  SAFE_AREA_HEIGHT,
  SIZE_HEIGHT,
  SIZE_WIDTH,
  WHITE,
} from '../../common/constants';

interface chatSlideMenuProps {
  myProfile;
  // otherProfile;
  toggleVisible(): any;
  isVisible: boolean;
}

export default function ChatSlideMenu(props: chatSlideMenuProps) {
  const getSafeHeight = () => {
    return Platform.OS === 'ios' ? SAFE_AREA_HEIGHT() : SIZE_HEIGHT;
  };
  return (
    <View>
      <Modal
        style={[styles.modal]}
        isVisible={props.isVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        onBackdropPress={() => props.toggleVisible()}>
        <View style={[styles.containeer]}>
          <View style={styles.header}>
            <Text style={styles.headerText}>채팅방 보관함</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.menuList}>
              <TouchableOpacity style={styles.menu}>
                <View style={styles.contents}>
                  <Image
                    style={styles.icon}
                    source={require('../../../assets/icons/ic_gallery_16.png')}
                  />
                  <Text style={styles.title}>사진, 동영상</Text>
                </View>
                <Image
                  style={styles.arrow}
                  source={require('../../../assets/icons/ic_arrow_gray_16.png')}
                />
              </TouchableOpacity>
              <View style={styles.imageList}></View>
              <TouchableOpacity style={styles.menu}>
                <View style={styles.contents}>
                  <Image
                    style={styles.icon}
                    source={require('../../../assets/icons/ic_link_16.png')}
                  />
                  <Text style={styles.title}>링크</Text>
                </View>
                <Image
                  style={styles.arrow}
                  source={require('../../../assets/icons/ic_arrow_gray_16.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.chaterList}>
              <View style={styles.subHeader}>
                <Text style={styles.headerText}>채팅방 보관함</Text>
              </View>
              <View style={styles.user}>
                <Image
                  style={styles.profile}
                  source={require('../../../assets/icons/ic_profile_32.png')}
                  resizeMode="contain"
                />
                <Text style={styles.name}>김키블</Text>
                <Text style={styles.role}>나</Text>
              </View>
              <View style={styles.user}>
                <Image
                  style={styles.profile}
                  source={require('../../../assets/icons/ic_profile_32.png')}
                  resizeMode="contain"
                />
                <Text style={styles.name}></Text>
                <Text style={styles.role}></Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/ic_out_gray_24.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/icons/ic_notification_gray_24.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    paddingBottom: 0,
    // marginTop: 0,
    backgroundColor: 'blue',
    marginLeft: SIZE_WIDTH * 0.183,
  },
  containeer: {
    display: 'flex',
    backgroundColor: WHITE,
    borderTopLeftRadius: 30,
    width: SIZE_WIDTH * 0.817,
    flex: 1,
    height: SIZE_HEIGHT,
  },
  header: {
    paddingTop: 48,
    marginBottom: SIZE_HEIGHT * 0.048,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: FONT_COLOR_BLACK,
    paddingHorizontal: SIZE_WIDTH * 0.05,
  },
  imageList: {
    marginBottom: SIZE_HEIGHT * 0.036,
  },
  subHeader: {
    marginBottom: SIZE_HEIGHT * 0.033,
  },
  body: {},
  menuList: {
    paddingBottom: SIZE_HEIGHT * 0.058,
    borderBottomWidth: 1,
    borderBottomColor: GREY_BORDER_COLOR,
  },
  chaterList: {
    paddingTop: SIZE_HEIGHT * 0.058,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZE_WIDTH * 0.05,
    marginBottom: SIZE_HEIGHT * 0.012,
  },
  contents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {marginRight: 4},
  title: {fontSize: 14, color: FONT_COLOR_BLACK, fontWeight: '500'},
  arrow: {},
  user: {
    paddingHorizontal: SIZE_WIDTH * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: SIZE_HEIGHT * 0.023,
  },
  name: {
    fontSize: 12,
    color: FONT_COLOR_BLACK,
    fontWeight: '600',
    marginRight: 6,
  },
  profile: {width: 48, height: 48, marginRight: 8},
  role: {fontSize: 12, letterSpacing: 14, color: FONT_GREY, fontWeight: '500'},
  footer: {
    width: SIZE_WIDTH * 0.817,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 26,
    backgroundColor: GREY_BACKGOUND_COLOR,
  },
});
