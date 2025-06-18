// // for 반복문
// for (let i = 0; i < 10; i++) {
//   console.log('지금 현재 i 값은', i, '입니다.');
// }

// // while 반복문
// let j = 10;
// while (j < 10) {
//   console.log('지금 현재 j 값은', j, '입니다.');
//   j++;
// }

// // do while 반복문
// let k = 10;
// do {
//   console.log('지금 현재 k 값은', k, '입니다.');
//   k++;
// } while (k < 10);

const person = {
  name: '황지민',
  age: 29,
  job: '개발자',
};

// for (key in person) {
//   if (key === 'age') {
//     if (person[key] > 30) {
//       console.log('30살 초과인 사람');
//     } else {
//       console.log('30살 미만인 사람');
//     }
//   }
// }

const persons = {
  홍길동: {
    age: 29,
    job: '개발자',
    sex: '남',
    height: 180,
  },
  홍지민: {
    age: 27,
    job: '학생',
    sex: '여',
    height: 165,
  },
  홍동길: {
    age: 35,
    job: '선생님',
    sex: '남',
    height: 174,
  },
};

// 실습: 나이가 30살 미만이고 여자인 사람을 찾고싶다. 조건문을 만들어주시고 출력을 해주세요.
for (i in persons) {
  // 정답 1
  for (j in persons[i]) {
    if (j === 'age' && persons[i][j] < 30) {
      if (persons[i]['sex'] === '여') {
        console.log('나이가 30살 미만이고 여자인 사람', i);
      }
    }
  }

  // 정답 2
  if (persons[i].age < 30 && persons[i].sex === '여') {
    console.log('나이가 30살 미만이고 여자인 사람', i);
  }
}
