import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../../context/LoginContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import MyProfile from "../components/MyProfile";
import MyList from "../components/MyList";
import MyOrders from "../components/MyOrders";

const MyAccount = () => {
  const navigate = useNavigate();
  const option = useParams().option;
  const { init, user, logout } = useContext(LoginContext);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await init();
      if (!isLoggedIn) {
        navigate("/login");
      }
    };
  
    checkLoginStatus();
  }, []);


  useEffect(() => {
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  

  const renderOptions = () => {
    switch (option) {
      case "myprofile":
        return <MyProfile />;
      case "mylist":
        return <MyList />;
      case "myorders":
        return <MyOrders />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <div className="flex w-full items-center justify-center md:h-[60vh]">
      <div className="flex w-9/12 flex-col">
        <h1 className="nnf-semi-bold pb-4 text-2xl">Hello, {user.username}</h1>
        <div className="w-full">
          {/* Opciones de mis listas */}
          <div className="flex items-start">
            <div className="nnf-semi-bold h m-4 flex w-3/12 flex-col rounded-xl bg-white shadow-lg">
              <Link
                to="/myaccount/myprofile"
                className="flex items-center border-b-2 py-4 pl-6 hover:text-gray-2"
              >
                <span>My Profile</span>
              </Link>
              <Link
                to="/myaccount/mylist"
                className="flex items-center border-b-2 py-4 pl-6 hover:text-gray-2"
              >
                <span>My List</span>
              </Link>
              <Link
                to="/myaccount/myorders"
                className="flex items-center border-b-2 py-4 pl-6 hover:text-gray-2"
              >
                <span>My Orders</span>
              </Link>
              <button
                onClick={() => handleLogout()}
                className="flex items-center py-4 pl-6 hover:text-gray-2"
              >
                <span>Log Out</span>
              </button>
            </div>
            {/* Render de mis listas */}
              {user && renderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
