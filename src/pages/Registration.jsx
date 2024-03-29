import { useState, useEffect } from "react";

import { useFetch } from "../hooks/useFetch";

const RegistrationPage = () => {
  function Registration() {
    useEffect(() => {
      const actualBtn = document.getElementById("actual-btn");

      const fileChosen = document.getElementById("file-chosen");

      actualBtn.addEventListener("change", function () {
        fileChosen.innerHTML = this.files[0].name;
      });
    }, []);
  }

  Registration();

  const { loading, request } = useFetch();
  // States for registration
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [img, setImg] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handling the name change
  const handleImg = (e) => {
    setImg(e.target.value);
    setSubmitted(false);
  };

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
        avatar: img,
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
    if (password != "" && passwordRepeat != "" && password != passwordRepeat) {
      setError("Пароли не совпадают");
    } else if (password.length < 4) {
      setError("Пароль имеет меньше 4 символов");
    } else if (name === "" || password === "" || passwordRepeat === "") {
      setError("Не все поля заполнены");
    } else {
      setSubmitted(true);
      setError("");
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
            color: "green",
          }}
        >
          <h1>Пользователь {name} успешно зарегистрирован</h1>
        </div>
      );
    }
  };

  const errorMessage = () => {
    return <h1>{error}</h1>;
  };

  return (
    <div className="form_container">
      <img className="form-img" src="../src/assets/images/regi.png" alt="" />
      {/* Calling to the methods */}

      <div className="form_box-header">
        <p className="label form_box-header-text">
          Welcome to the<br></br> Code Wars!{" "}
        </p>
      </div>

      <form>
        <p className="label-top">CREATE ACCOUNT</p>

        <div className="input_box">
          <input
            onChange={handleName}
            className="input"
            value={name}
            type="text"
            placeholder="username"
            maxLength="16"
            required
          />

          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
            placeholder="password"
            required
          />

          <input
            onChange={handlePasswordRepeat}
            className="input"
            value={passwordRepeat}
            type="password"
            placeholder="repeat password"
            minLength="4"
          />

          <input
            onChange={handleImg}
            value={img}
            type="file"
            id="actual-btn"
            accept="image/png, image/gif, image/jpeg"
            hidden
          />
          <label htmlFor="actual-btn" id="actual-btn" className="file">
            Выберите аватар
          </label>
          <span id="file-chosen">No file chosen</span>
        </div>

        <div className="label mes">
          {errorMessage()}
          {successMessage()}
        </div>

        <button
          disabled={loading}
          onClick={handleSubmit}
          className="btn"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
