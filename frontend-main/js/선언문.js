// 레거시 키워드
var a = 1;
var a = 2; // 재선언 가능

// 변수 생성 키워드 (재선언 불가, 재할당 가능)
let b = 1;
console.log('첫번째 b =', b);

b = 2;
console.log('두번째 b =', b);

b = 1;
console.log('세번째 b =', b);
// 상수 생성 키워드 (재선언 불가, 재할당 불가)
const c = 1;
