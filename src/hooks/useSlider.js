import { useState } from "react";
import { getNextIndex, getPrevIndex } from "../utils/sliderHelpers";

export const useSlider = (totalItems) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAnimated, setIsAnimated] = useState(false);

  const handleNext = () => {
    setIsAnimated(true);
    setDirection("next");
    setCurrentIndex((curr) => getNextIndex(curr, totalItems));
  };

  const handlePrev = () => {
    setIsAnimated(true);
    setDirection("prev");
    setCurrentIndex((curr) => getPrevIndex(curr, totalItems));
  };

  return { currentIndex, direction, isAnimated, handleNext, handlePrev };
};
