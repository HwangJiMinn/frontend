import { useState } from 'react';

const Q1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>숫자: {count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default Q1;
