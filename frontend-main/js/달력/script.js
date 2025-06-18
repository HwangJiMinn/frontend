const calendarBody = document.getElementById('calendarBody');
const monthYear = document.getElementById('monthYear');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const today = new Date(); // 오늘 날짜
let currentMonth = today.getMonth(); // 현재 월 (0-11) 0이 1월
let currentYear = today.getFullYear(); // 현재 연도

const renderCalendar = (month, year) => {
  calendarBody.innerHTML = '';
  // 해당 월의 첫 번째 날의 요일 (0-6, 0: 일요일)
  const firstDay = new Date(year, month, 1).getDay();

  // 해당 월의 마지막 날의 날짜
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = `${year}년 ${month + 1}월`;

  let date = 1;

  for (let i = 0; i < 6; i++) {
    // 최대 6주
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      // 최대 7일
      const cell = document.createElement('td');
      cell.textContent = date;
      date++;

      // 조건: 날짜를 제대로 td에 넣고, 오늘이면 today 클래스 추가
      // 힌트: firstDay, daysInMonth, today.getDate(), today.getMonth(), today.getFullYear() 등 활용

      // todo: 화이팅!!\
      

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);

    if (date > daysInMonth) return;
  }
};

prevBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);
