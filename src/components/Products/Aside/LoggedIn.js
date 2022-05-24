import { useContext } from "react";
import "./LoggedIn.css";
import AuthContext from "../../../context/auth-context";

function LoggedIn() {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.onLogout();
  };

  return (
    <div className="logged-in">
      <p>
        Olet kirjautunut sisään tunnuksella: {authCtx.dummyAccount.username}
      </p>
      <button onClick={logoutHandler}>Kirjaudu ulos</button>
    </div>
  );
}

export default LoggedIn;
