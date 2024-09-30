import Navbar from "../../modules/core/components/Navbar";
import Menu from "../../modules/core/components/Menu";
import InitialContent from "./layout/InitialContent";
import Carousel from "./components/Carousel";
import ContainerCarousel from "../../modules/card/components/ContainerCarousel";
import Footer from "../../modules/core/components/Footer";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <Carousel />
        </div>
        <ContainerCarousel productSearched="Iphone" title="Iphones"/>
        <ContainerCarousel productSearched="mac" title="macs"/>
        <ContainerCarousel productSearched="asus" title="asus"/>
        <ContainerCarousel productSearched="samsung" title="samsung"/>
        <Footer />
      </div>
      {/* <InitialContent /> */}
    </>
  );
};

export default HomePage;
