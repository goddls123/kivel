import { offsetLimitPagination } from '@apollo/client/utilities';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { stackInterface } from '../../types/navigationParam';
import { getKoreanDay } from '../calendar/service/calendarService';
import {GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH} from '../common/constants';
import { getDateYMD } from '../common/service/dateService';
import { record_data } from '../test/testData';
import { RecordCard } from './components/RecordCard';
import Modal from 'react-native-modal'
import { RecordDetailModal } from './components/RecordDetailModal';
interface recordProps {
	navigation: StackNavigationProp<stackInterface>;
}

export function record(props: recordProps) {

	const [sortingState, setSortingState] = React.useState({ '전체' : true, '발달지연' : false, '문제행동' : false, '메모' : false })
    const [modalVisible, setModalVisible] = React.useState<boolean>(false)
    const [modalItem, setModalItem] = React.useState()
    
    function recordCardPressHandler(data : any){
        setModalVisible(true)
        setModalItem(data)
    }
    function renderRecordData() {
        let dateFlag : any;
        let viewArr : Element[] = []
        let key = 0
        record_data.map((item) => {
            if(dateFlag != item.date){
                let currentDate = new Date(item.date)
                viewArr.push(
                    <View key={key} style={{marginTop : GLOBAL_MARGIN_HORIZON * 1.5}}>
                        <Text style={{fontSize : 16, color  : '#707070'}}>
                            {getDateYMD(currentDate,'.') + '(' + getKoreanDay(currentDate.getDay()) +')'}
                        </Text>
                    </View>
                )
                key ++
            }

            viewArr.push(
                <TouchableOpacity onPress={() => recordCardPressHandler(item)}
                key={key}>
                <RecordCard
                data={item}
                ></RecordCard>
                </TouchableOpacity>
            )
            key++
            dateFlag= item.date
        })

        return viewArr
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginHorizontal: GLOBAL_MARGIN_HORIZON}}>

				{/* 버튼 */}
                <View style={styles.sortingButtonContainer}>
					<TouchableOpacity onPress={() => setSortingState({ '전체' : true, '발달지연' : false, '문제행동' : false, '메모' : false })}>
                        <Text style={[styles.sortingButtonText, sortingState.전체 ? { backgroundColor :  'black', color : 'white'} : null ]}>전체</Text>
                    </TouchableOpacity>
					<TouchableOpacity onPress={() => setSortingState({...sortingState, '전체' : false , '발달지연' : !sortingState.발달지연})}>
                        <Text style={[styles.sortingButtonText, sortingState.발달지연 ? { backgroundColor :  'black', color : 'white'} : null ]}>발달지연</Text>
                    </TouchableOpacity>
					<TouchableOpacity onPress={() => setSortingState({...sortingState, '전체' : false , '문제행동' : !sortingState.문제행동})}>
                        <Text style={[styles.sortingButtonText, sortingState.문제행동 ? { backgroundColor :  'black', color : 'white'} : null ]}>문제행동</Text>
                    </TouchableOpacity>
					<TouchableOpacity onPress={() => setSortingState({...sortingState, '전체' : false , '메모' : !sortingState.메모})}>
                        <Text style={[styles.sortingButtonText, sortingState.메모 ? { backgroundColor :  'black', color : 'white'} : null ]}>메모</Text>
                    </TouchableOpacity>
                </View>

				<ScrollView showsVerticalScrollIndicator={false}>
				{
                    renderRecordData()
                }
				</ScrollView>
				
				

				

            </View>
			
			<View  style={{position : 'absolute', elevation : 2, bottom : 20, left : SIZE_WIDTH * 0.375 , width : SIZE_WIDTH * 0.25, borderRadius : 25, borderWidth :1, borderColor : 'black', backgroundColor : 'white', padding : 10}}>
				<TouchableOpacity style={{ flexDirection : 'row'}} onPress={() => props.navigation.navigate('AddRecord')}>
					<Image style={{height : 24, width : 24, }} source={require('../../assets/icons/ic_write_24.png')}></Image>
					<Text style={{fontSize : 20,}}> 작성 </Text>
				</TouchableOpacity>
			</View>
			
            <Modal isVisible={modalVisible} style={{margin : 0, justifyContent : 'flex-end'}}
            onBackdropPress={() => setModalVisible(false)}>
                <RecordDetailModal
                setModalVisible={setModalVisible}
                data={modalItem} />
            </Modal>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white'},
    sortingButtonContainer: {flexDirection: 'row', justifyContent : 'space-around', paddingVertical : GLOBAL_MARGIN_HORIZON},
    sortingButtonText: {
        fontSize: 16,
        color: '#d5d5d5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#d5d5d5',
    },
});
