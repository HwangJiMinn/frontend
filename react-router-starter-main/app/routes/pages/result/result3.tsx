import { useState } from 'react';

const A3 = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setTimeout(() => setShow(true), 3000);
  };

  return (
    <div>
      <button onClick={handleClick}>누르기</button>
      {show && <p>3초 후 등장!</p>}
    </div>
  );
};

export default A3;
