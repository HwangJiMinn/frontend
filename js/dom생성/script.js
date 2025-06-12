// html dom요소 가져오기
const btn = document.getElementById('eventBtn');
const container = document.getElementById('container');

let count = 0;

// 버튼 이벤트
btn.addEventListener('click', function () {
  count += 1;
  const newDiv = document.createElement('div');
  newDiv.className = 'box';
  newDiv.textContent = `${count}번째로 생성된 div`;
  container.appendChild(newDiv);
});
