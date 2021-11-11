import {Dimensions} from 'react-native';

export const SIZE_WIDTH = Dimensions.get('window').width;
export const SIZE_HEIGHT = Dimensions.get('window').height;
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

export const CALENDAR_THEME = {
  monthTextColor : 'black',
  textMonthFontSize: 22,
  textMonthFontFamily: 'Cafe24Ssurround',
  textMonthFontWeight: '500',
  textDayFontWeight : '500',
  'stylesheet.day.basic': {
      'base': {
      width: 32,
      height: 40,
      alignItems : 'center',
      justifyContent : 'space-between',
      },
      'text' : {
          color : 'black',
          fontSize : 15,
          width : 30,
          height: 30,
          textAlign: 'center',
          textAlignVertical : 'center'
      },
      'selectedText' : {
          borderColor : 'rgb(255, 138, 92)',
          borderWidth : 1,
          borderRadius : 5,
          color : 'black'
      },
      'todayText': {
          backgroundColor: 'rgb(255, 138, 92)',
          color : 'white',
          borderRadius: 100,
      },

      
  },
  'stylesheet.calendar.header': {
      dayHeader: {
          marginTop: 20,
          marginBottom: 10,
          width: 32,
          textAlign: 'center',
      },
      dayTextAtIndex0: {
          color: 'red',
          fontFamily : 'Cafe24Ssurround',
      },
      dayTextAtIndex1: {
          color: 'black',
          fontFamily : 'Cafe24Ssurround'
      },
      dayTextAtIndex2: {
          color: 'black',
          fontFamily : 'Cafe24Ssurround'
      },
      dayTextAtIndex3: {
          color: 'black',
          fontFamily : 'Cafe24Ssurround'
      },
      dayTextAtIndex4: {
          color: 'black',
          fontFamily : 'Cafe24Ssurround'
      },
      dayTextAtIndex5: {
          color: 'black',
          fontFamily : 'Cafe24Ssurround'
      },
      dayTextAtIndex6: {
          color: 'blue',
          fontFamily : 'Cafe24Ssurround'
      },
  },
}