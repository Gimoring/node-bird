// store를 설정하는 configure JS 파일입니다.
// npm i next-redux-wrapper 로 다운받아줘야합니다.

// npm i redux-devtools-extension <-- ㅇㅣ것이 있어야 개발자 브라우저 도구랑 연결이 됩니다.
/* 컨피규어 스토어는 이런 식으로 만듭니다
  const configureStore = () => {

  };

  const wrapper = createWrapper(configureStore,{옵션 객체});

  export default wrapper;
*/
// 스테이트와 리듀서를 포함하는게 스토어이다.
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'; // 사가 미들웨어 생성함수 가져오기
import reducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware(); // 2. 리덕스 사가를 생성 해주고 변수에 넣었다.
	const middlewares = [sagaMiddleware]; // <-- 1. 사가나 미들웨어들을 넣는 곳.
	const enhancer =
		process.env.NODE_ENV === 'production'
			? compose(applyMiddleware(...middlewares)) // 배포용
			: composeWithDevTools(applyMiddleware(...middlewares)); //개발용
	const store = createStore(reducer, enhancer);
	store.sagaTask = sagaMiddleware.run(rootSaga); // 3. store에 사가루트를 넣고 실행
	return store;
};

const wrapper = createWrapper(configureStore, {
	debug: process.env.NODE_EV === 'development', // true면 디버그가 더 자세하게 설명떠서 편하다.
});

export default wrapper;

/*
Redux 미들웨어는 dispatch()메소드를 통해 store로 가는 액션을 가로채는 코드
redux thunk는 리덕스가 비동기 액션을 디스패치 할 수 있도록 도와주는 역할을한다.
redux saga도 똑같지만 기능이 더 있다. delay, getlatest 등.

redux saga를 사용해볼것이다.
npm i redux-saga 해주고 나는 nextjs에서 쓸 것이기 때문에
npm i next-redux-saga도 해준다.

사가의 설정방법  1, 2, 3, 4 순으로.
그리고 _app.js에서 withReduxSaga를 설정해준다.
*/
