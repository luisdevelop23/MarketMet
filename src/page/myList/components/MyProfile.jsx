import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";

const MyProfile = () => {
  const { login, user } = useContext(LoginContext);
  const { names, surnames, email, document, phone } = user;
  console.log(user);
  return (
    <div className="w-full p-6">
      <h1 className="nnf-semi-bold text-2xl">Personal Data</h1>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label htmlFor="name">Names:</label>
          <input
            type="text"
            value={names}
            placeholder="enter names"
            className="w-full border-b border-black outline-none"
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Sur Names:</label>
          <input
            type="text"
            value={names}
            placeholder="enter surnames"
            className="w-full border-b border-black outline-none"
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Document:</label>
          <input
            type="text"
            value={names}
            placeholder="enter document"
            className="w-full border-b border-black outline-none"
            name="name"
          />
          
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Phone:</label>
          <input
            type="text"
            value={names}
            placeholder="enter phone"
            className="w-full border-b border-black outline-none"
            name="name"
          />
        </div>
        <div className="col-span-1 flex flex-col">
          <label htmlFor="name">Email:</label>
          <h2 className="text-gray-500">{email}</h2>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <button
            disabled
            className="nnf-semi-bold w-1/2 rounded-xl bg-gray-300 py-2 text-gray-400"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
