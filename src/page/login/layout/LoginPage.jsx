import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../../services/supabase";
import { AuthContext } from "../../../context/AuthContext";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });
  }, []);

  // funcion de autentificacion con metodos de supabase, mediante email y password
  const Access = async () => {
    const { user, session, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const view = (v) => {
    if (v) {
      return <span className="icon-[iconoir--eye]"></span>;
    }
    return <span className="icon-[iconoir--eye-closed]"></span>;
  };

  return (
    <div className="mt-10 flex h-auto min-h-[70vh] w-full items-center justify-center md:mt-0 md:min-h-[58vh]">
      <div className="relative flex w-full flex-col items-center justify-center sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex w-11/12 flex-col rounded-xl border-2 bg-blue-0 shadow-2xl md:w-full">
          {/* Header */}
          <h1 className="nnf-bold py-6 text-center text-3xl md:text-4xl">
            Login
          </h1>

          {/* Error Message */}
          {error && (
            <div className="flex flex-col items-end px-6 text-center text-red-500">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-200 text-xl"
                onClick={() => setError(false)}
              >
                <span className="icon-[tabler--x]"></span>
              </button>
              <p className="mt-2 w-full text-left">{error}</p>
            </div>
          )}

          {/* Input Fields */}
          <div className="relative mx-6 flex flex-col pt-7">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-t-xl border-b-2 border-gray-300 py-2 pl-4 outline-none focus:ring-2 focus:ring-blue-1"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-b-xl py-2 pl-4 outline-none focus:ring-2 focus:ring-blue-1"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute bottom-2 right-4 text-xl text-gray-2 hover:text-blue-1"
            >
              {showPassword ? view(true) : view(false)}
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={Access}
            className="nnf-semi-bold mx-6 mt-12 rounded-2xl bg-blue-1 py-3 text-lg text-white hover:bg-blue-2"
          >
            Login
          </button>

          {/* Footer */}
          <div className="mt-10 border-t-2 bg-blue-c py-4 pl-6">
            <h2 className="nnf-semi-bold">
              Don't you have an account?
              <Link
                to={"/register"}
                className="nnf-extra-bold pl-2 text-blue-1 underline decoration-1 hover:text-blue-2"
              >
                Sign up
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
