import "./App.css";
import { useContext } from "react";
import VerkkokauppaHeader from "./components/VerkkokauppaHeader";
import VerkkokauppaFooter from "./components/VerkkokauppaFooter";
import TuoteNostot from "./components/Products/TuoteNostot";
import Kirjautuminen from "./components/Products/Aside/Kirjautuminen";
import LoggedIn from "./components/Products/Aside/LoggedIn";
import AuthContext from "./context/auth-context";
import Pikaostoskori from "./components/Products/Aside/Pikaostoskori";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="page">
      <VerkkokauppaHeader />
      <main className="shop-main">
        <TuoteNostot />
        {/* Renderöidään joko kirjautumisvaihtoehto tai ulos kirjautuminen */}
        {!authCtx.isLoggedIn && <Kirjautuminen />}
        {authCtx.isLoggedIn && <LoggedIn />}
        <Pikaostoskori />
      </main>
      <VerkkokauppaFooter />
    </div>
  );
}

export default App;
