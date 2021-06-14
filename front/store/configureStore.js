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
import { applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import reducer from '../reducers';
const configureStore = () => {
	const middlewares = []; // <-- 사가나 미들웨어들을 넣는 곳.
	const enhancer =
		process.env.NODE_ENV === 'production'
			? compose(applyMiddleware(...middlewares)) // 배포용
			: composeWithDevTools(applyMiddleware(...middlewares)); //개발용
	const store = createStore(reducer, enhancer);
	return store;
};

const wrapper = createWrapper(configureStore, {
	debug: process.env.NODE_EV === 'development', // true면 디버그가 더 자세하게 설명떠서 편하다.
});

export default wrapper;
