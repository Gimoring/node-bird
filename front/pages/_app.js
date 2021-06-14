//여기서 페이지들의 공통되는 것들을 처리할 수 있다.
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';
const NodeBird = ({ Component }) => {
	return (
		<>
			{/* 
			redux에서는 페이지를 <Provider store={store}> 를써서 감싸주는데 
			next에서는 안써줘도 된다.
			next-redux-wrapper가 알아서 감싸준다.
			그래서 우리가 써주면 중복이 되어버림.
		*/}
			<Head>
				<meta charSet="utf-8" />
				<title>NodeBird</title>
			</Head>
			<Component />
		</>
	);
};

NodeBird.propTypes = {
	Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
