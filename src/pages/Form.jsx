import { useState } from 'react';

export default function Form() {

	// States for registration
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');

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
		if (password != '' && passwordRepeat != '' && password != passwordRepeat){
			setError('Пароли не совпадают');
		}
		if (name === '' || password === '' || passwordRepeat === '' || password != passwordRepeat) {
			setError('Не все поля заполнены');
		} else {
			setSubmitted(true);
			setError('');
		}
	};

	// Showing success message
	const successMessage = () => {
		if (password === passwordRepeat){
			return (
				<div
					className="success"
					style={{
						display: submitted ? '' : 'none',
					}}>
					<h1>User {name} successfully registered!!</h1>
				</div>
			);
		}
	};

	// const confirmPass = () => {
	// 	if (password != '' && passwordRepeat != '' && password != passwordRepeat){
	// 		return <h1>"Пароли не совпадают"</h1>
	// 	}
	// };

	//Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h1>Please enter all the fields</h1>
			</div>
		);
	};

	return (
		<div className="form">
			<div>
				<h1>User Registration</h1>
			</div>

			{/* Calling to the methods */}
			<div className="messages">
				
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

				<label className="label">Повтор пароля</label>
				<input onChange={handlePasswordRepeat} className="input"
					value={passwordRepeat} type="password" />	

				<label className="label">{errorMessage()}</label>

				<button onClick={handleSubmit} className="btn"
						type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
