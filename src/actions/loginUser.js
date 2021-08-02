import {LOGIN_USER, LOGOUT_USER } from '../types'

export function loginUser(user) {
	return {
		type: LOGIN_USER,
		user
	}
}

// Logout User Action Creator
export function logoutUser() {
	return {
		type: LOGOUT_USER
	}
}