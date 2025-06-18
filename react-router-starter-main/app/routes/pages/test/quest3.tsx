//문제 3. 버튼 누르면 3초 후 메시지 표시

import { useState } from 'react';

const Q3 = () => {
  const [isRendering, setIsRendering] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setIsRendering(true);
    }, 3000);
  };
  return (
    <>
      <button onClick={handleClick}>누르기</button>
      {isRendering && <div>짜잔</div>}
    </>
  );
};

export default Q3;
