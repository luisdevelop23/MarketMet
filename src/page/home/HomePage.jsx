import ContainerCarousel from "../../modules/card/components/ContainerCarousel";
import Carousel from "../../modules/core/components/Carousel";
const HomePage = () => {
  return (
    <header>
      <div className="bg-red-00 mx-auto flex w-9/12 flex-col">
        <div className="mt-6 flex items-center justify-center">
          <Carousel />
        </div>
        <ContainerCarousel productSearched="Iphone" title="Iphones" />
        <ContainerCarousel productSearched="mac" title="macs" />
        <ContainerCarousel productSearched="asus" title="asus" />
        <ContainerCarousel productSearched="samsung" title="samsung" />
      </div>
      {/* <InitialContent /> */}
    </header>
  );
};

export default HomePage;
