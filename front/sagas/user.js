import axios from 'axios';
import { all, fork, takeLatest, delay, put } from 'redux-saga/effects';
import {
	LOG_IN_SUCCESS,
	LOG_IN_REQUEST,
	LOG_IN_FAILURE,
	LOG_OUT_REQUEST,
	LOG_OUT_SUCCESS,
	LOG_OUT_FAILURE,
	SIGN_UP_REQUEST,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
} from '../reducers/user';

function logInAPI(data) {
	return axios.post('/api/login', data);
}

// 3. LOG_IN action이 실행 되면 이 놈이 실행된다.
function* logIn(action) {
	try {
		// const result = yield call(logInAPI);
		yield delay(1000);
		yield put({
			// put은 dispatch라고 생각하면 된다. 특정 액션을 dispatch 해줌.
			type: LOG_IN_SUCCESS,
			data: action.data,
		});
	} catch (err) {
		console.error(err);
		yield put({
			type: LOG_IN_FAILURE,
			error: err.response.data,
		});
	}
}

function logOutAPI() {
	return axios.post('/api/logout');
}

function* logOut() {
	try {
		// const result = yield call(logOutAPI);
		yield delay(1000);
		yield put({
			type: LOG_OUT_SUCCESS,
		});
	} catch (err) {
		console.error(err);
		yield put({
			type: LOG_OUT_FAILURE,
			error: err.response.data,
		});
	}
}

function signUpAPI() {
	return axios.post('/api/signUp');
}

function* signUp() {
	try {
		// const result = yield call(signUpAPI);
		yield delay(1000);
		yield put({
			type: SIGN_UP_SUCCESS,
		});
	} catch (err) {
		console.error(err);
		yield put({
			type: SIGN_UP_FAILURE,
			error: err.response.data,
		});
	}
}

// 1. 이벤트리스너 같이 함수를 만든다. (리듀서 같은 느낌..?)
function* watchLogIn() {
	yield takeLatest(LOG_IN_REQUEST, logIn); //'LOG_IN_REQUEST'이란 액션이 들어오면 logIn을 실행한다.
}

function* watchLogOut() {
	yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
	yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
	yield all([
		// 2. 등록을 해준다.
		fork(watchLogIn),
		fork(watchLogOut),
		fork(watchSignUp),
	]);
}
