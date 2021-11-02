import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  //   TextInput,
  Platform,
  BackHandler,
  //   BackHandler,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  GLOBAL_MARGIN_HORIZON,
  GLOBAL_MARGIN_VERTICAL,
  MAIN_COLOR,
  SIZE_HEIGHT,
  SIZE_WIDTH,
} from '../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigationProp} from '@react-navigation/stack';
import {stackInterface} from '../../types/navigationParam';
import {Divider} from '../common/divider';
import {TextInputView} from './components/TextInputView';
import {TextView} from './components/TextView';
import {Button} from '../common/components/Button';
import Modal from 'react-native-modal';
import {DateScroller} from './components/DateScroller';
import {DiagSelector} from './components/DiagSelector';
// import {essentialChildInfo} from '../../types/childInfoTypes';

interface enterChildInfoProps {
  navigation: StackNavigationProp<stackInterface, 'SocialLogin'>;
}

export function EnterChildInfo(props: enterChildInfoProps) {
  // todoList check right info //
  //sv

  const [name, setName] = React.useState<string>('');
  const [birthDate, setBirthDate] = React.useState<Date>();
  const [sex, setSex] = React.useState<'M' | 'W'>();
  const [diagnosis, setDiagnosis] = React.useState<string>();
  const [directInputDiag, setDirectInputDiag] = React.useState<string>();
  const [birthWeekNum, setBirthWeekNum] = React.useState<number>(0);
  const [birthDayNum, setBirthDayNum] = React.useState<number>(0);
  const [height, setHeight] = React.useState<number>(0);
  const [weight, setWeight] = React.useState<number>(0);

  //modal visible
  const [dateModalVisible, setdateModalVisible] =
    React.useState<boolean>(false);
  const [diagModalVisible, setDiagModalVisible] =
    React.useState<boolean>(false);

  const rightName = new RegExp(/^[가-힣a-zA-Z]{2,10}$/);

  const rightHeight = (vHeight: number) => {
    return vHeight && vHeight > 30 && vHeight < 200 ? true : false;
  };

  const rightWeight = (vWeight: Number) => {
    return vWeight && vWeight > 0 && vWeight < 100 ? true : false;
  };

  const rightbirthWeekNum = (vbirthWeekNum: Number) => {
    return vbirthWeekNum && vbirthWeekNum > 1 ? true : false;
  };
  const rightbirthDayNum = (vbirthDayNum: Number) => {
    return vbirthDayNum && vbirthDayNum >= 0 && vbirthDayNum < 7 ? true : false;
  };

  // 필수항목 체크
  const essentialOptionCheck = (): boolean => {
    if (
      rightName.test(name) &&
      birthDate &&
      sex &&
      rightWeight(weight) &&
      rightbirthWeekNum(birthWeekNum) &&
      rightbirthDayNum(birthDayNum) &&
      rightHeight(height)
    ) {
      if (diagnosis === '직접입력') {
        if (directInputDiag) {
          return true;
        }
      } else if (diagnosis !== undefined) {
        return true;
      } else {
        return false;
      }
    }

    return false;
  };

  BackHandler.addEventListener("hardwareBackPress" , () => {
    props.navigation.reset({routes: [{name: 'Home'}]})
    return true
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {Platform.OS === 'android' ? (
          <Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
        ) : null}
        <TouchableOpacity
          onPress={() => props.navigation.reset({routes: [{name: 'Home'}]})}>
          <Icon name="arrow-back" style={{fontSize: 30}}></Icon>
        </TouchableOpacity>

        <View
          style={{
            marginTop: SIZE_HEIGHT * 0.03,
            marginBottom: SIZE_HEIGHT * 0.1,
          }}>
          <Text style={styles.headerTextStyle}>우리아이등록</Text>
        </View>

        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <TextView text="이름" />
          <TextInputView
            placeholder={'우리 아이 이름을 한글로 입력해주세요. ex) 김키블'}
            style={{marginBottom: SIZE_HEIGHT * 0.06}}
            onChangeText={setName}></TextInputView>

          <TextView text="출생일" />
          <TextInputView
            placeholder={'출생일을 선택해주세요'}
            style={{marginBottom: SIZE_HEIGHT * 0.06}}
            icon="calendar"
            editable={false}
            iconOnPress={setdateModalVisible}
            value={birthDate}></TextInputView>

          {/* 성별 */}
          <View style={{marginBottom: SIZE_HEIGHT * 0.06}}>
            <View
              style={{flexDirection: 'row', marginBottom: SIZE_HEIGHT * 0.02}}>
              <Text style={styles.text}>성별 </Text>
              <Text style={{color: MAIN_COLOR}}>*</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={[
                  styles.buttonSex,
                  {borderColor: sex == 'M' ? MAIN_COLOR : '#ededed'},
                ]}
                onPress={() => setSex('M')}>
                <Text style={{color: sex == 'M' ? MAIN_COLOR : '#aaaaaa'}}>
                  남
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.buttonSex,
                  {borderColor: sex == 'W' ? MAIN_COLOR : '#ededed'},
                ]}
                onPress={() => setSex('W')}>
                <Text style={{color: sex == 'W' ? MAIN_COLOR : '#aaaaaa'}}>
                  여
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TextView text="진단명" />
          <TextInputView
            placeholder={'진단명을 선택해 주세요'}
            style={{marginBottom: SIZE_HEIGHT * 0.06}}
            icon="chevron-down"
            iconOnPress={setDiagModalVisible}
            editable={false}
            value={diagnosis}></TextInputView>
          {diagnosis === '직접입력' ? (
            <TextInputView
              placeholder={'진단명을 입력해 주세요'}
              style={{
                marginBottom: SIZE_HEIGHT * 0.06,
                marginTop: -SIZE_HEIGHT * 0.05,
              }}
              value={directInputDiag}
              onChangeText={setDirectInputDiag}></TextInputView>
          ) : null}
          {/* 출생시 주수 */}
          <TextView text="출생시 주수" />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInputView
              placeholder={'ex) 23'}
              style={{
                marginBottom: SIZE_HEIGHT * 0.06,
                width: SIZE_WIDTH * 0.4,
              }}
              unitText="주"
              keyboardType="numeric"
              onChangeText={setBirthWeekNum}></TextInputView>
            <TextInputView
              placeholder={'ex) 6'}
              style={{
                marginBottom: SIZE_HEIGHT * 0.06,
                width: SIZE_WIDTH * 0.4,
              }}
              unitText="일"
              keyboardType="numeric"
              onChangeText={setBirthDayNum}></TextInputView>
          </View>

          <TextView text="키" />
          <TextInputView
            placeholder={'키를 입력해주세요'}
            style={{marginBottom: SIZE_HEIGHT * 0.06}}
            unitText="cm"
            keyboardType="numeric"
            onChangeText={setHeight}></TextInputView>

          <TextView text="몸무게" />
          <TextInputView
            placeholder={'몸무게를 입력해주세요'}
            style={{marginBottom: SIZE_HEIGHT * 0.1}}
            unitText="kg"
            keyboardType="numeric"
            onChangeText={setWeight}></TextInputView>

          <Button
            text={'다음으로'}
            textColor={!essentialOptionCheck() ? '#707070' : '#FFFFFF'}
            style={{
              backgroundColor: essentialOptionCheck() ? MAIN_COLOR : '#ededed',
            }}
            onPress={() =>  props.navigation.navigate('NurseryCaution',{ 
                                name, 
                                birthDate, 
                                sex, 
                                diagnosis : diagnosis? diagnosis : directInputDiag, 
                                birthWeekNum, 
                                birthDayNum, 
                                height, 
                                weight })}
            disable={!essentialOptionCheck()}
          />
        </ScrollView>

        {/* 출생일 dateScroller */}
        <Modal isVisible={dateModalVisible}>
          <DateScroller
            setDate={setBirthDate}
            date={birthDate}
            setModalVisible={setdateModalVisible}></DateScroller>
        </Modal>

        <Modal
          isVisible={diagModalVisible}
          onBackdropPress={() => setDiagModalVisible(false)}
          style={{margin: 0}}>
          <DiagSelector
            setModalVisible={setDiagModalVisible}
            setDiagnosis={setDiagnosis}></DiagSelector>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: GLOBAL_MARGIN_HORIZON,
  },
  headerTextContainer: {
    marginTop: SIZE_HEIGHT * 0.03,
    marginBottom: SIZE_HEIGHT * 0.05,
  },
  headerTextStyle: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 28,
    // fontWeight: 'bold',
    color: '#111111',
  },
  text: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 20,
    color: '#111111',
  },
  commonMargin: {
    marginBottom: SIZE_HEIGHT * 0.06,
  },
  sexTextContainer: {
    flexDirection: 'row',
    marginBottom: SIZE_HEIGHT * 0.02,
  },
  buttonSexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSex: {
    width: SIZE_WIDTH * 0.4,
    paddingVertical: SIZE_HEIGHT * 0.017,
    borderRadius: 20,
    // borderColor : '#ededed',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diagnosisTextInput: {
    marginBottom: SIZE_HEIGHT * 0.06,
    marginTop: -SIZE_HEIGHT * 0.05,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weekTextInput: {
    marginBottom: SIZE_HEIGHT * 0.06,
    width: SIZE_WIDTH * 0.4,
  },
  weightTextInput: {
    marginBottom: SIZE_HEIGHT * 0.1,
  },
  underlineTextContainer: {
    marginBottom: GLOBAL_MARGIN_VERTICAL,
  },
  underlineTextStyle: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#aaaaaa',
  },
});
