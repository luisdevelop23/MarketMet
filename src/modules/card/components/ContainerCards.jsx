const ContainerCards = ({ children }) => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {children}
      </div>
    </section>
  );
};

export default ContainerCards;
