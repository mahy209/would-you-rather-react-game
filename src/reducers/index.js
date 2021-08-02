import { combineReducers } from 'redux'

import users from './users';
import questions from './questions';
import loginUser from './loginUser';

export default combineReducers({
  users,
  questions,
  loginUser,
});