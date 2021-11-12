import { scheduleType } from "../../types/types";
import { diary } from "../../types/DiaryTypes";


export type scheduleTypeTest = {
	id : number
	title : string
	scheduleDate : string 	//DateTime	
	startTime : string 		//DateTime
	endTime : string 			//DateTime
	repeatCycle : string
	repeatDay : string
	period : string			//DateTime
	theraphistId? : number
	location? : string
	latitude? : number
	longitude? : number
	memo? : string
	notificationTime? : string	 //DateTime
	color : string
}

export const schedule_data : scheduleTypeTest[] = [
	{
		id : 10,
		scheduleDate : '2021-11-09',
		startTime : '11:00:00',
		endTime : '13:00:00',
		repeatCycle : 'W',
		repeatDay : '0101010',
		period : '2022-02-09',
		title : '일정1',
		location : '에베ㅔ베베',
		memo : 'ㅈ같다^^ㅣㅂ',
		color : '#' + Math.round(Math.random() * 0xffffff).toString(16)
	},
	{
		id : 11,
		scheduleDate : '2021-11-09',
		startTime : '13:30:00',
		endTime : '15:00:00',
		repeatCycle : '2W',
		repeatDay : '0101010',
		period : '2022-02-09',
		title : '일정2',
		color : '#' + Math.round(Math.random() * 0xffffff).toString(16)
	},
]

export const dummyData: diary[] = [
	{
		note_id: 1,
		date: new Date('2021-09-18'),
		title: '꽃이 피던 날',
		share_YN: true,
		content: `꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가`,
		images: [
		'https://cdn.crowdpic.net/list-thumb/thumb_l_7B46E9C49594CDBD993E8B53804246F9.jpg',
		'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE',
		'https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg',
		],
		tag: ['첫 걸음', '현둥'],
	},
	{
		note_id: 2,
		date: new Date('2021-09-11'),
		title: '드디어?!',
		share_YN: true,
		content: `꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가`,
		images: [
		'https://cdn.crowdpic.net/list-thumb/thumb_l_7B46E9C49594CDBD993E8B53804246F9.jpg',
		'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE',
		'https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg',
		],
		// tag: ['첫 걸음', '현둥'],
	},
	{
		note_id: 3,
		date: new Date('2021-09-09'),
		title: '말랑카우 먹은 날',
		share_YN: true,
		content: `꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가`,
		images: [
		'https://cdn.crowdpic.net/list-thumb/thumb_l_7B46E9C49594CDBD993E8B53804246F9.jpg',
		'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE',
		'https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg',
		],
		tag: ['첫 걸음', '현둥','어버버버ㅓㅂ'],
	},
	{
		note_id: 4,
		date: new Date('2021-09-01'),
		title: '뚱빈 보고시퍼',
		share_YN: true,
		content: `꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가 꽃이 피고 시원한 바람이 불고 구름 한 점 없는 날씨인데 왜 나는 나가 놀지 못하는가`,
		images: [
		'https://cdn.crowdpic.net/list-thumb/thumb_l_7B46E9C49594CDBD993E8B53804246F9.jpg',
		'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE',
		'https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg',
		],
	},


];