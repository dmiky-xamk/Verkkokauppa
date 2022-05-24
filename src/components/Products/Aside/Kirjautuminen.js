import { useState, useContext } from "react";
import AuthContext from "../../../context/auth-context";
import "./Kirjautuminen.css";

function Kirjautuminen() {
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginInfoValid, setIsLoginInfoValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setIsFormSubmitted(true);

    if (
      username !== authCtx.dummyAccount.username ||
      password !== authCtx.dummyAccount.password
    ) {
      setIsLoginInfoValid(false);

      setUsername("");
      setPassword("");

      return;
    }

    setIsLoginInfoValid(true);
    authCtx.onLogin();
  };

  return (
    <form onSubmit={submitHandler} className="shop-login">
      <div>
        <label htmlFor="username">Käyttäjänimi</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={usernameChangeHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Salasana</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={passwordChangeHandler}
          required
        />
      </div>
      {/* Renderöidään error-viesti jos väärä tunnus / salasana */}
      {isFormSubmitted && !isLoginInfoValid && (
        <p className="login-error">Käyttäjänimi tai salasana oli väärin.</p>
      )}

      <button type="submit">Kirjaudu</button>
    </form>
  );
}

export default Kirjautuminen;
