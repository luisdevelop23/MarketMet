const LoadingCards = ({ amount = 7 }) => {
  const loadingArray = Array.from({ length: amount });

  return (
    <>
      {loadingArray.map((_, index) => (
        <div key={index} className="flex h-full flex-col rounded-lg">
          <div className="col-span-1 mx-2 flex flex-col justify-around rounded-lg border-2 border-slate-200 bg-white pt-4">
            {/* Placeholder de imagen */}
            <div className="flex h-[150px] w-full items-center justify-center">
              <div className="h-[150px] w-full animate-pulse rounded-lg bg-gray-300"></div>
            </div>
            {/* Placeholder de texto */}
            <div className="flex flex-col gap-1 px-4">
              <div className="h-3 w-full animate-pulse rounded bg-gray-300"></div>
              <div className="h-3 w-full animate-pulse rounded bg-gray-300"></div>
              <div className="h-3 w-1/3 animate-pulse rounded bg-gray-300"></div>
            </div>
            {/* Placeholder de precio e ícono */}
            <div className="mt-2 flex flex-grow flex-col items-center">
              <div className="flex w-full items-start justify-around gap-4">
                <div className="h-3 w-1/3 animate-pulse rounded bg-gray-300"></div>
                <div className="h-3 w-1/4 animate-pulse rounded bg-gray-300"></div>
              </div>
            </div>
            {/* Placeholder de botón */}
            <div className="mt-2 h-8 w-full animate-pulse rounded-b-lg bg-gray-300"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingCards;
