import { useMemo, useState } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleMultiply = (num: number) => {
    console.log('handleMultiply 함수 실행');
    return num * 2;
  };

  // 복잡한 연산이 반복적으로 수행되지 않게 하기 위한 훅(최적화 작업)
  // 의존성 배열 안에 있는 값이 변경될때만 실행
  const doubled = useMemo(() => {
    return handleMultiply(count);
  }, [count]);

  //   const doubled = handleMultiply(count);

  return (
    <div>
      <h1>useMemo 예제</h1>
      <div>계산 결과 : {doubled}</div>
      <button onClick={() => setCount(count + 1)} className="bg-blue-100 p-3">
        카운트 증가
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="텍스트 변경"
      />
    </div>
  );
};

export default UseMemo;
