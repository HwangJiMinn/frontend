// console.log(`안녕하세요 저는 ${person.name}입니다.
//  제 나이는 ${person.age}살 이고, 제 직업은 ${person.job}입니다.
//  제 취미는 ${person.hobbies.hobby1}와 ${person.hobbies.hobby2}입니다.
//  ${person.talk('앞으로 잘 부탁드립니다.')}`);

// 옅은 복사
// const person2 = person;
// console.log(person2);

// person2.name = '뢍지민';

// console.log('첫번째 옅은 복사', person);

// const person3 = Object.assign({}, person);

// person3.name = '뢍지민';
// person3.hobbies.hobby1 = '게임';

// console.log('person', person);
// console.log('person3', person3);

const person = {
  name: '황지민',
  age: 29,
  job: '개발자',
  hobbies: {
    hobby1: '개발공부',
    hobby2: {
      hobby2_1: '배드민턴',
      hobby2_2: '탁구',
    },
  },
};
// 깊은 복사
const deepCopy = (person) => {
  const result = {}; // result를 상수로 선언
  for (let key in person) {
    // 객체를 반복문 돌린다.
    if (typeof person[key] == 'object') {
      // 객체 안에 Key값의 타입이 object인지 확인
      result[key] = deepCopy(person[key]);
      // 재귀함수를 이용해서 객체를 한번 더 반복을 돌려 깊은복사를 한다
    } else {
      result[key] = person[key];
    }
  }
  return result;
};

const person4 = deepCopy(person);

console.log('깊은 복사', person4);

person4.name = '뢍지민';
person4.hobbies.hobby2 = '독서';

console.log('person', person);
console.log('person4', person4);
