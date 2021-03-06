import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {getBottomSpace, isIphoneX} from 'react-native-iphone-x-helper';

export const SIZE_WIDTH = Dimensions.get('window').width;
export const SIZE_HEIGHT = Dimensions.get('window').height;
export const STATUS_BAR_HEIGHT = getStatusBarHeight(true);

export const GLOBAL_MARGIN_HORIZON = SIZE_WIDTH * 0.05;
export const GLOBAL_MARGIN_VERTICAL = SIZE_HEIGHT * 0.05;
export const ANDROID_KEYS = {
  kConsumerKey: 'QuWkmldDj4pP3aPAq59I',
  kConsumerSecret: '6RQek41Dcj',
  kServiceAppName: '키블',
};

export const MAIN_COLOR = '#ff8a5c';
export const FONT_COLOR_BLACK = '#111111';
export const PLACE_HOLDER_COLOR = '#d5d5d5';
export const GREY_BACKGOUND_COLOR = '#f6f6f6';
export const GREY_BORDER_COLOR = '#ededed';
export const CHAT_BACKGOUND_COLOR = '#ededed';
export const FONT_GREY = '#aaaaaa';
export const FONT_LIGHT_GREY = '#dadada';
export const FONT_DARK_GREY = '#707070';
export const WHITE = '#ffffff';

export const SAFE_AREA_HEIGHT = () => {
  if (isIphoneX()) {
    return SIZE_HEIGHT - STATUS_BAR_HEIGHT - getBottomSpace();
  } else {
    console.log('7');
    return SIZE_HEIGHT - STATUS_BAR_HEIGHT;
  }
};
