import React, { useState } from "react";
import car1 from '../../../assets/img/carousel-1-uw.png'
import car2 from '../../../assets/img/carousel-2-uw.png'
import car3 from '../../../assets/img/carousel-3-uw.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imágenes
  const items = [
    { id: 1, src: car1, alt: "Image 1" },
    { id: 2, src: car2, alt: "Image 2" },
    { id: 3, src: car3, alt: "Image 3" },
  ];

  // Mover a la imagen anterior
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Mover a la imagen siguiente
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center b w-full">
      <div className="relative w-full  overflow-hidden ">
        {/* Contenido del carrusel */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Botón anterior */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
        >
          &lt;
        </button>

        {/* Botón siguiente */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
        >
          &gt;
        </button>
      </div>

      {/* Dots de navegación */}
      <div className="mt-2 flex space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
