import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'; //next에는 자체적으로 라우터가 있음  이게 라우터 돔의 링크 태그임.
import { Menu, Input, Row, Col } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
//gutter => 컬럼 사이의 간격.

const Global = createGlobalStyle`
.ant-row {
	margin-right: 0 !important;
	margin-left: 0 !important;
}

.ant-col:first-child {
		padding-left: 0 !important;
}

.ant-col:last-child {
	padding-right: 0 !important;
}
`;
//컴포넌트를 스타일할 때 이렇게 할 수 있음.
const SearchInput = styled(Input.Search)`
	vertical-align: middle;
`;

const AppLayout = ({ children }) => {
	//isLoggedIn이 바뀌면 알아서 리렌더링 된다.
	<Global />;
	const me = useSelector((state) => state.user.me);
	return (
		<div>
			<Menu mode="horizontal">
				<Menu.Item key="1">
					<Link href="/">
						<a>노드버드</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link href="/profile">
						<a>프로필</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link href="signup">
						<SearchInput enterButton />
					</Link>
				</Menu.Item>
				<Menu.Item key="4">
					<Link href="signup">
						<a>회원가입</a>
					</Link>
				</Menu.Item>
			</Menu>
			<Row gutter={8}>
				<Col xs={24} md={6}>
					{me ? <UserProfile /> : <LoginForm />}
				</Col>
				<Col xs={24} md={12}>
					{children}
				</Col>
				<Col xs={24} md={6}>
					<a
						href="https://www.naver.com"
						target="_blank"
						rel="noreferrer noopnner"
					>
						_blank 해줄 때에는 no referrer 해줘야 보안위협이 사라집니당
					</a>
				</Col>
			</Row>
		</div>
	);
};
//리턴안에 들어가는 모든 것들이 노드
AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppLayout;
