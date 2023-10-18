import { useState } from 'react';

const LoginPage = () => {
    // States for registration
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
    const [file, setFile] = useState<File>('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

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

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
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
				<h1>User {name} successfully registered!!</h1>
			</div>
		);
	};

	// Showing error message if error is true
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

    // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //       setFile(e.target.files[0]);
    //     }
    //   };
    
      const handleUploadClick = () => {
        if (!file) {
          return;
        };

	return (
		<div className="form">
			<div>
				<h1>User Registration</h1>
			</div>

			{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>

			<form>
				{/* Labels and inputs for form data */}
				<label className="label">Имя пользователя</label>
				<input onChange={handleName} className="input"
					value={name} type="text" required/>

				<label className="label">Пароль</label>
				<input onChange={handlePassword} className="input"
					value={password} type="password" required/>

                <label className="label">Аватарка</label>
                <input type="file" onChange={handleFileChange} />

				<button onClick={handleSubmit} className="btn"
						type="submit">
					Submit
				</button>
			</form>
		</div>
      
	);
    }
}
export default LoginPage