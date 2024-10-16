import React from "react";

const MyList = () => {
  return (
    <div className=" flex w-full justify-center items-center md:h-[60vh]">
      <div className="flex w-9/12 flex-col  ">
        <h1 className="nnf-semi-bold  text-2xl pb-4">Hello, Name FastName</h1>
        <div className="w-full ">
          {/* Opciones de mis listas */}
          <div className="flex">
            <div className="w-3/12 m-4 flex flex-col bg-white rounded-xl nnf-semi-bold shadow-lg">
              <button className="py-4  border-b-2 flex items-center pl-6 hover:text-gray-2">
                <span>My Profile</span>
              </button>
              <button  className="py-4  border-b-2 flex items-center pl-6 hover:text-gray-2">
                <span>My List</span>
              </button>
              <button  className="py-4  border-b-2 flex items-center pl-6 hover:text-gray-2">
                <span>My Orders</span>
              </button>
              <button  className="py-4   flex items-center pl-6 hover:text-gray-2">
                <span>Log Out</span>
              </button>
            </div>

            {/* Render de mis listas */}
            <div className="w-9/12 bg-white m-4 shadow-lg rounded-xl">
              <h1 className="nnf-semi-bold  text-2xl pl-4 pt-4">Details</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyList;
