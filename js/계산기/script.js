const display = document.getElementById('display'); // input 태그(값이 보이는 곳)
const buttons = document.querySelectorAll('button'); // 모든 버튼

let current = ''; // 현재값
let operator = ''; // 연산값
let prev = ''; // 이전값

buttons.forEach((btn) => {
  // 가져온 button들을 반복문을 돌린다.
  btn.addEventListener('click', () => {
    // button 하나하나 클릭 이벤트를 준다
    const value = btn.textContent; // 버튼 하나하나의 text 값

    if (value === 'C') {
      // 초기화 버튼을 눌렀을때
      current = ''; // 현재값 초기화
      prev = ''; // 이전값 초기화
      operator = ''; // 연산값 초기화
      display.value = ''; //input태그 값 초기화
    } else if (['+', '-', 'x', '÷'].includes(value)) {
      // 연산 버튼들을 눌렀을때
      if (current === '') {
        // 현재 값이 없다면 정지
        return;
      }
      operator = value; // 연산값을 operator에 값을 넣어준다
      prev = current; // 현재 값을 이전 값에 적용
      current = ''; // 현재 값은 빈 문자열로 적용
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

      display.value = result; // input태그 안에 result 값을 넣어준다
      current = result.toString(); // result값을 문자열로 형변환 후 현재값에 적용
      operator = ''; // 연산값 초기화
      prev = ''; // 이전값 초기화
    } else {
      current += value; // 문자열이므로 더했을때 문자열로 더해짐
      display.value = current; // input태그 안에 현재 값을 적용
    }
  });
});
