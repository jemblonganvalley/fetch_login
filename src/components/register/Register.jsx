import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const [same, setSame] = useState(false);

  //check apakah password sama
  useEffect(() => {
    if (inputData.password === inputData.password2) {
      setSame(true);
    } else {
      setSame(false);
    }
  }, [inputData]);

  const handleRegister = () => {
    fetch("http://localhost:5000/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputData.email,
        password: inputData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          window.location.href = "/login";
        } else {
          alert(data);
        }
      });
  };

  return (
    <section className="register">
      <h1 className="register_title">register</h1>

      <label htmlFor="email">email</label>
      <input
        type="email"
        placeholder="masukan email"
        id="email"
        onChange={(e) => {
          setInputData({
            ...inputData,
            email: e.target.value,
          });
          // console.log(inputData);
        }}
      />

      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        placeholder="masukan password"
        onChange={(e) => {
          setInputData({
            ...inputData,
            password: e.target.value,
          });
          // console.log(inputData);
        }}
      />

      <label htmlFor="password2">ulangi password</label>
      <input
        type="password"
        id="password2"
        placeholder="ulangi password"
        onChange={(e) => {
          setInputData({
            ...inputData,
            password2: e.target.value,
          });
          // console.log(inputData);
        }}
      />
      {same === false ? (
        <small style={{ color: "red" }}>password harus sama</small>
      ) : null}

      <button
        className="submit"
        disabled={!same}
        onClick={() => {
          handleRegister();
        }}
      >
        signup
      </button>
      <small>
        Already Have Account, <Link to="/login">Login Here..</Link>
      </small>
    </section>
  );
};

export default Register;
