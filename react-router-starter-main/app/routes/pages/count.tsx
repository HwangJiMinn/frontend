import { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const handleCountPlus = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  const handleCountMinus = () => {
    setCount((currentCount) => {
      return currentCount - 1;
    });
  };

  return (
    <div className="flex h-[500px] flex-col items-center justify-center gap-[20px] bg-[lightgray]">
      <div>{count}</div>
      <button
        className="cursor-pointer bg-blue-100 p-[20px] hover:bg-blue-200"
        onClick={() => {
          handleCountPlus();
        }}
      >
        +1 버튼
      </button>

      <button
        className="cursor-pointer bg-blue-100 p-[20px] hover:bg-blue-200"
        onClick={() => {
          handleCountMinus();
        }}
      >
        -1 버튼
      </button>
    </div>
  );
};

export default Count;
