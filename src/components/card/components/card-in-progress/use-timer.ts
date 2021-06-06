import { useEffect, useState } from 'react';

export const useTimer = (): {
  counter: number,
  second: string, 
  minute: string, 
  hour: string
} => {
  const [counter, setCounter] = useState(0);
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [hour, setHour] = useState('00');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const secondCounter = `${counter % 60}`;
      const minuteCounter = `${Math.floor(counter / 60 % 60)}`;
      const hourCounter = `${Math.floor(counter / 60 / 60 % 24)}`;

      const computedSecond = secondCounter.length === 1 ? `0${secondCounter}` : secondCounter;
      const computedMinute = minuteCounter.length === 1 ? `0${minuteCounter}` : minuteCounter;
      const computedHour = hourCounter.length === 1 ? `0${hourCounter}` : hourCounter;

      setSecond(computedSecond);
      setMinute(computedMinute);
      setHour(computedHour)

      setCounter(counter => counter + 1);
    }, 1000)

    
    return () => clearInterval(intervalId)
  }, [counter])


  return { counter, second, minute, hour }
}