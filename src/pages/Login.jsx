import { useState } from 'react';

const LoginPage = () => {
    
	// States for registration
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState('');

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	// Handling the passwordRepeat change
	const handlePasswordRepeat = (e) => {
		setPasswordRepeat(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(password != passwordRepeat)
		if (name === '' || password === '') {
			setError('Не все поля заполнены');
		} else {
			setSubmitted(true);
			setError('');
		}
	};

	// Showing success message
	const successMessage = () => {
			return (
				<div
					className="success"
					style={{
						display: submitted ? '' : 'none',
					}}>
					<h1>Пользователь {name} успешно зарегистрирован</h1>
				</div>
			);
	};

	//Showing error message if error is true
	const errorMessage = () => {
		return (
			<h1>{error}</h1>
		);
	};

	return (
		<div className="form">
			<div>
				<h1>Регистрация пользователя</h1>
			</div>

			{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
				{successMessage()}
				{/* {confirmPass()} */}
			</div>

			<form>
				{/* Labels and inputs for form data */}
				<label className="label">Имя пользователя</label>
				<input onChange={handleName} className="input"
					value={name} type="text" />

				<label className="label">Пароль</label>
				<input onChange={handlePassword} className="input"
					value={password} type="password" />

				<button onClick={handleSubmit} className="btn"
						type="submit">
					Войти
				</button>
			</form>
		</div>
	);
}
export default LoginPage