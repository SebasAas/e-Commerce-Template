import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

// CSS
import '../../assets/css/login/Login.css';

// Firebase
import { auth } from '../../server/firebase';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push('/')
      })
      .catch((e) => alert(e.message))
  }

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        history.push('/')
      })
      .catch((e) => alert(e.message));
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
        </form>
        <p>Al identificarte aceptas nuestras Condiciones de uso y venta.
        Consulta nuestro Aviso de privacidad y nuestras Aviso de Cookies
          y Aviso sobre publicidad basada en los intereses del usuario.</p>
        <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}
