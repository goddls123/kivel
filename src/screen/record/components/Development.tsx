import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, Switch, TextInput, ScrollView } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { GLOBAL_MARGIN_HORIZON, MAIN_COLOR, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from '../../common/divider';
import Modal from 'react-native-modal'
import { DateTimeScroller } from '../components/DateTimeScroller';
import { getDateYMD, getDayKorean, getTime } from '../../common/service/dateService';
import { stackInterface } from '../../../types/navigationParam';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../../common/components/Button';
import { imagePickMultiple } from '../../common/service/cameraServices';
import { ReactNativeFile } from 'extract-files';


interface DevelopmentProps {
}

export function Development(props: DevelopmentProps) {
	const navigation = useNavigation()
	
	const [modalVisible, setModalVisible] = React.useState(false)
	const [isEmergency, setIsEmergency] = React.useState(false)
	const [occurenceDate, setOccurenceDate] = React.useState(new Date())
	const [problemArea, setProblemArea] = React.useState<string>()
	const [images, setImage] = React.useState<ReactNativeFile[]>()
	function renderDateButton() {
		return (
			<View style={styles.dateButtonInnerContainer}>
				<TouchableOpacity onPress = {() => setModalVisible(true)}>
					<View style={styles.dateTextBox}>
						<Text style={styles.dateText}>{getDateYMD(occurenceDate,'. ') + '(' + getDayKorean(occurenceDate.getDay()) + ')'}</Text>
						<Icon style={styles.chevronDownIcon} name="chevron-down"></Icon>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress = {() => setModalVisible(true)}>
					<View style={styles.dateTextBox}>
						<Text style={styles.dateText}>{getTime(occurenceDate, ' : ')}</Text>
						<Icon style={styles.chevronDownIcon} name="chevron-down"></Icon>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	function renderProblemButton() {
		let problemArr = [
			{ title : '대근육', img : require('../../../assets/icons/ic_balance_32.png') },
			{ title : '소근육', img : require('../../../assets/icons/ic_hand_32.png') },
			{ title : '언어', img : require('../../../assets/icons/ic_speech_32.png') },
			{ title : '사회성', img : require('../../../assets/icons/ic_social_32.png') },
			{ title : '인지', img : require('../../../assets/icons/ic_observe_32.png') },
			{ title : '기타', img : require('../../../assets/icons/ic_etc_32.png') }
		]

		let viewArr : any= []

		problemArr.map((item, id) => {
			viewArr.push(
				<View key={id} style={{alignItems : 'center'}}>
					<TouchableOpacity onPress={() => setProblemArea(item.title)}>
						<View style={[styles.problemButtonBox,{backgroundColor : problemArea == item.title ? MAIN_COLOR : '#d5d5d5',}]}>
							<Image style={styles.problemButtonImage} source={item.img}></Image>
						</View>
					</TouchableOpacity>
					<Text style={styles.problemText}>{item.title}</Text>
				</View>
			)
		})

		return (						
			<View style={styles.problemButtonContainer}>
				{viewArr}
			</View>
		)
	}

    return (
        <View style={{paddingBottom : SIZE_HEIGHT * 0.1}}>


            {/* dateButtonContainer */}
            <View style={styles.dateButtonContainer}>
                <Text style={styles.boldText}> 발생일시 </Text>
                {renderDateButton()}
                <View style={styles.dateButtonBottomContainer}>
                    <View style={styles.rowAlignCenter}>
                        <Text style={styles.emergencyText}>긴급사항인가요?</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <Icon style={styles.helpIcon} name="help-circle-outline" />
                        </TouchableOpacity>
                    </View>
                    <Switch
                        style={{alignSelf: 'flex-end'}}
                        trackColor={{false: '#767577', true: '#ffebee'}}
                        thumbColor={isEmergency ? MAIN_COLOR : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsEmergency(!isEmergency)}
                        value={isEmergency}
                    />
                </View>
            </View>
            <Divider height={4} color={'#ededed'}></Divider>

            {/* titleInputContainer */}
            <View style={styles.containerNoHeight}>
                <Text style={styles.boldText}> 어떤 문제가 있었나요? </Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: '#d5d5d5',
                        marginTop: 10,
                        borderRadius: 10,
                        paddingLeft: 10,
                        marginBottom: 15,
                    }}
                    placeholder="문제를 입력해주세요"
                    placeholderTextColor="#d5d5d5"></TextInput>
                <Text style={{color: 'black', fontSize: 16}}>+ 이전 문제에서 추가</Text>
            </View>
            <Divider height={4} color={'#ededed'}></Divider>

            {/* problemAreaButton */}
            <View style={styles.containerNoHeight}>
                <Text style={styles.boldText}>어떤 영역의 문제인가요? </Text>
                {renderProblemButton()}
                <Text style={styles.boldText}>어떤 선생님한테 공유할까요? </Text>
            </View>
            <Divider height={4} color={'#ededed'}></Divider>

            <View style={styles.containerNoHeight}>
                <Text style={styles.boldText}>좀 더 자세히 알려주세요! </Text>
                <TextInput
				style={{ maxHeight : SIZE_WIDTH * 0.5 ,borderRadius : 10, borderWidth : 1, borderColor : '#d5d5d5', padding : 15, marginTop : 10, marginBottom : 20 }}
				placeholder='ex) 키블이가 자꾸 걷다가 넘어져요'
				placeholderTextColor='#d5d5d5'
				textAlignVertical='top'
				multiline
				></TextInput>

				<Text style={styles.boldText}>사진을 첨부해주세요</Text>
				<View style={{ borderRadius : 8, borderColor : '#d5d5d5', borderWidth : 1, padding : 10, marginTop : 10, backgroundColor : '#d5d5d5'}}>
					<TouchableOpacity 
						style={{flexDirection :'row', justifyContent : 'space-between'}} 
						onPress={() => setImage(imagePickMultiple())}>
							<Text style={{fontSize : 16}}>사진 업로드</Text>
							<Icon style={{fontSize : 20}} name="add-outline"></Icon>
					</TouchableOpacity>
				</View>
                {
					console.log(images)
				}
            </View>
            <Divider height={4} color={'#ededed'}></Divider>

            {/* 출생일 dateScroller */}
            <Modal isVisible={modalVisible}>
                <DateTimeScroller
				setDate={setOccurenceDate}
				date={occurenceDate}
				setModalVisible={setModalVisible} />
            </Modal>
			{/* <Button text={'작성완료'} textColor={'black'} style={{backgroundColor : MAIN_COLOR }}onPress={() => navigation.goBack()}></Button> */}
        </View>
    );
}
const styles = StyleSheet.create({
	boldText : {fontSize : 18, color : 'black'},
	dateButtonContainer : { height : SIZE_WIDTH * 0.4, padding : GLOBAL_MARGIN_HORIZON , justifyContent : 'space-between'},
	dateButtonInnerContainer : {flexDirection: 'row', justifyContent : 'space-between'},
	dateTextBox : {flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', width : SIZE_WIDTH * 0.43 , padding : 10, borderWidth: 1, borderColor: '#d5d5d5', borderRadius: 8, },
	dateText : {fontSize : 16, color : 'black'},	
	chevronDownIcon : {fontSize : 20, color : '#aaaaaa'},	
	emergencyText : {color : MAIN_COLOR , fontSize : 16},
	dateButtonBottomContainer : {flexDirection : 'row', justifyContent : 'space-between'},
	rowAlignCenter : {flexDirection : 'row', alignItems : 'center'},
	helpIcon : {marginLeft :10, fontSize: 20},
	containerNoHeight : { padding : GLOBAL_MARGIN_HORIZON , justifyContent : 'space-between'},
	problemButtonBox : {height : SIZE_WIDTH * 0.13, width : SIZE_WIDTH * 0.13, borderRadius : 8, alignItems : 'center', justifyContent : 'center'},
	problemButtonImage : {height : SIZE_WIDTH * 0.1, width : SIZE_WIDTH * 0.1},
	problemText : {marginTop : 10, fontSize : 14, color : 'black'},
	problemButtonContainer : {flexDirection : 'row', justifyContent : 'space-between', marginTop : 10, marginBottom : 20,},
});
