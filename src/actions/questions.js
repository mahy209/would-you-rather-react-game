import { addNewQuestion, saveQuestionAnswer } from '../utils/api'
import {RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION} from '../types';

// Receive Questions Action Creator Function
export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

function saveAnswer(loginUser, qid, answer) {
	return {
		type: SAVE_QUESTION,
		loginUser,
		qid,
		answer
	}
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	}
}

export function handleSaveAnswerQuestion(qid, answer) {
	return (dispatch, getState) => {

		const { loginUser } = getState()

		return saveQuestionAnswer({ authedUser: loginUser, qid, answer })
				.then(() => dispatch(saveAnswer(loginUser, qid, answer)))

	}
}

export function handleAddNewQuestion(optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		
		const { loginUser } = getState()

		return addNewQuestion({ optionOneText, optionTwoText, author: loginUser })
				.then((question) => dispatch(addQuestion(question)))
				
	}
}