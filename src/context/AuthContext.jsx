import { createContext, useEffect, useState } from "react";
import supabase from "../services/supabase";

export const AuthContext = createContext([]);
export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const id = session?.user.id;
  //   console.log("user",session?.user.id)

  const fetchUser = async () => {
    if (!id) {
      return;
    }
    try {
      let { data, error } = await supabase
        .from("users")
        .select("names,surnames,phone,document")
        .eq("auth_id", id);
        console.log(data[0])
      setUser(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //? Obtener la sesión actual
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    //? Escuchar cambios en el estado de autenticación
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    //? Limpiar la suscripción al desmontar el proveedor
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    fetchUser();
    console.log("user", user);
  }, [session]);

  return (
    <AuthContext.Provider value={{ session, user }}>
      {children}
    </AuthContext.Provider>
  );
};
