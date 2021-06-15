import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Popover, List, Comment } from 'antd';
import {
	RetweetOutlined,
	HeartOutlined,
	MessageOutlined,
	EllipsisOutlined,
	HeartTwoTone,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

const PostCard = ({ post }) => {
	const [liked, setLiked] = useState(false);
	const [commentFormOpened, setCommentFormOpened] = useState(false);
	const id = useSelector((state) => state.user.me?.id);
	// ==  const  id  = useSelector((state) => state.user.me && state.user.me.id);
	// const {me } = useSelector((state)=> state.user); 이렇게 쓸 수도 있음
	// const id = me?.id; // optional chaining 연산자

	const onToggleLike = useCallback(() => {
		//prev에는 like 데이터가 들어간다. 이전 데이터 기반으로 다음 데이터를 만든다.
		setLiked((prev) => !prev);
	}, []);
	const onToggleComment = useCallback(() => {
		setCommentFormOpened((prev) => !prev);
	}, []);

	return (
		<div style={{ marginBottom: 20 }}>
			<Card
				cover={post.Images[0] && <PostImages images={post.Images} />}
				actions={[
					<RetweetOutlined key="retweet" />,
					liked ? (
						<HeartTwoTone
							twoToneColor="#eb2f96"
							key="heart"
							onClick={onToggleLike}
						/>
					) : (
						<HeartOutlined key="heart" onClick={onToggleLike} />
					),

					<MessageOutlined key="comment" onClick={onToggleComment} />,
					<Popover
						key="more"
						content={
							<Button.Group>
								{id && post.User.id === id ? (
									<>
										<Button>수정</Button>
										<Button type="danger">삭제</Button>
									</>
								) : (
									<Button>신고</Button>
								)}
							</Button.Group>
						}
					>
						<EllipsisOutlined />
					</Popover>,
				]}
			>
				<Card.Meta
					avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
					title={post.User.nickname}
					description={<PostCardContent postData={post.content} />}
				/>
			</Card>
			{commentFormOpened && (
				<div>
					<CommentForm post={post} />
					<List
						header={`${post.Comments.length}의 댓글`}
						itemLayout="horizontal"
						dataSource={post.Comments}
						renderItem={(item) => (
							<li>
								<Comment
									author={item.User.nickname}
									avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
									content={item.content}
								/>
							</li>
						)}
					/>
				</div>
			)}
			{/* <CommentForm />
			<Comments /> */}
		</div>
	);
};

PostCard.propTypes = {
	post: PropTypes.shape({
		//PropTypes가 오브젝트일 떄 shape로 더 구체적으로 사용가능.
		id: PropTypes.number,
		User: PropTypes.object,
		content: PropTypes.string,
		createdAt: PropTypes.object,
		Comments: PropTypes.arrayOf(PropTypes.object),
		Images: PropTypes.arrayOf(PropTypes.object),
	}).isRequired,
};

export default PostCard;
