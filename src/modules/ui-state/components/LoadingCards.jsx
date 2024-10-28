
const LoadingCards = ({amount}) => {
  // console.log("cantidad de cards:", amount)
  let TOTALLOADING;
  if (amount === 0 || amount === undefined) {
    TOTALLOADING = Array.from({ length: 8 });
  }else{
    TOTALLOADING = Array.from({ length: amount });
  };
  return (
    <>
      {TOTALLOADING.map((_, index) => (
        <div key={index} className="flex h-full flex-col rounded-lg">
          <div className="col-span-1 mx-2 flex flex-col justify-around rounded-lg border-2 border-slate-200 bg-white pt-4">
            <div className="flex h-[150px] w-full items-center justify-center">
              <div className="h-[150px] w-full   animate-pulse rounded-lg bg-gray-300"></div>
            </div>
            <div className="px-4 flex flex-col">
              <span className="mt-1 w-full  animate-pulse rounded-lg bg-gray-300 text-[10px] text-gray-300">
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
            <span className="mt-1 w-full animate-pulse rounded-b-lg bg-gray-300 py-3 text-[10px] text-gray-300">
              "
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingCards;
