import { useState } from "react";

export const useSlider = (totalItems) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((curr) => (curr + 1) % totalItems);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((curr) => (curr - 1 + totalItems) % totalItems);
  };

  return { currentIndex, direction, handleNext, handlePrev };
};
