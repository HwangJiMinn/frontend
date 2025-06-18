const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const deleteBtn = document.getElementById('deleteBtn');

addBtn.addEventListener('click', () => {
  const inputText = todoInput.value.trim();
  console.log(inputText);
  if (inputText === '') {
    return;
  }

  const li = document.createElement('li');

  li.innerHTML = `
     ${inputText}
     <button class="deleteBtn">삭제</button>
    `;

  // to-do리스트 추가
  todoList.appendChild(li);

  // to-do리스트 삭제
  li.querySelector('.deleteBtn').addEventListener('click', () => {
    li.remove();
  });

  // 초기화
  todoInput.value = '';
});
