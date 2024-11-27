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
  const { user, session, login, loading } = useContext(AuthContext);

  useEffect(() => {
    // Espera hasta que la carga inicial haya terminado
    if (!loading && !login) {
      navigate("/login");
    }
  }, [loading, login, navigate]);

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

  if (loading) {
    return <div>Cargando...</div>; // Muestra un mensaje mientras carga
  }

  return (
    <header className="flex w-full items-start h-min-[100vh]  justify-center bg-slate-100 ">
      <div className="flex w-full flex-col lg:w-10/12 xl:w-9/12 pt-6 ">
        {session && user ? (
          <h1 className="nnf-semi-bold pb-4 text-3xl ml-4">
            Hello, {user.names}
            <span className="icon-[twemoji--raising-hands-medium-light-skin-tone]" />
          </h1>
        ) : (
          <h1 className="nnf-semi-bold pb-4 text-3xl mr-4">
            hello new users
            <span className="icon-[twemoji--raising-hands-medium-light-skin-tone]" />
          </h1>
        )}
        <div className="w-full ">
          {/* Opciones de mis listas */}
          <div className="flex flex-col items-start md:flex-row ">
            <div className="nnf-semi-bold m-4 flex w-11/12 flex-col  rounded-xl bg-white shadow-lg md:w-3/12">
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
            {session && renderOptions()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyAccount;
