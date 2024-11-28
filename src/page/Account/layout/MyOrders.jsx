import { useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  return (
    <div className="m-4 w-11/12 flex-col rounded-xl bg-white p-6 shadow-lg md:w-9/12">
      <div className="">
        <h1 className="nnf-semi-bold pb-5 text-2xl">My Orders</h1>
        {orders.length === 0 ? (
          <h1 className="nnf-semi-bold py-5 text-2xl text-gray-500 h-80">
            You don't have orders
          </h1>
        ) : (
          <div className="grid grid-cols-1 gap-10 overflow-auto p-4 h-80"></div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
