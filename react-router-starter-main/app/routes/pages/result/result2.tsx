import { useEffect, useState } from 'react';

// A2
const A2 = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    console.log('입력값:', text);
  }, [text]);

  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

export default A2;
