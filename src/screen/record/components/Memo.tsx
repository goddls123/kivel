import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker, {openCamera} from 'react-native-image-crop-picker';
import {ReactNativeFile} from 'apollo-upload-client';
import {gql, useMutation} from '@apollo/client';
import {Divider} from '../../common/divider';
import {
    GLOBAL_MARGIN_HORIZON,
    GLOBAL_MARGIN_VERTICAL,
    MAIN_COLOR,
    SIZE_HEIGHT,
    SIZE_WIDTH,
} from '../../common/constants';
import {UPLOAD_FILE} from '../../../connection/queries';
import {Button} from '../../common/components/Button';
import { DateScroller } from '../../childEnroll/components/DateScroller';
import { getDateYMD } from '../../common/service/dateService';
import { getKoreanDay } from '../../calendar/service/calendarService';
import { TagModal } from './TagModal';

interface diaryProps {}

export function Memo(props: diaryProps) {
    // Todo
    // 1 : modal component로 빼내기
    // 2 : 기존 입력되있는 문제 행동 띄우기, 화면에 배치 신경써서

    const [date, setDate] = React.useState<Date>(new Date());
    const [images, setImages] = React.useState<ReactNativeFile[]>();
    const [tag, setTag] = React.useState<string[]>();
    const [dateModalVisible, setDateModalVisible] = React.useState<boolean>(false);
	const [tagModalVisible, setTagModalVisible] = React.useState<boolean>(false)
    const [fileUpload] = useMutation(UPLOAD_FILE, {
        onCompleted: data => console.log(data),
    });
    const handleFileChange = () => {
        const file = images;
        if (!file) return;
        fileUpload({variables: {file}});
    };

    const imagePick = async () => {
        await ImagePicker.openPicker({
            mediaType: 'photo',
            multiple: true,
            includeBase64: true,
            forceJpg: true,
        }).then((image: any) => {
            let files: ReactNativeFile[] = [];
            image.map((e: any) => {
                const file = new ReactNativeFile({
                    uri: e.path,
                    type: e.mime,
                    name: 'test.jpg',
                });
                files.push(file);
            });
            setImages(files);
        });
    };

	function renderImage() {
		return(
			<View style={{ paddingHorizontal : GLOBAL_MARGIN_HORIZON ,flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center',marginTop : GLOBAL_MARGIN_HORIZON}}>
				<ScrollView style={{flex: 1}} horizontal showsHorizontalScrollIndicator={false} >
				{
					images?.map((image: ReactNativeFile, idx) => {
						return (
							<View key={idx} style={styles.imagBoxContainer}>
								<Image
								source={{uri: image.uri}}
								style={styles.imageStyle}
								// resizeMode="contain"
								/>
								<TouchableOpacity style={styles.imageCancel} 
								onPress={() => setImages(images.filter((data, id) => id !== idx))}>
									<Icon name="close-outline" style={styles.imageCancelIcon}></Icon>
								</TouchableOpacity>
							</View>
						)
					})
				}
				</ScrollView>
			</View>
		)
	}

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.titleTextInputStyle}
                placeholder="제목을 입력해주세요"
                placeholderTextColor="#d5d5d5"/>

            <View style={styles.dateTextContainer}>
                <TouchableOpacity onPress={() => setDateModalVisible(true)}>
                    <Text style={styles.dateText}>
                        {getDateYMD(date,'.') + '(' + getKoreanDay(date.getDay()) + ')' }
                    </Text>
                </TouchableOpacity>
            </View>

            {/* 본문 */}
			{ renderImage() }
			<TextInput
			style={styles.contentTextInput}
			placeholder="우리 아이의 성장 내용을 입력해주세요"
			multiline/>

			{/* 태그 */}
			<View style={styles.tagContainer}>
				{
					tag?.map((tag) => {
						return(
							<Text style={styles.tagText}>
								{tag}
							</Text>	
						)
					})
				}
				<TouchableOpacity onPress={() => { setTagModalVisible(true) }}>
					<Text style={[styles.tagText, {color : '#C7C7C7'}]}>
						# 태그입력
					</Text>
				</TouchableOpacity>
			</View>
            
            <Divider height={2} color="#E5E5E5" />

            {/* 사진 */}
            <View style={styles.imageContainer}>
                <ScrollView style={{height: SIZE_WIDTH * 0.13}} horizontal>
                    <TouchableOpacity onPress={() => imagePick()} style={{justifyContent: 'center'}}>
                        <Image
                        style={styles.imageIcon}
                        source={require('../../../assets/icons/ic_photo_24.png')}/>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <Divider height={3} color="#E5E5E5" />

            <View style={styles.submitButtonContainer}>
                <Button
				text={'작성완료'}
				textColor={'white'}
				style={{backgroundColor: MAIN_COLOR, elevation :3,}} />
            </View>

			<Modal
			isVisible={dateModalVisible}>
				<DateScroller 
				setDate={setDate} 
				date={date} 
				setModalVisible={setDateModalVisible}></DateScroller>
			</Modal>
            
			<Modal
			isVisible={tagModalVisible}>
				<TagModal
				setModalVisible={setTagModalVisible}
				data={tag}
				setData={setTag}
				></TagModal>
			</Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleTextInputStyle: {
        height: SIZE_WIDTH * 0.13,
        borderBottomWidth: 2,
        borderColor: '#ededed',
        paddingHorizontal: GLOBAL_MARGIN_HORIZON,
    },
    dateTextContainer: {
        height: SIZE_WIDTH * 0.13,
        borderBottomWidth: 2,
        borderColor: '#ededed',
        paddingHorizontal: GLOBAL_MARGIN_HORIZON,
        justifyContent: 'center',
    },

    imageContainer: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 15,
    },

	contentTextInput : {
		height: SIZE_WIDTH * 0.8,
		paddingVertical: GLOBAL_MARGIN_HORIZON,
		paddingHorizontal: GLOBAL_MARGIN_HORIZON,
		textAlignVertical: 'top',
	},
	dateText : {color: 'black', fontSize: 18, fontWeight: 'bold'},
	tagContainer : {
		flexDirection: 'row',
		paddingHorizontal: GLOBAL_MARGIN_HORIZON,
		marginBottom: GLOBAL_MARGIN_VERTICAL * 0.5,
	},
	tagText : {
		color: '#707070',
		fontSize: 14,
		paddingHorizontal: 5,
		paddingVertical: 3,
		backgroundColor: '#ededed',
		borderRadius: 4,
		marginRight : 10
	},
	imagBoxContainer : {
		borderRadius : 8,
		width : SIZE_WIDTH * 0.35,
		height : SIZE_WIDTH * 0.35,
		marginRight : 20,
		backgroundColor : '#ededed',
		justifyContent : 'center',
		alignItems : 'center',
	},
	imageIcon : {width : 30 , height : 30},
	imageStyle: { width : SIZE_WIDTH * 0.35, height : SIZE_WIDTH * 0.35, borderRadius : 10},
	imageCancel: {
		position: 'absolute',
		right: 5,
		top: 5,
		backgroundColor: 'black',
		borderRadius: 100,
		width: 20,
		height: 20,
		alignItems: 'center',
		justifyContent : 'center',
	  },
	  imageCancelIcon : {
		  color : 'white', 
		  fontSize: 15,
		},
	submitButtonContainer : {
		marginHorizontal: GLOBAL_MARGIN_HORIZON,
		marginVertical: GLOBAL_MARGIN_VERTICAL,
	},

});
