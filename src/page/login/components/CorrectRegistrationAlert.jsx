
const CorrectRegistrationAlert = ({setShowRegister}) => {
  return (
    <section className="absolute z-20 mt-[4rem] flex h-[100vh] w-full items-center justify-center bg-[rgba(38,83,48,0.58)]">
      <div className="relative  w-10/12 md:w-8/12 xl:w-6/12 rounded-xl bg-green-400 h-[150px] flex flex-col items-center justify-center">
        <button onClick={() => setShowRegister(false)} className="absolute right-4 top-2 ">
          <span className="icon-[simple-line-icons--close] text-[30px]" />
        </button>
        <h1 className="nnf-semi-bold text-center text-2xl py-5">
          correct registration
        </h1>
        <p className="text-center">
          check your emails, you will find one from supabase and confirm your
          email
        </p>
      </div>
    </section>
  );
};

export default CorrectRegistrationAlert;
