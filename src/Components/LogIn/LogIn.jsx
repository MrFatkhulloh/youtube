import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './LogIn.css';

import { Context } from './../Context/Context';

import { NavLink } from 'react-router-dom';

function Login() {
	const { setToken } = React.useContext(Context);
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const { user_email, user_password } = evt.target.elements;

		setToken({
			email: user_email.value.trim(),
			password: user_password.value.trim(),
		});
	};
	return (
		<>
			<form className='bg-white' onSubmit={handleSubmit}>
				<h1>Login</h1>
				<div className='inputWrapper'>
					<TextField
						color='success'
						required
						fullWidth
						label='Your Email'
						id='fullWidth'
						defaultValue='eve.holt@reqres.in'
						name='user_email'
					/>
				</div>
				<div className='inputWrapper'>
					<TextField
						color='success'
						required
						fullWidth
						label='Password'
						id='fullWidth-password'
						type='password'
						defaultValue='cityslicka'
						name='user_password'
					/>
				</div>
				{/* <NavLink className={'navlink'} to='/users'> */}
				<Button type='submit' variant='contained'>
					Log In
				</Button>
				{/* </NavLink> */}
			</form>
		</>
	);
}

export default Login;
