import supabase from "../../services/supabase";

async function UserRegister({ username, email, password }) {
  console.log("register", username, email, password);
  const { data, error } = await supabase
    .from("users")
    .insert([{ username: username, email: email, password: password }])
    .select();
  return { data, error };
}

export default UserRegister;
