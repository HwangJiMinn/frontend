import { useEffect, useState } from 'react';

// 문제 2. input 값을 state로 저장하고, 변경 시 콘솔에 출력
const Q2 = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('1');

  const handleInput = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log('text', text2);
  }, [text2, text]);

  return (
    <input
      placeholder="내용을 입력하세요"
      value={text}
      onChange={(e) => handleInput(e)}
    />
  );
};

export default Q2;
