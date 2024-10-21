import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";
import MyProfile from "../components/MyProfile";

const MyList = () => {
  const navigate = useNavigate();

  const { login, user } = useContext(LoginContext);

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex w-full items-center justify-center md:h-[60vh]">
      <div className="flex w-9/12 flex-col">
        <h1 className="nnf-semi-bold pb-4 text-2xl">Hello, {user.username}</h1>
        <div className="w-full">
          {/* Opciones de mis listas */}
          <div className="flex items-start">
            <div className="nnf-semi-bold m-4 flex w-3/12 h flex-col rounded-xl bg-white shadow-lg">
              <Link to="/myList/myprofile" className="flex items-center border-b-2 py-4 pl-6 hover:text-gray-2">
                <span>My Profile</span>
              </Link>
              <Link to="/myList/mylist" className="flex items-center border-b-2 py-4 pl-6 hover:text-gray-2">
                <span>My List</span>
              </Link>
              <Link to="/myList/myorders" className="flex items-center border-b-2 py-4 pl-6 hover:text-gray-2">
                <span>My Orders</span>
              </Link>
              <Link to="/login" className="flex items-center py-4 pl-6 hover:text-gray-2">
                <span>Log Out</span>
              </Link>
            </div>

            {/* Render de mis listas */}
            <div className="m-4 w-9/12 rounded-xl bg-white shadow-lg">
              <MyProfile/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
