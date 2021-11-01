import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { GLOBAL_MARGIN_HORIZON, GLOBAL_MARGIN_VERTICAL, SIZE_HEIGHT, SIZE_WIDTH } from '../../common/constants';
import { Divider } from '../../common/divider';
import Icon from 'react-native-vector-icons/Ionicons'
import IconFA from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { stackInterface } from '../../../types/navigationParam';
import { RouteProp } from '@react-navigation/native';
import { Button } from '../../common/components/Button';
import { NoticeList } from './components/NoticeList';
import { noticeType } from '../../../types/types';

interface noticeProps {
	navigation: StackNavigationProp<stackInterface>;
    route: RouteProp<stackInterface>;
}

export function notice(props : noticeProps) {

    const [notices, setNotices] = React.useState<noticeType[]>([
		{
			title : '6월 21일(월) 게시판 오류에 따른 롤백 안내',
			nickName : 'KIVEL',
			date : new Date(),
			content : `안녕하세요. 키블입니다.

			6월 21일(월) 13:15분경 업데이트 오류로 서버가 롤백 되었습니다. 이에 일부 게시물의 수정, 삭제 등 변경사항이 반영되지 않았을 수 있습니다.
			
			서비스 이용에 참고 부탁드립니다.
			
			감사합니다.`	
		},
		{
			title : '6월 21일(월) 게시판 오류에 따른 롤백 안내',
			nickName : 'KIVEL',
			date : new Date(),
			content : `안녕하세요. 키블입니다.

			6월 21일(월) 13:15분경 업데이트 오류로 서버가 롤백 되었습니다. 이에 일부 게시물의 수정, 삭제 등 변경사항이 반영되지 않았을 수 있습니다.
			
			서비스 이용에 참고 부탁드립니다.
			
			감사합니다.`	
		},
		{
			title : '6월 21일(월) 게시판 오류에 따른 롤백 안내',
			nickName : 'KIVEL',
			date : new Date(),
			content : `안녕하세요. 키블입니다.

			6월 21일(월) 13:15분경 업데이트 오류로 서버가 롤백 되었습니다. 이에 일부 게시물의 수정, 삭제 등 변경사항이 반영되지 않았을 수 있습니다.
			
			서비스 이용에 참고 부탁드립니다.
			
			감사합니다.`	
		},
		{
			title : '6월 21일(월) 게시판 오류에 따른 롤백 안내',
			nickName : 'KIVEL',
			date : new Date(),
			content : `안녕하세요. 키블입니다.

			6월 21일(월) 13:15분경 업데이트 오류로 서버가 롤백 되었습니다. 이에 일부 게시물의 수정, 삭제 등 변경사항이 반영되지 않았을 수 있습니다.
			
			서비스 이용에 참고 부탁드립니다.
			
			감사합니다.`	
		},
		{
			title : '6월 21일(월) 게시판 오류에 따른 롤백 안내',
			nickName : 'KIVEL',
			date : new Date(),
			content : `안녕하세요. 키블입니다.

			6월 21일(월) 13:15분경 업데이트 오류로 서버가 롤백 되었습니다. 이에 일부 게시물의 수정, 삭제 등 변경사항이 반영되지 않았을 수 있습니다.
			
			서비스 이용에 참고 부탁드립니다.
			
			감사합니다.`	
		},
		{
			title : '6월 21일(월) 게시판 오류에 따른 롤백 안내',
			nickName : 'KIVEL',
			date : new Date(),
			content : `안녕하세요. 키블입니다.

			6월 21일(월) 13:15분경 업데이트 오류로 서버가 롤백 되었습니다. 이에 일부 게시물의 수정, 삭제 등 변경사항이 반영되지 않았을 수 있습니다.
			
			서비스 이용에 참고 부탁드립니다.
			
			감사합니다.`	
		},
	])

    
		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.innerContainer}>
					<Divider height={GLOBAL_MARGIN_HORIZON} color="white" />
					<View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
					<TouchableOpacity
						onPress={() => props.navigation.goBack()}>
						<Icon name="arrow-back" style={{fontSize: 30, color : 'black'}}></Icon>
					</TouchableOpacity>

					</View>
					<View style={styles.headerTextContainer}>
						<Text style={styles.headerTextStyle}>공지사항</Text>
					</View>
				</View>
            
				<View style={{height : SIZE_WIDTH * 0.25, backgroundColor : '#ededed'}}></View>

				<ScrollView>
					{
						notices?.map((item,id) => {
							return(
								<TouchableOpacity 
								key={id}
								onPress={() => props.navigation.navigate('NoticeDetail',item)}>
									<NoticeList
									data={item}
									></NoticeList>
								</TouchableOpacity>
							)
						})
					}
				</ScrollView>
			</SafeAreaView>

		);
}
const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    innerContainer: {
        marginHorizontal: SIZE_WIDTH * 0.05,
    },
    headerTextContainer: {
        marginTop: SIZE_HEIGHT * 0.03,
        marginBottom: GLOBAL_MARGIN_VERTICAL,
    },
    headerTextStyle: {
        fontFamily: 'Pretendard',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111111',
    },
	
})