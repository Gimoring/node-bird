import { HYDRATE } from 'next-redux-wrapper'; //요게(HYDRATE) 액션이라고 한다
import { combineReducers } from 'redux';

import user from './user';
import post from './post';
//state 부분. 중앙 저장소
/*
	const initialState = {
		user: {},
		post: {},
	};
*/
// action 부분. 액션은 객체다.
/*
  const changeNickname = {
    type: 'CHANGE_NICKNAME',
    data: 'kimhozzi',
  };
*/

//action creator
/*
  const changeNickname = (data) => {
    return {
      type: 'CHANGE_NICKNAME',
      data: data,
    }
  }
  changeNickname('kimozzi');
  store.dispatch(changeNickname('kimhozzi'));

*/
// state를 바꾸고 싶을때 action을 만들고 dispatch로 변경.

// 리듀서는 이전상태과 액션을 통해서 다음상태를 만들어내는 함수
// (이전상태, 액션) => 다음상태

/*
HYDRATE는 next-redux-wrapper를 쓸 때 필요한 액션이다
서버사이드렌더링을 위해서 쓴다.
서버쪽에서 실행된 리덕스의 결과물이 프론트에서는 HYDRATE라는 액션 이름 아래에 데이터로 전달된다.
*/
const rootReducer = combineReducers({
	// combineReducers는 여러 리듀서를 사용할 때 리듀서들을 하나로 묶어주는 메소드이다.
	index: (state = {}, action) => {
		//hydrate를 위해서 인덱스 리듀서 추가.
		switch (action.type) {
			case HYDRATE:
				console.log('HYDRATE', action);
				return { ...state, ...action.payload };
			default:
				return state;
		}
	},
	user,
	post,
});

export default rootReducer;
