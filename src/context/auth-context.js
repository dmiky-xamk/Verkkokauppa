import React, { useState } from "react";

const dummyAccount = {
  username: "testi",
  password: "testi",
};

const AuthContext = React.createContext({
  dummyAccount: dummyAccount,
  isLoggedIn: false,

  // Dummy funktiot, jotta vscoden autocomplete toimii
  onLogin: () => {},
  onLogout: () => {},
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        dummyAccount: dummyAccount,
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
