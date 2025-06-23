import { useState } from 'react';

const Calculating = () => {
  const [current, setCurrent] = useState('');
  const [operator, setOperator] = useState('');

  const [prev, setPrev] = useState('');
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      // 초기화 버튼을 눌렀을때
      setCurrent(''); // 현재값 초기화
      setPrev(''); // 이전값 초기화
      setOperator(''); // 연산값 초기화
      setDisplay(''); //input태그 값 초기화
    } else if (['+', '-', 'x', '÷'].includes(value)) {
      // 연산 버튼들을 눌렀을때
      if (current === '') {
        // 현재 값이 없다면 정지
        return;
      }
      setOperator(value); // 연산값을 operator에 값을 넣어준다
      setPrev(current); // 현재 값을 이전 값에 적용
      setCurrent(''); // 현재 값은 빈 문자열로 적용
    } else if (value === '=') {
      // = 버튼을 눌렀을 때
      if (operator === '' || current === '' || prev === '') {
        // 현재값, 연산값, 이전값이 없을 때 정지
        return;
      }
      // 위에랑 같은거임
      // if (!operator || !current || !prev) {
      //   return;
      // }

      const a = parseFloat(prev); // 이전값이 문자열이므로 숫자로 형 변환
      const b = parseFloat(current); // 현재값이 문자열이므로 숫자로 형 변환
      let result = 0; // 계산할 값의 초기값

      if (operator === '+') {
        // 연산값이 + 일때
        result = a + b;
      } else if (operator === '-') {
        // 연산값이 - 일때
        result = a - b;
      } else if (operator === 'x') {
        // 연산값이 x 일때
        result = a * b;
      } else if (operator === '÷') {
        // 연산값이 ÷ 일때
        result = a / b;
      }

      // 위에 조건문이랑 같은거임
      //   switch (operator) {
      //     case '+':
      //       result = a + b;
      //       break;
      //     case '-':
      //       result = a - b;
      //       break;
      //     case 'x':
      //       result = a * b;
      //       break;
      //     case '÷':
      //       result = a / b;
      //       break;
      //     default:
      //       break;
      //   }

      setDisplay(result.toString()); // input태그 안에 result 값을 넣어준다
      setCurrent(result.toString()); // result값을 문자열로 형변환 후 현재값에 적용
      setOperator(''); // 연산값 초기화
      setPrev(''); // 이전값 초기화
    } else {
      const newCurrent = current + value;
      setCurrent(newCurrent); // 문자열이므로 더했을때 문자열로 더해짐
      setDisplay(newCurrent); // input태그 안에 현재 값을 적용
    }
  };

  const buttons = [
    ['7', '8', '9', '÷'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '-'],
    ['0', '+', '=', 'C'],
  ];

  return (
    <div className="flex h-[80vh] items-center justify-center bg-gray-100 text-black">
      <div className="flex w-[300px] flex-col items-center rounded-[8px] bg-white p-[20px]">
        <h1 className="mb-[21.44px] text-[32px] font-bold">간단 계산기</h1>
        <input
          type="text"
          disabled
          value={display}
          className="mb-[15px] h-[40px] w-full border border-gray-200 bg-gray-100 pr-[10px] text-right text-[20px]"
        />
        <div className="flex w-full flex-col items-center justify-center gap-[10px]">
          {buttons.map((row, index) => (
            <div className="flex w-full justify-between gap-[10px]" key={index}>
              {row.map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleButtonClick(btn)}
                  className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
          {/* <div className="flex w-full justify-between gap-[10px]">
            <button
              onClick={() => handleButtonClick('7')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              7
            </button>
            <button
              onClick={() => handleButtonClick('8')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              8
            </button>
            <button
              onClick={() => handleButtonClick('9')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              9
            </button>
            <button
              onClick={() => handleButtonClick('÷')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              ÷
            </button>
          </div>
          <div className="flex w-full justify-between gap-[10px]">
            <button
              onClick={() => handleButtonClick('4')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              4
            </button>
            <button
              onClick={() => handleButtonClick('5')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              5
            </button>
            <button
              onClick={() => handleButtonClick('6')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              6
            </button>
            <button
              onClick={() => handleButtonClick('x')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              x
            </button>
          </div>
          <div className="flex w-full justify-between gap-[10px]">
            <button
              onClick={() => handleButtonClick('1')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              1
            </button>
            <button
              onClick={() => handleButtonClick('2')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              2
            </button>
            <button
              onClick={() => handleButtonClick('3')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              3
            </button>
            <button
              onClick={() => handleButtonClick('-')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              -
            </button>
          </div>
          <div className="flex w-full justify-between gap-[10px]">
            <button
              onClick={() => handleButtonClick('0')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              0
            </button>
            <button
              onClick={() => handleButtonClick('+')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              +
            </button>
            <button
              onClick={() => handleButtonClick('=')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              =
            </button>
            <button
              onClick={() => handleButtonClick('C')}
              className="flex-1 rounded-[4px] border border-black bg-[#f5f5dc] p-[16px] text-[18px] hover:opacity-50"
            >
              C
            </button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Calculating;
