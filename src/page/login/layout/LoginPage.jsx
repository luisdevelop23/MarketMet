import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserAccess from "../../../modules/auth/UserAccess";
import { LoginContext } from "../../../context/LoginContext";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { saveMyInfo } = useContext(LoginContext);

  const navigate = useNavigate();

  const Access = async () => {
    const { data, error } = await UserAccess({ email, password });
    if (data) {
      saveMyInfo(data);
      navigate("/");
    } else {
      setError(error);
    }
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
    <div className="flex md:h-[58vh] h-[70vh] mt-10 md:mt-0  w-full items-center justify-center">
      <div className="flex lg:w-5/12 w-full justify-center">
        <div className="relative flex lg:w-7/12 flex-col rounded-xl border-2 bg-blue-0 shadow-2xl">
          <h1 className="nnf-bold py-6 text-center text-4xl">Login</h1>
          {error ?? (
            <div className="flex flex-col items-end px-8 text-center text-red-500">
              <button
                className="flex w-1/12 items-center justify-center rounded-full bg-red-200 text-xl"
                onClick={() => setError(false)}
              >
                <span className="icon-[tabler--x]"></span>
              </button>
              <p className="w-full text-left">{error}</p>
            </div>
          )}
          <div className="relative mx-8 flex flex-col pt-7">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-t-xl border-b-2 py-2 pl-4 outline-none"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-b-xl py-2 pl-4 outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute bottom-0 right-4 text-xl text-gray-2"
            >
              {showPassword ? view(true) : view(false)}
            </button>
          </div>
          <button
            onClick={Access}
            className="nnf-semi-bold mx-8 mt-12 rounded-2xl bg-blue-1 py-3 text-lg text-white hover:bg-blue-2"
          >
            Login
          </button>
          <div className="mt-10 border-t-2 bg-blue-c py-4 pl-6">
            <h2 className="nnf-semi-bold">
              Don't you have an account?
              <Link
                to={"/register"}
                className="nnf-extra-bold pl-2 text-blue-1 underline decoration-1"
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
