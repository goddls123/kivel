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
import {Divider} from '../common/divider';
import {SIZE_HEIGHT, SIZE_WIDTH} from '../common/constants';
import {diaryProps} from '../../types/DiaryTypes';
import ImageModal from 'react-native-image-modal';
const dummyData: diaryProps = {
  note_id: 1,
  date: new Date(),
  title: '꽃이 피던 날',
  share_YN: true,
  content: `꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가`,
  images: [
    'https://cdn.crowdpic.net/list-thumb/thumb_l_7B46E9C49594CDBD993E8B53804246F9.jpg',
    'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE',
    'https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg',
  ],
  tag: ['첫 걸음', '현둥'],
};

export function Diary(props: diaryProps) {

  return (
    <View style={styles.container}>
      {/* 제목 */}
      <View style={styles.headerView}>
        <View style={styles.headerTop}>
          <Text style={{fontSize: 20}}>{props.title || dummyData.title}</Text>
          <TouchableOpacity style={[styles.button, {alignSelf: 'flex-end'}]}>
            <Text style={{fontSize: 15}}> 수정 </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerBottom}>
          <Text style={{fontSize: 15}}>
            {props.date || dummyData.date.getFullYear().toString() + '-10-05'}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 15}}> 공유 </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Divider height={5} color="#E5E5E5" />

      {/* 본문 */}
      <View style={styles.mainText}>
        <ScrollView>
          <Text style={{fontSize: 15, marginBottom: 20}}>
            {props.content || dummyData.content}
          </Text>

          {/* {
          props.images?.map((imageUri) => {
            return(
              <ImageModal source={{ uri : imageUri }} style={{height : 100, width : 100}}></ImageModal>
            )
          })
        } */}

          <ScrollView style={{flexDirection: 'row'}} horizontal >
          {dummyData.images?.map((imageUri: string, id) => {
            return (
              <ImageModal
                resizeMode='contain'
                modalImageResizeMode='center'
                key={id}
                source={{uri: imageUri}}
                style={styles.imageStyle}
              />
            );
          })}
          </ScrollView>
        </ScrollView>
      </View>

      <Divider height={3} color="#E5E5E5" />

      {/* 태그 */}
      <View style={styles.tagContainer}>
        <View style={{flexDirection: 'row'}}>
          {/* {
          props.tag?.map((tag) => {
            return(
              <View style={styles.tagStyle}>
                <Text style={{color: '#C4C4C4'}}>tag</Text>
              </View>
            )
          })
        } */}
          {dummyData.tag?.map((tag,id) => {
            return (
              <View key={id} style={styles.tagStyle}>
                <Text># {tag}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {flex: 2, margin: 15},
  headerTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBottom: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  button: {
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  mainText: {
    flex: 10, 
    justifyContent: 'space-between', 
    margin: 20
  },
  imageStyle: {
    marginRight: 15,
    height: SIZE_HEIGHT / 5,
    width: SIZE_HEIGHT / 5,
  },
  tagContainer: {flex: 2},
  tagStyle: {
    marginLeft: 20,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
