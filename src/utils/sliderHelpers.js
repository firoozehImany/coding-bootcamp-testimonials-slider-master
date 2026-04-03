export const getNextIndex = (current, length) => 
  current === length - 1 ? 0 : current + 1;

export const getPrevIndex = (current, length) => 
  current === 0 ? length - 1 : current - 1;