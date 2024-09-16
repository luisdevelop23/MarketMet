import React from "react";

const LoadingCards = () => {
  const TOTALLOADING = Array.from({ length: 8 });
  return (
    <>
      {TOTALLOADING.map((_, index) => (
        <div key={index} className="flex h-full flex-col rounded-lg">
          <div className="col-span-1 flex h-[400px] flex-col justify-between rounded-lg border-2 border-slate-100 bg-white p-4">
            <div className="flex h-[200px] w-full items-center justify-center">
              <div className="h-[200px] w-full   animate-pulse rounded-lg bg-gray-300"></div>
            </div>
            <div className="mt-2 flex flex-col">
              <span className="mt-1 w-full animate-pulse rounded-lg bg-gray-300 text-[10px] text-gray-300">
                "
              </span>
              <span className="mt-1 w-full animate-pulse rounded-lg bg-gray-300 text-[10px] text-gray-300">
                "
              </span>
              <span className="mt-1 w-3/12 animate-pulse rounded-lg bg-gray-300 text-[10px] text-gray-300">
                "
              </span>
            </div>
            <div className="mt-2 flex flex-grow flex-col items-center">
              <div className="flex w-full items-start justify-around">
                <span className="mt-1 w-5/12 animate-pulse rounded-lg bg-gray-300 text-[10px] text-gray-300">
                  "
                </span>
                <span className="mt-1 w-3/12 animate-pulse rounded-lg bg-gray-300 text-[10px] text-gray-300">
                  "
                </span>
              </div>
            </div>
            <span className="mt-1 w-full animate-pulse rounded-lg bg-gray-300 py-3 text-[10px] text-gray-300">
              "
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingCards;
