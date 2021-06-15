export const initialState = {
	//sequelize에서 다른 정보들과 합쳐서 주기때문에 앞글자가 대문자다. (알아서 저래 됨)
	mainPosts: [
		{
			id: 1,
			User: {
				id: 1,
				nickname: '스티븐호킹스',
			},
			content: '첫번째게시글 #김태그 #리덕스',
			Images: [
				{
					src: 'https://image.freepik.com/free-photo/arrangement-summer-still-life-elements_23-2148968970.jpg',
				},
				{
					src: 'https://image.freepik.com/free-photo/assortment-summer-still-life-elements_23-2148968978.jpg',
				},
				{ src: 'https://image.flaticon.com/icons/png/512/891/891947.png' },
			],
			Comments: [
				{
					User: {
						nickname: 'master de velo',
					},
					content: '우와 첫 축하',
				},
				{
					User: {
						nickname: 'bien conduit',
					},
					content: 'Felicitation!',
				},
			],
		},
	],
	imagePaths: [],
	addPostLoading: false,
	addPostDone: false,
	addPostError: null,
	addCommentLoading: false,
	addCommentDone: false,
	addCommentError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// 동적 액션 크리에이터

export const addPost = (data) => ({
	type: ADD_POST_REQUEST,
	data,
});

export const addComment = (data) => ({
	type: ADD_COMMENT_REQUEST,
	data,
});

const dummyPost = (data) => ({
	id: 2,
	content: data,
	User: {
		id: 1,
		nickname: '김호찌',
	},
	Images: [],
	Comments: [],
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST_REQUEST:
			return {
				...state,
				addPostLoading: true,
				addPostDone: false,
				addPostError: null,
			};
		case ADD_POST_SUCCESS:
			return {
				...state,
				mainPosts: [dummyPost(action.data), ...state.mainPosts],
				addPostLoading: false,
				addPostDone: true,
			};
		case ADD_POST_FAILURE:
			return {
				...state,
				addPostLoading: true,
				addPostError: action.error,
			};
		case ADD_COMMENT_REQUEST:
			return {
				...state,
				addCommentLoading: true,
				addCommentDone: false,
				addCommentError: null,
			};
		case ADD_COMMENT_SUCCESS:
			return {
				...state,
				addCommentLoading: false,
				addCommentDone: true,
			};
		case ADD_COMMENT_FAILURE:
			return {
				...state,
				addCommentLoading: true,
				addCommentError: action.error,
			};
		default:
			return state;
	}
};

export default reducer;

// 컴포넌트에서 addPost를 디스패치하면 reducer에서의 addPost 액션에 data로 넘어가고
// 얘를 사가에서 SUCCESS로 넘겨준다.
