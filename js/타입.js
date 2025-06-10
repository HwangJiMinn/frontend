const a = 1;
console.log('a 타입', typeof a);

console.log(typeof a.toString());
console.log(String(a));

const b = '1';
console.log('b 타입', typeof b);

console.log(typeof parseInt(b));
console.log(typeof Number(b));

const c = 2n; // 2^53 - 1 보다 큰 값
console.log('c 타입', typeof c);

const d = true;
console.log('d 타입', typeof d);

const e = null;
console.log('e 타입', typeof e);

const f = undefined;
console.log('f 타입', typeof f);

const g = NaN;
console.log('g 타입', typeof g);

const h = Infinity;
console.log('h 타입', typeof h);
