import { useEffect, useState } from 'react';

import CountButton from '~/components/countButton';

const Count = () => {
  const [count, setCount] = useState(0);

  // const handleCountPlus = () => {
  //   setCount((currentCount) => {
  //     return currentCount + 1;
  //   });
  // };

  // 설정된 시간 후에 실행하는것 setTimeout
  const handleCountPlus = () => {
    setTimeout(() => {
      setCount((currentCount) => {
        return currentCount + 1;
      });
    }, 1000);
  };

  const handleCountMinus = () => {
    setCount((currentCount) => {
      return currentCount - 1;
    });
  };

  // 설정된 시간 마다 실행하는 것 setInterval
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     handleCountPlus();
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //     console.log('타이머 정리');
  //   };
  // }, []);

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
        className="cursor-pointer bg-red-100 p-[20px] hover:bg-red-200"
      />
    </div>
  );
};

export default Count;
