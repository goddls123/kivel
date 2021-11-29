import { gql } from "@apollo/client";

export const SAVE_CHILD = gql`
mutation saveChild($ChildInput : ChildInput!){
	saveChild(ChildInput : $ChildInput){
		id,
		name,
	}
}`

export const GET_CHILD_INFO = gql`
query{
	userChild{
	  	child{
		  	id
			name
			birthDate
			sex
			height
			weight
			birthWeekNum
			birthDayNum
			pill
			diaper
			allergy
			seizure
			etc
			tendency
			diagnosis
			degreeSnack
			degreeRule
			degreeMeal
			rearer
	  	}
	}
}`

export const GET_CHILD_INFO_HOME = gql`
query{
	userChild{
	  	child{
		  	id
			name
			birthDate
			sex
	  	}
	}
}`


export const INSERT_SCHEDULE = gql`
	mutation saveSchedule( $ScheduleInput : ScheduleInput!){
		saveSchedule( ScheduleInput : $ScheduleInput){
			id
		}
	}`

export const USER_LOGIN = gql`
	mutation userLogin {
		userLogin {
			userEmail
		}
	}`

export const GET_SCHEDULE = gql`
query {
	userSchedules{
			schedules{
			id
			title
			scheduleDate
			startTime
			endTime
			repeatCycle
			repeatDay
			period
			therapistId
			location
			latitude
			longitude
			memo
			notificationTime
		}
	}
}`

export const WEEKLY_SCHEDULE = gql`
query {
	userSchedules{
			schedules{
			id
			title
			scheduleDate
			startTime
			repeatCycle
			repeatDay
			endTime
			therapistId
			location
			period
		}
	}
}`

export const UPLOAD_FILE = gql`
mutation uploadFile($file: [Upload!]!, $code : String!) {
  uploadFile(file: $file, code : $code) 
}`;


export const UPLOAD_DEVELOPMENT_RECORD =gql`
mutation saveDevelopmentRecord($DevelopmentRecordInput : DevelopmentRecordInput!){
	saveDevelopmentRecord(DevelopmentRecordInput : $DevelopmentRecordInput){
		id
	}
}`

export const UPLOAD_CHALLENGING_BEHAVIOR = gql`
mutation saveChallengingBehavior($ChallengingBehaviorInput : ChallengingBehaviorInput!, $file: [Upload!]){
	saveChallengingBehavior(ChallengingBehaviorInput : $ChallengingBehaviorInput, file : $file){
		id
	}
}`

export const UPLOAD_MEMO = gql`
mutation saveMemoMemoTag($MemoInput : MemoInput!, $MemoTagInput : [MemoTagInput!]!){
	saveMemoMemoTag(MemoInput : $MemoInput, MemoTagInput : $MemoTagInput){
		id
	}
}
`




export const GET_DEVELOPMENT_CARD = gql`
query{
	developmentRecords{
		id
		title
		occurenceDate
	}
}`

export const GET_CHALLENGING_CARD = gql`
query{
	challengingBehaviors{
		id
		title
		occurenceDate
	}
}`

export const GET_MEMO_CARD = gql`
query{
	  memos{
		id
		title
		occurenceDate
	  }
  }`

export const GET_DEVELOPMENT_DETAIL = gql`
query developmentRecord($id : Float!){
	developmentRecord(id : $id){
		id
		occurenceDate
		emergency
		title
		problem
		detail
		files{
			id
		}
	}
}`

export const GET_CHALLENGING_DETAIL = gql`
query challengingBehavior($id : Float!){
	challengingBehavior(id : $id){
		id
		occurenceDate
		title
		content
		fixedMethod
		files{
			id
		}
	}
}
`

export const GET_MEMO_DETAIL = gql`
query memo($id : Float!){
	memo(id : $id){
		id
		occurenceDate
		title
		content
		memoTags{
			tag
		}
		files{
			id
		}
	}
}
`