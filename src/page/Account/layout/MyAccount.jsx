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

  useEffect(() => {}, []);

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
      <div className="flex w-full flex-col md:w-9/12">
        <h1 className="nnf-semi-bold pb-4 text-2xl">Hello, {user.username}</h1>
        <div className="w-full">
          {/* Opciones de mis listas */}
          <div className="flex flex-col items-start md:flex-row">
            <div className="nnf-semi-bold m-4 flex w-11/12 flex-col rounded-xl bg-white shadow-lg md:w-3/12">
              <Link
                to="/myaccount/myprofile"
                className="flex items-center justify-center border-b-2 py-4 hover:text-gray-2 md:justify-start md:pl-6"
              >
                <span>My Profile</span>
              </Link>
              <Link
                to="/myaccount/mylist"
                className="flex items-center justify-center border-b-2 py-4 hover:text-gray-2 md:justify-start md:pl-6"
              >
                <span>My List</span>
              </Link>
              <Link
                to="/myaccount/myorders"
                className="flex items-center justify-center border-b-2 py-4 hover:text-gray-2 md:justify-start md:pl-6"
              >
                <span>My Orders</span>
              </Link>
              <button
                onClick={() => handleLogout()}
                className="flex items-center justify-center border-b-2 py-4 hover:text-gray-2 md:justify-start md:pl-6"
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
