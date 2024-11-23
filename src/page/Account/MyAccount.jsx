import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import MyProfile from "./layout/MyProfile";
import MyList from "./layout/MyList";
import MyOrders from "./layout/MyOrders";
import { logoutUser } from "../../Auth/logoutUser";

const MyAccount = () => {
  const navigate = useNavigate();
  const option = useParams().option;
  const { user, session } = useContext(AuthContext);

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (!session) {
        navigate("/login");
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {}, []);

  const handleLogout = async () => {
    logoutUser();
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
    <header className="flex w-full items-center justify-center">
      <div className="flex w-full flex-col md:w-9/12">
        <h1 className="nnf-semi-bold pb-4 text-3xl">
          {/* Hello, {user.names} {user.surnames} */}
          <span className="icon-[twemoji--raising-hands-medium-light-skin-tone]" />
        </h1>
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
                <span className="pr-2">Log Out</span>
                <span className="icon-[bx--log-out] text-xl" />
              </button>
            </div>
            {/* Render de mis listas */}
            {/* {user && renderOptions()} */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyAccount;
