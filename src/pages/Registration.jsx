import { useState } from 'react';

const RegistrationPage = () => {
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
		// console.log(password != '' && passwordRepeat != '' && password != passwordRepeat);
		if (password != '' && passwordRepeat != '' && password != passwordRepeat){
			setError('Пароли не совпадают');
			
		}
		else if (name === '' || password === '' || passwordRepeat === '') {
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
						display: submitted ? '' : 'none', color: 'green'
					}}>
					<h1>Пользователь {name} успешно зарегистрирован</h1>
				</div>
			);
		}
	};

	//Showing error message if error is true
	const errorMessage = () => {
		return (
			<h1>{error}</h1>
		);
	};

	return (
		<div className="form_container">

			{/* Calling to the methods */}
			{/* <div className="messages"> */}
				{/* {errorMessage()} */}
				{/* {successMessage()} */}
				{/* {confirmPass()} */}
			{/* </div> */}
			<img class="form-img" src="../src/assets/images/reg.png" alt="" />

			<div className="form_box">

				<div className='form_box-header'>
					<label className="label form_box-header-text" >Welcome to the<br></br> Code Wars! </label>
				</div>

				<form>
					<label className="label-top" >CREATE ACCOUNT</label>
					{/* Labels and inputs for form data */}

					<div className='input_box'>
						
						<input onChange={handleName} className="input" value={name} type="text" placeholder="username" />

						<input onChange={handlePassword} className="input" value={password} type="password" placeholder="password"/>

						<input onChange={handlePasswordRepeat} className="input" value={passwordRepeat} type="password" placeholder="repeat password"/>	
					
					</div>
					
					<div className="label mes">{errorMessage()}{successMessage()}</div>

					<button onClick={handleSubmit} className="btn"
							type="submit">
						Login in
					</button>
				</form>
			</div>
		</div>
	);
}

export default RegistrationPage
