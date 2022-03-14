import React, { useState } from "react";
import "./Login.css";

const Login = ({ setToken }) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">sign in</h1>
        <form className="login__form" action="">
          <label>
            <p>Логин</p>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="login__name"
              type="text"
            />
          </label>
          <label>
            <p>Пароль</p>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="login__password"
              type="password"
            />
          </label>
          <button
            className="login__submit"
            onClick={() => {
              setToken(name);
            }}
          >
            Готово
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
