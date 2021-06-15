import React from 'react'; // next에서는 이걸 안 써도 된다. 찜찜하면 써도됨!
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
// 왜 가능하냐?
// 넥스트는 pages 폴더를 인식을 해서 안에 있는 파일들을 코드스플리팅 된 개별적인 페이지(컴포넌트)로 만들어준다.

const Home = () => {
	const { logInDone } = useSelector((state) => state.user);
	const { mainPosts } = useSelector((state) => state.post);
	return (
		<AppLayout>
			{logInDone && <PostForm />}
			{mainPosts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</AppLayout>
	);
};

export default Home;
