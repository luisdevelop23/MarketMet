import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext([]);

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  // Al cargar la página, verificamos si hay una sesión guardada en localStorage
  useEffect(() => {
    const savedLogin = localStorage.getItem("isLoggedIn");
    const info = localStorage.getItem("myInfo");
    if (info) {
      setUser(JSON.parse(info));
      if (savedLogin === "true") {
        setLogin(true);
      }
    }
  }, []);

  // Cada vez que cambie el estado del login, actualizamos localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", login);
  }, [login]);

  const fetchUser = async () => {
    const { data } = await getProducts();
    setUser(data[0]);
  };

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

  return (
    <LoginContext.Provider value={{ login, setLogin, saveMyInfo, user,  logout }}>
      {children}
    </LoginContext.Provider>
  );
};
