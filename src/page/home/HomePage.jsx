import ContainerCarousel from "../../modules/card/components/ContainerCarousel";
import Carousel from "../../modules/core/components/Carousel";
const HomePage = () => {
  return (
    <header className="flex w-full flex-col items-center">
      <div className="flex items-center justify-center">
        <Carousel />
      </div>
      <article className="w-11/12 items-center flex-col md:w-11/12 lg:w-11/12 xl:w-10/12">
        <ContainerCarousel productSearched="Iphone" title="Iphones" />
        <ContainerCarousel productSearched="mac" title="macs" />
        <ContainerCarousel productSearched="asus" title="asus" />
        <ContainerCarousel productSearched="samsung" title="samsung" />
      </article>
      {/* <InitialContent /> */}
    </header>
  );
};

export default HomePage;
