import supabase from "../../services/supabase";
import bcrypt from "bcryptjs"; // Asegúrate de instalar bcryptjs

// Función para loguear al usuario
async function UserAccess({ email, password }) {
  //? Verificar si el usuario existe
  const { data: user, error } = await supabase
    .from("users")
    .select("id, email, username, password")
    .eq("email", email)
    .single();

  if (error || !user) {
    return { data: null, error: "Usuario no encontrado" };
  }

  //? Verificar la contraseña
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return { data: null, error: "Contraseña incorrecta" };
  }

  const { password: _, ...userWithoutPassword } = user;

  return { data: userWithoutPassword, error: null };
}

export default UserAccess;
