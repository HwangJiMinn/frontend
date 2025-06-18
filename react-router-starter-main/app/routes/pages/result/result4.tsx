import { useEffect, useState } from 'react';

const A4 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <p>카운트: {count}</p>;
};

export default A4
