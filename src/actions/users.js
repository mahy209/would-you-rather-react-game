import { saveQuestionAnswer } from '../utils/api'

import {RECEIVE_USERS, SAVE_QUESTION, ADD_QUESTION} from '../types'

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	}
}

export function saveAnswer(loginUser, qid, answer) {
	return {
		type: SAVE_QUESTION,
		loginUser,
		qid,
		answer
	}
}

export function addQuestion(loginUser, qid) {
	return {
		type: ADD_QUESTION,
		loginUser,
		qid
	}
}

export function handleSaveAnswerUser(qid, answer) {
	return (dispatch, getState) => {

		const { loginUser } = getState()

		return saveQuestionAnswer({ authedUser: loginUser, qid, answer })
				.then(() => dispatch(saveAnswer(loginUser, qid, answer)))
	}
}