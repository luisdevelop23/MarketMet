import React from "react";
import Navbar from "../../modules/core/components/Navbar";
import Menu from "../../modules/core/components/Menu";
import InitialContent from "./layout/InitialContent";
import Carousel from "./components/Carousel";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default HomePage;
