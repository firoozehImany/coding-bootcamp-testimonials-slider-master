import { useState } from 'react';
import { getNextIndex, getPrevIndex } from '../utils/sliderHelpers';

export const useSlider = (totalItems) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex(curr => getNextIndex(curr, totalItems));
  const handlePrev = () => setCurrentIndex(curr => getPrevIndex(curr, totalItems));

  return { currentIndex, handleNext, handlePrev };
};