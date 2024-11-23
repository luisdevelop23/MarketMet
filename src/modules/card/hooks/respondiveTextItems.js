import { useEffect, useState } from "react";

export const useResponsiveMaxLength = () => {
    const [maxLength, setMaxLength] = useState(10);
  
   useEffect(() => {
      const updateMaxLength = () => {
        const width = window.innerWidth;
        if (width <= 640) setMaxLength(15); 
        else if (width <= 1024) setMaxLength(20); 
        else setMaxLength(35);
      };
  
      updateMaxLength(); 
      window.addEventListener("resize", updateMaxLength); //? Escucha cambios en el tamaño
      return () => window.removeEventListener("resize", updateMaxLength); //? Limpia el listener
    }, []);
  
    return maxLength;
  };

  export const useResponsiveMaxRender = () => {
    const [maxItems, setMaxItems] = useState(3);
  
   useEffect(() => {
      const updateMaxItems = () => {
        const width = window.innerWidth;
        if (width <= 640) setMaxItems(2); 
        else if (width <= 1024) setMaxItems(3); 
        else setMaxItems(4);
      };
  
      updateMaxItems(); 
      window.addEventListener("resize", updateMaxItems); //? Escucha cambios en el tamaño
      return () => window.removeEventListener("resize", updateMaxItems); //? Limpia el listener
    }, []);
  
    return maxItems;
  };