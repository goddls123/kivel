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
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker, {openCamera} from 'react-native-image-crop-picker';
import {ReactNativeFile} from 'apollo-upload-client';
import {Divider} from '../common/divider';
import {SIZE_HEIGHT, SIZE_WIDTH} from '../common/constants';
import { gql, useMutation } from '@apollo/client';

interface diaryProps {}

export function writeDiary(props: diaryProps) {
  // Todo 
  // 1 : modal component로 빼내기
  // 2 : 기존 입력되있는 문제 행동 띄우기, 화면에 배치 신경써서

  const [date, setDate] = React.useState<Date>(new Date());
  const [images, setImages] = React.useState<ReactNativeFile[]>();
  const [tag, setTag] = React.useState<string[]>();
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);


  const UPLOAD_FILE = gql`
      mutation uploadFile($file: [Upload!]!) {
        uploadFile(file: $file) 
    }
  `;

  const [fileUpload] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log(data),
  });
  const handleFileChange = () => {
    const file = images
    if (!file) return;
    fileUpload({ variables: { file } });
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

  console.log('current state : ', 'date : ', date, 'images : ', images);
  return (
    <View style={styles.container}>
      {/* 제목 */}
      <View style={{flex: 3}}>
        <TextInput placeholder="제목을 입력해주세요" />
        <View style={styles.headerView}>
          <Text style={{borderWidth: 1, borderColor: 'black'}}>
            {date.toString()}
          </Text>
          <TouchableOpacity style={styles.shareButton} onPress={() => handleFileChange()}>
            <Text>공유</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Divider height={5} color="#E5E5E5" />

      {/* 본문 */}
      <View style={{flex: 11, justifyContent: 'space-between'}}>
        <TextInput placeholder="내용을 입력해주세요" multiline scrollEnabled />
      </View>
      <Divider height={5} color="#E5E5E5" />

      {/* 사진 */}
      <View style={styles.imageContainer}>
        <ScrollView style={{flex: 1}} horizontal>
          <TouchableOpacity
            onPress={() => imagePick()}
            style={styles.plusImage}>
            <Icon name="plus" size={50} color="#900" />
          </TouchableOpacity>
          {images
            ? images.map((images: ReactNativeFile, id) => {
                return (
                  <View key={id} style={styles.imageStyle}>
                    <Image
                      source={{uri: images.uri}}
                      style={styles.imageStyle}
                    />
                    <TouchableOpacity style={styles.imageCancel}>
                      <Text>X</Text>
                    </TouchableOpacity>
                  </View>
                );
              })
            : null}
        </ScrollView>
      </View>
      <Divider height={3} color="#E5E5E5" />

      {/* 태그 */}
      <View style={{flex: 3}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.tagStyle} onPress={() => {setModalVisible(true)}}>
            <Text style={{color: '#C4C4C4'}}># 태그를 달아주세요</Text>
          </TouchableOpacity>
        </View>
      </View>



      <Modal 
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      backdropOpacity={0.2}
      > 
      <View style={{alignSelf : 'center', width :SIZE_WIDTH * 0.8 , height : SIZE_HEIGHT * 0.3 , backgroundColor : 'white', padding : 15,}}>
        <TouchableOpacity onPress={()=>setModalVisible(false)}>
          <Text style={{position : 'absolute', right : 0, top : 0, fontSize : 18, fontWeight : 'bold'}}>X</Text>
        </TouchableOpacity>
        
        <Text>직접 입력</Text>
        
          <TextInput 
          placeholder=' # 직접 입력' 
          style={{marginVertical : 10, justifyContent : 'flex-end', width : '50%', height : '17%', borderWidth : 2, borderColor : '#E16F55', borderRadius : 8,}}
          ></TextInput>
        
        <Text>기존 선택</Text>
        
        <View style={{flex : 1,justifyContent : 'flex-end'}}>
        <TouchableOpacity style={{alignSelf : 'center', justifyContent : 'center', alignItems : 'center', width: SIZE_WIDTH * 0.2, height: SIZE_HEIGHT * 0.04, borderRadius : 8, borderWidth : 1,}}>
              <Text>확인</Text>
        </TouchableOpacity>
        </View>
      </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
  },
  imageContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 15,
    marginLeft : 15,
  },
  imageStyle: {
    flex: 1,
    width: SIZE_WIDTH / 4,
    borderRadius: 10,
    marginRight : 10,
  },
  plusImage: {
    width: SIZE_WIDTH / 4,
    alignItems: 'center',
    padding: 15,
    marginRight : 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
  imageCancel: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: '#C4C4C4',
    borderRadius: 100,
    width: 20,
    height: 20,
    alignItems: 'center',
  },
  tagStyle: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
