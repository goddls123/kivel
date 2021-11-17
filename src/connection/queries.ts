import { gql } from "@apollo/client";

export const SAVE_CHILD = gql`
mutation saveChild($ChildInput : ChildInput!){
	saveChild(ChildInput : $ChildInput){
		id,
		name,
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
mutation uploadFile($file: [Upload!]!) {
  uploadFile(file: $file) 
}`;

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

export const UPLOAD_DEVELOPMENT_RECORD =gql`
mutation saveDevelopmentRecord($DevelopmentRecordInput : DevelopmentRecordInput!){
	saveDevelopmentRecord(DevelopmentRecordInput : $DevelopmentRecordInput){
		id
	}
}`