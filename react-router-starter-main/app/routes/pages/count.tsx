import { useState } from 'react';

import CountButton from '~/components/countButton';

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
      <CountButton
        symbol="+1 버튼"
        onClick={handleCountPlus}
        // className="cursor-pointer bg-blue-100 p-[20px] hover:bg-blue-200"
      />

      <CountButton
        symbol="-1 버튼"
        onClick={handleCountMinus}
        // className="cursor-pointer bg-blue-100 p-[20px] hover:bg-blue-200"
      />
    </div>
  );
};

export default Count;
