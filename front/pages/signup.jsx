import React, { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';

const ErrorMessage = styled.div`
	color: red;
`;

const Signup = () => {
	const dispatch = useDispatch();
	const { signUpLoading } = useSelector((state) => state.user);
	const [email, onChangeEmail] = useInput('');
	const [password, onChangePassword] = useInput('');
	const [nickname, onChangeNickname] = useInput('');

	const [term, setTerm] = useState('');
	const [termError, setTermError] = useState(false);
	const onChangeTerm = useCallback((e) => {
		setTerm(e.target.checked);
		setTermError(false);
	}, []);

	const [passwordCheck, setPasswordCheck] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const onChangePasswordCheck = useCallback((e) => {
		setPasswordCheck(e.target.value);
		setPasswordError(e.target.value !== password);
	}, []);

	const onSubmit = useCallback(() => {
		if (!term) {
			return setTermError(true);
		}
		dispatch({
			type: SIGN_UP_REQUEST,
			data: { email, password, nickname },
		});
		console.log(email, nickname, password);
	}, [email, password, passwordCheck, term]);

	useEffect(() => {
		if (password === passwordCheck) {
			console.log('is it working1');
			setPasswordError(false);
		} else {
			console.log('is it working 2');
			setPasswordError(true);
		}
	}, [password, passwordCheck]);
	return (
		<>
			<AppLayout>
				<Head>
					<meta charSet="utf-8" />
					<title>회원가입 | NodeBird</title>
				</Head>
				<Form onFinish={onSubmit}>
					<div>
						<label htmlFor="user-email">이메일</label>
						<br />
						<Input
							name="user-email"
							type="email"
							value={email}
							required
							onChange={onChangeEmail}
						/>
					</div>
					<div>
						<label htmlFor="user-nick">닉네임</label>
						<br />
						<Input
							name="user-nick"
							value={nickname}
							required
							onChange={onChangeNickname}
						/>
					</div>
					<div>
						<label htmlFor="user-password">패스워드</label>
						<br />
						<Input
							name="user-password"
							type="password"
							value={password}
							required
							onChange={onChangePassword}
						/>
					</div>
					<div>
						<label htmlFor="user-password-check">비밀번호체크</label>
						<br />
						<Input
							name="user-password-check"
							type="password"
							value={passwordCheck}
							required
							onChange={onChangePasswordCheck}
						/>
						{passwordError && <ErrorMessage>Invalid Password</ErrorMessage>}
					</div>
					<div>
						<Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
							팀원들은 제 말을 잘 들을 것을 맹세합니다.
						</Checkbox>
						{termError && <ErrorMessage>약관에 동의하세요.</ErrorMessage>}
					</div>
					<div style={{ marginTop: 10 }}>
						<Button type="primary" htmlType="submit" loading={signUpLoading}>
							가입
						</Button>
					</div>
				</Form>
			</AppLayout>
		</>
	);
};

export default Signup;
