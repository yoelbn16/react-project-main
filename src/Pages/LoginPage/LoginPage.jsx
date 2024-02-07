import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Box, Grid, Typography } from '@mui/material';
import ROUTES from '../../routes/ROUTES';
import axios from 'axios';
import LoginContext from '../../store/loginContext';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { validateEmailLogin, validatePasswordLogin } from '../../validation/logInValidation';
import { storeToken } from '../../services/storageService';

const LoginPage = () => {
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const navigate = useNavigate();

	const { setLogIn } = useContext(LoginContext);
	const handleEmailChange = (e) => {
		setEmailValue(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPasswordValue(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let { data } = await axios.post('/users/login', {
				email: emailValue,
				password: passwordValue,
			});
			storeToken(data, rememberMe);
			const userData = jwtDecode(data);
			setLogIn(userData);
			toast.success('Logged In Successfully!', {
				position: 'top-right',
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
			navigate(ROUTES.HOME);
		} catch (err) {
			console.log('err from axios', err);
			toast.error('something went wrong! check your email or password', {
				position: 'top-right',
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
			setLogIn(null);
			localStorage.clear();
		}
	};
	const [emailTouched, setEmailTouched] = useState(false);

	const handleEmailBlur = () => {
		setEmailTouched(true);
		let dataFromJoi = validateEmailLogin({ email: emailValue });
		console.log('dataFromJoi', dataFromJoi);
		if (dataFromJoi.error) {
			setEmailError(dataFromJoi.error.details[0].message);
		} else {
			setEmailError('');
		}
	};
	const [passwordTouched, setPasswordTouched] = useState(false);

	const handlePasswordBlur = () => {
		setPasswordTouched(true);
		let dataFromJoi = validatePasswordLogin({ password: passwordValue });
		console.log('dataFromJoi', dataFromJoi);
		if (dataFromJoi.error) {
			setPasswordError(dataFromJoi.error.details[0].message);
		} else {
			setPasswordError('');
		}
	};
	const handleRememberMeCheck = (e) => {
		setRememberMe(e.target.checked);
	};

	return (
		<Box
			sx={{
				my: 8,
				mx: 4,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				height: '65vh',
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign In
			</Typography>
			<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
					autoFocus
					value={emailValue}
					onChange={handleEmailChange}
					onBlur={handleEmailBlur}
					error={emailValue.trim() === '' && emailTouched}
					helperText={emailValue.trim() === '' && emailTouched ? ' ' : ''}
					sx={{
						'& .MuiOutlinedInput-root': {
							'&.Mui-error fieldset': {
								borderColor: 'error.main',
							},
						},
						'& .MuiFormHelperText-root.Mui-error': {
							marginTop: 0,
							height: 0,
							overflow: 'hidden',
						},
					}}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
					value={passwordValue}
					onChange={handlePasswordChange}
					onBlur={handlePasswordBlur}
					error={passwordValue.trim() === '' && passwordTouched}
					helperText={''}
					sx={{
						'& .MuiOutlinedInput-root': {
							'&.Mui-error fieldset': {
								borderColor: 'error.main',
							},
						},
					}}
				/>
				<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" onChange={handleRememberMeCheck} checked={rememberMe} />
				<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={emailError || passwordError}>
					Sign In
				</Button>
				<Grid container>
					<Grid item xs>
						<Link to={ROUTES.HOME}>
							<Button variant="outlined" color="error">
								CANCEL
							</Button>
						</Link>
					</Grid>
					<Grid item>
						<Link to={ROUTES.REGISTER}>
							<Button variant="outlined">SIGN UP</Button>
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
export default LoginPage;
