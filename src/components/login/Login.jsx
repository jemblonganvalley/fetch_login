import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <section className="login">
      <h1 className="login_title">Login</h1>

      <label htmlFor="email">email</label>
      <input type="email" placeholder="masukan email" id="email" />

      <label htmlFor="password">password</label>
      <input type="password" id="password" placeholder="masukan password" />

      <button className="submit">sign-in</button>
      <small>
        Not Have account, <Link to="/register">Register Here..</Link>
      </small>
    </section>
  );
};

export default Login;
