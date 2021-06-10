import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'; //next에는 자체적으로 라우터가 있음  이게 라우터 돔의 링크 태그임.
const AppLayout = ({ children }) => {
	return (
		<div>
			<div>
				<Link href="/">
					<a>노드버드</a>
				</Link>
				<Link href="/profile">
					<a>프로필</a>
				</Link>
				<Link href="signup">
					<a>회원가입</a>
				</Link>
			</div>
			{children}
		</div>
	);
};

AppLayout.propTypes = {
	children: PropTypes.node.isRequired, //리턴안에 들어가는 모든 것들이 노드
};
export default AppLayout;
