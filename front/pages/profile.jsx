import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
	const followerList = [
		{ nickname: '주니' },
		{ nickname: '김호찌' },
		{ nickname: '밍구밍구' },
	];
	const followingList = [
		{ nickname: '주니' },
		{ nickname: '김호찌' },
		{ nickname: '밍구밍구' },
	];
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>내 프로필 | NodeBird</title>
			</Head>
			<AppLayout>
				<NicknameEditForm />
				<FollowList header="팔로잉 목록" data={followingList} />
				<FollowList header="팔로워 목록" data={followerList} />
			</AppLayout>
		</>
	);
};

export default Profile;
