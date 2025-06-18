import { useEffect, useState } from 'react';

// Q5: 버튼을 눌렀을 때 클릭 횟수를 저장하고, 5번이 되면 콘솔에 "5번 클릭!"을 출력하는 컴포넌트
const Q5 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 5) {
      console.log('5번 눌렀음');
    }
  }, [count]);

  return (
    <div>
      <p>클릭 횟수: {count}</p>
      <button onClick={handleClick}>클릭하기</button>
    </div>
  );
};

export default Q5;
