import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validateEmail from "../../../modules/auth/utils/validateEmail";
import UserRegister from "../../../modules/auth/UserRegister";
import { LoginContext } from "../../../context/LoginContext";

const RegisterPage = () => {
  const { saveMyInfo } = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
   const navigate = useNavigate();


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const view = (v) => {
    if (v) {
      return <span className="icon-[iconoir--eye]"></span>;
    }
    return <span className="icon-[iconoir--eye-closed]"></span>;
  };

  const register = async () => {
    setError(false);

    if (!validateEmail(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      const { data, error } = await UserRegister({ username, email, password });
      console.log(data, error);
      if (error) {
        setError(error.message);
      }
      if (data) {
        setError(false);
        saveMyInfo(data);
        navigate("/myaccount/myprofile");
      }
    }
  };

  return (
    <div className="flex h-[58vh] w-full items-center justify-center">
      <div className="flex w-full justify-center xl:w-5/12">
        <div className="flex w-10/12 flex-col rounded-xl border-2 bg-blue-0 shadow-2xl md:w-8/12">
          <h1 className="nnf-bold py-6 text-center text-4xl">Sign up</h1>
          {error ? (
            <div className="flex flex-col items-end px-8 text-center text-red-500">
              <button
                className="flex w-1/12 items-center justify-center rounded-full bg-red-200 text-xl"
                onClick={() => setError(false)}
              >
                <span className="icon-[tabler--x]"></span>
              </button>
              <p className="w-full text-left">{error}</p>
            </div>
          ) : (
            <h2 className="nnf-semi-bold py-2 text-center text-gray-2">
              Create a free account with your email.
            </h2>
          )}
          <div className="relative mx-8 flex flex-col pt-7">
            <input
              type="text"
              placeholder="UserName"
              onChange={(e) => setUsername(e.target.value)}
              className="boder-2 rounded-t-xl border-b-2 border-gray-300 py-2 pl-4 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className={`border-b-2 py-2 pl-4 outline-none ${!isEmailValid ? "boder-2 border-red-500 bg-red-200" : "border-gray-300"}`}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-b-xl py-2 pl-4 outline-none"
              name=""
              id=""
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
            onClick={register}
            className="nnf-semi-bold mx-8 mt-12 rounded-2xl bg-blue-1 py-3 text-lg text-white hover:bg-blue-2"
          >
            Sign up
          </button>
          <div className="mt-10 border-t-2 bg-blue-c py-4 pl-6">
            <h2 className="nnf-semi-bold">
              Have an account?
              <Link
                to={"/login"}
                className="nnf-extra-bold pl-2 text-blue-1 underline decoration-1"
              >
                Log in
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
