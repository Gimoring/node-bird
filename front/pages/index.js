import React from 'react'; // next에서는 이걸 안 써도 된다. 찜찜하면 써도됨!
import AppLayout from '../components/AppLayout';
// 왜 가능하냐?
// 넥스트는 pages 폴더를 인식을 해서 안에 있는 파일들을 코드스플리팅 된 개별적인 페이지(컴포넌트)로 만들어준다.

const Home = () => {
	return (
		<AppLayout>
			<div>Hello, Next!</div>
		</AppLayout>
	);
};

export default Home;
