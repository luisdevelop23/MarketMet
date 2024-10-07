import Navbar from "../../modules/core/components/Navbar";
import Menu from "../../modules/core/components/Menu";
import InitialContent from "./layout/InitialContent";
import Carousel from "./components/Carousel";
import ContainerCarousel from "../../modules/card/components/ContainerCarousel";
import Footer from "../../modules/core/components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col bg-red-00 w-9/12 mx-auto  mt-16">
        <div className="flex items-center justify-center mt-6">
          <Carousel />
        </div>
        <ContainerCarousel productSearched="Iphone" title="Iphones"/>
        <ContainerCarousel productSearched="mac" title="macs"/>
        <ContainerCarousel productSearched="asus" title="asus"/>
        <ContainerCarousel productSearched="samsung" title="samsung"/>
      </div>
      {/* <InitialContent /> */}
    </>
  );
};

export default HomePage;
