import { useEffect, useState } from 'react';

// A5: 5번 누르면 콘솔 띄우는 useEffect 예제
const A5 = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount === 5) {
      console.log('5번 클릭했습니다!');
    }
  }, [clickCount]);

  return (
    <div>
      <p>클릭 횟수: {clickCount}</p>
      <button onClick={() => setClickCount((prev) => prev + 1)}>클릭하기</button>
    </div>
  );
};

export default A5;
