import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext([]);

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  // Al cargar la página, verificamos si hay una sesión guardada en localStorage
  const init = async () => {
    const savedLogin = await localStorage.getItem("isLoggedIn");
    const info =  localStorage.getItem("myInfo");
    if (info) {
      setUser(JSON.parse(info));
      if (savedLogin === "true") {
        setLogin(true);
      }
    }
    return  savedLogin == null ? false : savedLogin;
  };

  const fetchUser = async () => {};

  const saveMyInfo = async (obj) => {
    localStorage.setItem("myInfo", JSON.stringify(obj));
    localStorage.setItem("isLoggedIn", true);
    setUser(obj);
    setLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("myInfo");
    localStorage.removeItem("isLoggedIn");
    setUser({});
    setLogin(false);
  };

  useEffect(() => {
    init();
    fetchUser();
  }, []);
  return (
    <LoginContext.Provider value={{ login,setLogin, saveMyInfo, user, logout, init }}>
      {children}
    </LoginContext.Provider>
  );
};
