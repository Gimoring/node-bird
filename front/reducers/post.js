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
	postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
	type: ADD_POST,
};
const dummyPost = {
	id: 2,
	content: '더미데이터',
	User: {
		id: 1,
		nickname: '김호찌',
	},
	Images: [],
	Comments: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				mainPosts: [dummyPost, ...state.mainPosts],
				postAdded: true,
			};
		default:
			return state;
	}
};

export default reducer;
