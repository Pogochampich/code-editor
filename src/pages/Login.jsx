import { useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const auth = useContext(AuthContext);
  const { loading, request } = useFetch();
  // States for registration
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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

  const handleLogin = async () => {
    try {
      const data = await request("http://134.0.116.26:5551/api/auth", "POST", {
        hash: password,
        username: name,
      });
      console.log(data);
      auth.login(data.access_token);
    } catch (error) {
      console.log("login error", error);
    }
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      setError("Не все поля заполнены");
    } else {
      setSubmitted(true);
      setError("");
      handleLogin();
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Пользователь {name} успешно зарегистрирован</h1>
      </div>
    );
  };

  //Showing error message if error is true
  const errorMessage = () => {
    return <h1>{error}</h1>;
  };

  return (
    <div className="form_container">
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
        {/* {confirmPass()} */}
      </div>

      <img className="form-img" src="../src/assets/images/logi.png" alt="" />

      <div className="form_box">
        <div className="form_box-header">
          <label className="label form_box-header-text">
            Welcome to the<br></br> Code Wars!{" "}
          </label>
        </div>

        <form>
          {/* Labels and inputs for form data */}
          <label className="label label-top">LOGIN ACCOUNT</label>
          <div className="input_box">
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
              placeholder="username"
            />

            <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
              placeholder="password"
            />
          </div>

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="btn"
            type="submit"
          >
            Login in
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
