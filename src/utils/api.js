import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
  } from './_DATA.js'
  
  export async function getInitialData () {
    const [users, questions] = await Promise.all([
      _getUsers(),
      _getQuestions(),
    ])
    return ({
      users,
      questions,
    })
  }
  
  export function addNewQuestion(question) {
      return _saveQuestion(question)
  }
  
  export function saveQuestionAnswer(answer) {
    return _saveQuestionAnswer(answer)
  }