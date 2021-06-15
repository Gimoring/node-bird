import { all, fork } from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';

//리듀서 처럼 분리하고 루트에 박아넣기.

export default function* rootSaga() {
	yield all([fork(postSaga), fork(userSaga)]);
}

/*
  함수 옆에* 붙으면 제너레이터 함수임
  특별한 역할을 해준다함..
  const gen = function* () {
    console.log(1);
    yield;
    console.log(2);
    yield;
    console.log(3);
    yield 4;
  }
  gen()만 하면 suspendid만 나온다.
  gen().next()를 하면 이제 1이 뜨게 된다.
  한 번 더하면 2가 뜨고 멈추고..
  yield 부분에 숫자나 값을 넣어주면 value로 리턴이 된다.

  all은 배열을 받는다. 그래서 배열 안에있는 것들을 한 번에 실행시켜준다.
  fork는 제너레이터 함수를 실행해주는 것
  call도 제네레이터 함수를 실행해준다.
  이 둘의 차이점 : fork 비동기 함수 호출, call은 동기 함수 호출
  take는 인자로들어간 액션이 실행될 때 까지 기다린다.
  //put은 dispatch라고 생각하면 된다. 특정 액션을 dispatch 해줌.
  yield를 계속 써주는 이유 : 테스트 해주기 위해서.

  실행이 되는 순서 
  로그인버튼을 누르면 loginRequestAction이 실행이 되고
  saga의 watchLogIn 함수의 'LOG_IN_REQUEST'로 간다. 그리고 logIn이 실행이 됨과 동시에
  reducer의 LOG_IN_REQUEST가 실행이된다.
*/
