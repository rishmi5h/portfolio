import { useEffect, useState } from 'react';

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export const useKonamiCode = () => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === konamiCode[count]) {
        setCount(count + 1);
        if (count + 1 === konamiCode.length) {
          setSuccess(true);
        }
      } else {
        setCount(0);
      }
    };

    window.addEventListener('keydown', keyHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, [count]);

  return success;
};

export const useLogoClickSequence = () => {
  const [clicks, setClicks] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    setClicks(clicks + 1);
    if (clicks + 1 === 3) {
      setSuccess(true);
    }
  };

  return { handleClick, success };
};
