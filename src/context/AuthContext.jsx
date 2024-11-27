import { createContext, useEffect, useState } from "react";
import supabase from "../services/supabase";
import { fetchMyInfo } from "../services/user/FetchMyInfo";

export const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const authTokenKey = "sb-idkvgkmbkcwvdevefdlq-auth-token";

  //? Función para inicializar la sesión desde localStorage
  const init = async () => {
    try {
      const auth_token = localStorage.getItem(authTokenKey);
      if (!auth_token) {
        setLoading(false);
        return null;
      }
      const parsedSession = JSON.parse(auth_token);
      setSession(parsedSession);
      setLogin(true);
      setLoading(false);
      return parsedSession;
    } catch (error) {
      console.error("Error initializing session from localStorage:", error);
      setLoading(false);
      return null;
    }
  };

  //? Función para obtener información del usuario
  const fetchUser = async (id) => {
    if (!id) {
      return;
    }
    try {
      const { data, error } = await fetchMyInfo(id);
      if (error) {
        console.error("Error fetching user info:", error);
        return;
      }
      setUser(data[0]);
    } catch (error) {
      console.error("Unexpected error fetching user info:", error);
    }
  };

  //? Efecto para configurar la sesión actual al montar
  useEffect(() => {
    const loadSession = async () => {
      await init();
    };
    loadSession();
  }, []);

  //? Efecto para escuchar cambios en el estado de autenticación
  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      async (_event, newSession) => {
        if (newSession) {
          setSession(newSession);
          localStorage.setItem(authTokenKey, JSON.stringify(newSession));
          setLogin(true);
          fetchUser(newSession.user.id);
        } else {
          localStorage.removeItem(authTokenKey);
          setSession(null);
          setLogin(false);
          setUser(null);
        }
      },
    );

    //? Limpiar la suscripción al desmontar el proveedor
    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider  value={{ session, user, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
