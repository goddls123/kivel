import { offsetLimitPagination } from '@apollo/client/utilities';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, BackHandler, FlatList, ListRenderItem } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { stackInterface } from '../../types/navigationParam';
import { getKoreanDay } from '../calendar/service/calendarService';
import {GLOBAL_MARGIN_HORIZON, SIZE_HEIGHT, SIZE_WIDTH} from '../common/constants';
import { getDateYMD } from '../common/service/dateService';
import { record_data } from '../test/testData';
import { RecordCard } from './components/RecordCard';
import Modal from 'react-native-modal'
import { RecordDetailModal } from './components/RecordDetailModal';
import { useLazyQuery } from '@apollo/client';
import { GET_CHALLENGING_CARD, GET_DEVELOPMENT_CARD, GET_MEMO_CARD, } from '../../connection/queries';
import { recordCardType } from '../../types/types';
import { Divider } from '../common/divider';
interface recordProps {
	navigation: StackNavigationProp<stackInterface>;
}

export function record(props: recordProps) {

    const [getDevelopmentCard ,{loading : developCardLoading, data : developCardData, error : developCardError, refetch : developCardRetch}] = useLazyQuery(GET_DEVELOPMENT_CARD)
	const [getChallengingCard ,{loading : challengingCardLoading, data : challengingCardData, error : challengingCardError, refetch : challengingCardRefetch}] = useLazyQuery(GET_CHALLENGING_CARD)
    const [getMemoCard ,{loading : memoCardLoading, data : memoCardData, error : memoCardError, refetch : memoCardRefetch}] = useLazyQuery(GET_MEMO_CARD)
    

    const [card,setcard] = React.useState<recordCardType[]>([])
    const [sortingState, setSortingState] = React.useState({ '전체' : true, '발달지연' : false, '문제행동' : false, '메모' : false })
	React.useEffect(() => {
		getDevelopmentCard(),getChallengingCard(),getMemoCard()
	},[])
    React.useEffect(() => {
		async function setCardData() {
			let card : recordCardType[] = []
			if((sortingState.전체 && !developCardLoading && developCardData) || (sortingState.발달지연 && !developCardLoading && developCardData)){
				let data : recordCardType[]= []
				await developCardData.userDevelopmentRecords.developmentRecords.map((e : any) => {
					data.push({...e,tableName : '발달기록'})
				})
				card = [...card, ...data]
			} 
			if((sortingState.전체 && !challengingCardLoading && challengingCardData) || (sortingState.문제행동 && !challengingCardLoading && challengingCardData)){
				let data : recordCardType[] = []
				await challengingCardData.userChallengingBehaviors.challengingBehaviors.map((e : any) => {
					data.push({...e,tableName : '문제행동'})
				})
				card = [...card, ...data]
			}
			if((sortingState.전체 && !memoCardLoading && memoCardData) || (sortingState.메모 && !memoCardLoading && memoCardData)){
				let data : recordCardType[] = []
				await memoCardData.userMemos.memos.map((e : any) => {
					data.push({...e,tableName : '메모'})
				})
				card = [...card, ...data]
			}
			return card.sort(function(a,b) {
				if(a.occurenceDate > b.occurenceDate) return -1
				else if(a.occurenceDate < b.occurenceDate) return 1;
				else return 0
			})
		}
		setCardData().then((card) => setcard(card))
    },[developCardData,memoCardData,challengingCardData,sortingState])
	
    const [modalVisible, setModalVisible] = React.useState<boolean>(false)
    const [modalItem, setModalItem] = React.useState()

	let dateBuffer : string;

    function recordCardPressHandler(data : any){
        setModalVisible(true)
        setModalItem(data)
    }

	console.log(developCardData, challengingCardData, memoCardData)

    
	const renderItem : ListRenderItem<recordCardType>= ({item} : {item : recordCardType}) => {
		let viewArr : any = []
		let key = 0;

		if(dateBuffer != item.occurenceDate.substr(0,10)){
			viewArr.push(
				<View key={key} style={{marginTop : GLOBAL_MARGIN_HORIZON * 1.5}}>
					<Text style={{fontSize : 16, color  : '#707070'}}>
						{item.occurenceDate.substr(0,10) + '(' + getKoreanDay(new Date(item.occurenceDate.substr(0,10)).getDay()) +')'}
					</Text>
				</View>
			)
			key++
		}
		viewArr.push(
			<TouchableOpacity key={key} onPress={() => recordCardPressHandler(item)}>
			<RecordCard
			data={{...item}}
			></RecordCard>
			</TouchableOpacity>
		)
		key++;
		dateBuffer = item.occurenceDate.substr(0,10)
		
		return viewArr
	}
	
    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginHorizontal: GLOBAL_MARGIN_HORIZON}}>

				{/* 버튼 */}
                <View style={styles.sortingButtonContainer}>
					<TouchableOpacity onPress={() => {
                        setSortingState({ '전체' : true, '발달지연' : false, '문제행동' : false, '메모' : false })
                    }}>
                        <Text style={[styles.sortingButtonText, sortingState.전체 ? { backgroundColor :  'black', color : 'white'} : null ]}>전체</Text>
                    </TouchableOpacity>
					
                    <TouchableOpacity onPress={() => {
                        setSortingState({...sortingState, '전체' : false , '발달지연' : !sortingState.발달지연}),
                        getDevelopmentCard()
                    }}>
                        <Text style={[styles.sortingButtonText, sortingState.발달지연 ? { backgroundColor :  'black', color : 'white'} : null ]}>발달지연</Text>
                    </TouchableOpacity>
					<TouchableOpacity onPress={() => {
                        setSortingState({...sortingState, '전체' : false , '문제행동' : !sortingState.문제행동}),
                        getChallengingCard()
						
                    }}>
                        <Text style={[styles.sortingButtonText, sortingState.문제행동 ? { backgroundColor :  'black', color : 'white'} : null ]}>문제행동</Text>
                    </TouchableOpacity>
					<TouchableOpacity onPress={() => {
                        setSortingState({...sortingState, '전체' : false , '메모' : !sortingState.메모}),
                        getMemoCard()
                    }}>
                        <Text style={[styles.sortingButtonText, sortingState.메모 ? { backgroundColor :  'black', color : 'white'} : null ]}>메모</Text>
                    </TouchableOpacity>
                </View>

				{/* <ScrollView showsVerticalScrollIndicator={false}>
				{
                    renderRecordData()
                }
				</ScrollView> */}
				<FlatList
				data={card}
				renderItem={renderItem}
				keyExtractor={(item : any, index : number) => index.toString()}
				></FlatList>
				

				

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
