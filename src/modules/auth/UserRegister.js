import supabase from "../../services/supabase";
import bcrypt from "bcryptjs";

async function UserRegister({ username, email, password }) {
  try {
    //? Verificar si el usuario ya existe
    const { data: existingUser, error: existingError } = await supabase
      .from("users")
      .select("email")
      .eq("email", email)
      .single();

    if (existingUser) {
      return { data: null, error: "El usuario ya existe" };
    }

    if (existingError && existingError.code !== "PGRST116") {
      //? Maneja el error si es otro diferente al de no encontrar usuario
      return { data: null, error: existingError.message };
    }

    //? Cifrar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número recomendado de salt rounds

    //? Registrar el nuevo usuario
    const { data, error } = await supabase
      .from("users")
      .insert([{ username, email, password: hashedPassword }])
      .select();

    if (error) {
      return {
        data: null,
        error: "Error al registrar usuario: " + error.message,
      };
    }

    return { data, error: null };
  } catch (err) {
    return { data: null, error: "Error inesperado: " + err.message };
  }
}

export default UserRegister;
