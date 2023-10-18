import { useState } from "react";

import { useFetch } from "../hooks/useFetch";

const RegistrationPage = () => {
  const { loading, error, request } = useFetch();
  // States for registration
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState("");

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

  const handleRegister = async () => {
    try {
      const data = await request("http://134.0.116.26:5551/api/user", "POST", {
        avatar: "temp",
        hash: password,
        username: name,
      });
      console.log(data);
    } catch (error) {
      console.log("registration error", error);
    }
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password != passwordRepeat);
    if (password != "" && passwordRepeat != "" && password != passwordRepeat) {
      setErr("Пароли не совпадают");
    }
    if (
      name === "" ||
      password === "" ||
      passwordRepeat === "" ||
      password != passwordRepeat
    ) {
      setErr("Не все поля заполнены");
    } else {
      setSubmitted(true);
      setErr("");
      handleRegister();
    }
  };

  // Showing success message
  const successMessage = () => {
    if (password === passwordRepeat) {
      return (
        <div
          className="success"
          style={{
            display: submitted ? "" : "none",
          }}
        >
          <h1>User {name} successfully registered!!</h1>
        </div>
      );
    }
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: err ? "" : "none",
        }}
      >
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
        {errorMessage()}
        {successMessage()}
        {/* {confirmPass()} */}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Имя пользователя</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />

        <label className="label">Пароль</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <label className="label">Повтор пароля</label>
        <input
          onChange={handlePasswordRepeat}
          className="input"
          value={passwordRepeat}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
