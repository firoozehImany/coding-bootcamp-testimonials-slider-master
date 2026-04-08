import { useState } from 'react';
import { getNextIndex, getPrevIndex } from '../utils/sliderHelpers';

export const useSlider = (totalItems) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next'); // 'next' یا 'prev'

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex(curr => getNextIndex(curr, totalItems));
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex(curr => getPrevIndex(curr, totalItems));
  };

  return { currentIndex, direction, handleNext, handlePrev };
};