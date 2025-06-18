// 비동기 (어떤 작업이 끝날 때까지 기다리지 않고 다음 작업을 실행하는 방식)
// console.log('1');
// setTimeout(() => {
//   console.log('2');
// }, 1000);

// console.log('3');

// async/await
const ws = (msg, ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, ms),
  );
};

const run = async () => {
  await ws('1', 1000);
  await ws('2', 2000);
  await ws('3', 1000);
};

run();
