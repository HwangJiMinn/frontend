const humansArray = ['홍길돌', '김철수', '김지민'];

const objectArray = [
  {
    name: '홍길동',
  },
  {
    name: '김철수',
  },
  {
    name: '김지민',
  },
];

// // push: 마지막 배열에 추가
// array.push(6);

// // pop: 마지막 배열을 삭제
// array.pop();

// // unshift: 첫번째 배열에 추가
// array.unshift(0);

// shift: 첫번째 배열을 삭제
// array.shift();

// splice: 배열 안에 원하는 위치에 추가/삭제
// splice(시작 인덱스, 삭제할 개수, 추가값1, 추가값2)
// 추가
// array.splice(2, 0, 3);
// console.log(array);
// // 삭제
// array.splice(2, 1);

// slice: 배열 일부를 복사
// slice(복사 시작 인덱스, 선언한 인덱스 이전까지 복사)
// const slice = array.slice(0, 3);

// concat: 배열 합치기
// const array2 = [6, 7, 8];
// console.log(array.concat(array2));
// console.log([...array, ...array2]); // spread

// indexof: 배열 위치 찾기
// console.log(array.indexOf(3)); // 인덱스 위치
// console.log(array.indexOf(100)); // 값이 없으면 -1

// includes: 배열 안에 값이 있는지 확인 (참, 거짓)
// console.log(array.includes(3)); // 값이 있다면 true
// console.log(array.includes(100)); // 값이 없다면 false

// map: 조건에 따라 새로운 배열을 만들어줌
// const newArray = array.map((e) => e * 2);
// console.log(newArray);

// filter: 조건에 맞는 값만 추출(새로운 배열로 만들어줌)
// const filterArray = array.filter((e) => e % 2 === 1);
// console.log(filterArray);

// find: 조건에 맞는 첫번째 값을 반환
// const findArray = array.find((e) => e % 2 === 0);
// console.log(findArray);

// reduce: 배열의 누적 계산
// reduce((누적값, 현재값) => {})
// const totalArray = array.reduce((acc, cur) => {
//   return acc * cur;
// });
// console.log(totalArray);

// sort: 배열을 정렬
// const nonSortArray = [100, 20, 4, 3000];
// const sortArray = nonSortArray.sort();
// const realSortArray = nonSortArray.sort((a, b) => b - a);
// console.log(realSortArray);

// 반복문을 이용해서 0부터 100까지 배열 하나와 101부터 200까지 배열을 만든 후
// 두개의 배열을 합친 다음 그 합친 배열에서 짝수만 있는 배열을 만들어 주세요.
// 그리고 그 배열을 역순으로 정렬해주시고, 배열안에 모든 수를 더한 값을 출력해주세요.

const array1 = [];
const array2 = [];

for (let i = 0; i <= 100; i++) {
  array1.push(i);
}

for (let i = 101; i <= 200; i++) {
  array2.push(i);
}

// 배열 합침
const concatArray = array1.concat(array2);

// 짝수만 필터
const filterArray = concatArray.filter((e) => e % 2 === 0);

// 역순으로 정렬
const sortArray = filterArray.sort((a, b) => b - a);

// 배열 안에 값의 누적 합
const reduceArray = sortArray.reduce((acc, cur) => {
  return acc + cur;
});

// 한번에 하는 법
const oneCombo = array1
  .concat(array2)
  .filter((e) => e % 2 === 0)
  .sort((a, b) => b - a)
  .reduce((acc, cur) => {
    return acc + cur;
  });

const array = [1, 2, 3, 4, 5];

// 배열의 길이를 아는 방법
// console.log(array.length);

// for문
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// value of array
// for (const data of array) {
//   console.log(data);
// }

// forEach (데이터값, 순서(숫자로나옴))
// humansArray.forEach((data, index) => {
//   console.log(data, index);
// });

// map
// const newArray = array.map((data, index) => {
//   console.log(data, index);
//   return data * 2;
// });

const scores = [85, 90, 50, 58, 92, 82, 61, 45, 70, 74];
const newScores = [];

// scores 배열에서 60점 이상인 점수만 골라서 newScores에 넣어주시고
// 그 배열의 평균 점수를 출력해주세요. filter나 map 사용하지 않고 반복문으로 해주세요.

scores.forEach((score) => {
  if (score >= 60) {
    newScores.push(score);
  }
});

const totalScore = newScores.reduce((acc, cur) => {
  return acc + cur;
});

const average = totalScore / newScores.length;

console.log(average);
