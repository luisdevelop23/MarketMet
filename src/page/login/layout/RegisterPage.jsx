import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="flex h-[58vh] w-full items-center justify-center">
    <div className="flex w-5/12 justify-center">
      <div className="bg-blue-0 flex w-7/12 flex-col rounded-xl border-2 shadow-2xl">
        <h1 className="nnf-bold py-6 text-center text-4xl">Sign up</h1>
        <h2 className='nnf-semi-bold py-2 text-gray-2 text-center'>Create a free account with your email.</h2>
        <div className="mx-8 flex flex-col pb-12 pt-7">
            
          <input
            type="email"
            placeholder="Email"
            className="rounded-t-xl border-b-2 py-2 pl-4 outline-none"
            name=""
            id=""
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-b-xl py-2 pl-4 outline-none"
            name=""
            id=""
          />
        </div>
        <button className="nnf-semi-bold mx-8 text-lg rounded-2xl hover:bg-blue-2 bg-blue-1 py-3 text-white">
          Login
        </button>
        <div className="bg-blue-c mt-10 py-4 pl-6 border-t-2">
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
  )
}

export default RegisterPage