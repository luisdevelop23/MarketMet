import { createContext, useEffect, useState } from "react";
import { fetchMyInfo } from "../services/user/FetchMyInfo";
import { AuthContext } from "./AuthContext";

export const LoginContext = createContext([]);

export const LoginProvider = ({ children }) => {
  const { id } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    if (!id) {
      return;
    }
    try {
      const { data, error } = await fetchMyInfo(id);
      setUser(data[0]);
      return { data, error };
    } catch (error) {
      console.log(error);
      return { data: null, error: error.message };
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);
  return (
    <LoginContext.Provider value={{  user }}>
      {children}
    </LoginContext.Provider>
  );
};
