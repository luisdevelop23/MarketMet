import supabase from "../../services/supabase";

// Función para loguear al usuario
async function UserAccess({ email, password }) {
  //? Paso 1: Busca al usuario en la base de datos por email
  const { data: user, error } = await supabase
    .from("users")
    .select(
      "email, username, names, surnames, imgprofile,password,document,phone",
    )
    .eq("email", email)
    .single();

  console.log(user);
  if (error || !user) {
    return { data: null, error: "Usuario no encontrado" };
  }

  if (password !== user.password) {
    console.log("Las contraseñas no coinciden");
    return { data: null, error: "Contraseña incorrecta" };
  }

  // Paso 3: Si el email y la contraseña son correctos, retorna el usuario
  return { data: user, error: null };
}

export default UserAccess;
