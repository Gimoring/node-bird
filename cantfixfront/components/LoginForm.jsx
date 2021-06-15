import React, { useMemo, useCallback } from 'react';
// useMemo 값을 캐슁      => 리렌더링 최적화
// useCallback 함수를 캐슁 => 리렌더링 최적화
// 캐슁이란?
// => 컴퓨팅에서 캐슁이란 오랜시간이 걸리는 작업의 결과를 '저장'해서 시간과 비용을 필요로 회피하는 기법을 의미한다.
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { loginRequestAction } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
	margin-top: 10px;
`;

const FormWrapper = styled(Form)`
	padding: 10px;
`;

const LoginForm = () => {
	const dispatch = useDispatch();
	const { logInLoading } = useSelector((state) => state.user);
	const [email, onChangeEmail] = useInput('');
	const [password, onChangePassword] = useInput('');

	//컴포넌트에 프롭스로 넘겨주는 함수는 useCallback을 써야 최적화가 된다.
	// const onChangeId = useCallback((e) => {
	// 	setId(e.target.value);
	// }, []);
	// const onChangePassword = useCallback((e) => {
	// 	setPassword(e.target.value);
	// }, []);

	const onSubmitForm = useCallback(() => {
		console.log(email, password);
		dispatch(loginRequestAction({ email, password }));
	}, [email, password]); // id, password가 바뀌면 새로운 함수가 생성되어 onSubmitForm 변수에 할당된다
	// 만약 id와 password의 값이 동일하다면 다음 렌더링 때에도 이 함수를 재사용한다.

	const style = useMemo(() => ({ marginTop: 10 }), []); //리렌더링해도 계속 같은 객체가 유지된다. 캐싱(저장)해줬기 때문
	//리렌더링 최적화 해줍니다~

	//return 부분이 virtual DOM 이전 컴포넌트 지금 컴포넌트의 vDOM을 비교해서 바뀐 부분만 리렌더링한다.
	return (
		<FormWrapper onFinish={onSubmitForm}>
			<div>
				<label htmlFor="user-email">이메일</label>
				<br />
				<Input
					type="email"
					name="user-email"
					value={email}
					onChange={onChangeEmail}
					required
				/>
			</div>
			<div>
				<label htmlFor="user-password">비밀번호</label>
				<br />
				<Input
					type="password"
					name="user-password"
					value={password}
					onChange={onChangePassword}
					required
				/>
			</div>
			<ButtonWrapper style={style}>
				<Button type="primary" htmlType="submit" loading={logInLoading}>
					로그인
				</Button>
				<Link href="/signup">
					<a>
						<Button>회원가입</Button>
					</a>
				</Link>
			</ButtonWrapper>
		</FormWrapper>
	);
};

export default LoginForm;
